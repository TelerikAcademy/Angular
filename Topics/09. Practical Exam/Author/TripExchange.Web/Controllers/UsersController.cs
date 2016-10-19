namespace TripExchange.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Http;
    using System.Security.Claims;
    using System.Security.Cryptography;
    using System.Threading.Tasks;
    using System.Web;
    using System.Web.Http;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Microsoft.AspNet.Identity.Owin;
    using Microsoft.Owin.Security;
    using Microsoft.Owin.Security.Cookies;
    using Microsoft.Owin.Security.OAuth;

    using TripExchange.Data;
    using TripExchange.Models;
    using TripExchange.Web.Models.Users;
    using TripExchange.Web.Providers;
    using TripExchange.Web.Results;

    [Authorize]
    [RoutePrefix("api/users")]
    public class UsersController : BaseApiController
    {
        private const string LocalLoginProvider = "Local";

        private ApplicationUserManager userManager;

        public UsersController()
            : base(new TripExchangeData())
        {
            this.userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(new ApplicationDbContext()));
        }

        public UsersController(
            ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat,
            ITripExchangeData data)
            : base(data)
        {
            this.UserManager = userManager;
            this.AccessTokenFormat = accessTokenFormat;
        }

        public ApplicationUserManager UserManager
        {
            get
            {
                return this.userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }

            private set
            {
                this.userManager = value;
            }
        }

        public ISecureDataFormat<AuthenticationTicket> AccessTokenFormat { get; private set; }

        private IAuthenticationManager Authentication
        {
            get
            {
                return Request.GetOwinContext().Authentication;
            }
        }
        
        // POST api/Users/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(RegisterBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            if (!model.IsDriver)
            {
                model.Car = null;
            }

            var user = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                IsDriver = model.IsDriver,
                Car = model.Car
            };

            IdentityResult result = await this.UserManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            return this.Ok();
        }

        // GET api/Users/UserInfo
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [Route("UserInfo")]
        [Authorize]
        public IHttpActionResult GetUserInfo()
        {
            var externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);
            var email = User.Identity.GetUserName();

            var db = new ApplicationDbContext();
            var user = db.Users.FirstOrDefault(x => x.UserName == email);

            if (user == null)
            {
                return this.BadRequest(string.Format("Username {0} not found", email));
            }

            return
                this.Ok(
                    new UserInfoViewModel
                        {
                            Email = email,
                            IsDriver = user.IsDriver,
                            Car = user.Car,
                        });
        }

        // POST api/Users/Logout
        [Route("Logout")]
        public IHttpActionResult Logout()
        {
            this.Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            return this.Ok();
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                this.UserManager.Dispose();
            }

            base.Dispose(disposing);
        }

        // GET api/Users/ManageInfo?returnUrl=%2F&generateState=true
        [Route("ManageInfo")]
        private async Task<ManageInfoViewModel> GetManageInfo(string returnUrl, bool generateState = false)
        {
            IdentityUser user = await this.UserManager.FindByIdAsync(User.Identity.GetUserId());

            if (user == null)
            {
                return null;
            }

           var logins = new List<UserLoginInfoViewModel>();

            foreach (IdentityUserLogin linkedAccount in user.Logins)
            {
                logins.Add(
                    new UserLoginInfoViewModel
                        {
                            LoginProvider = linkedAccount.LoginProvider,
                            ProviderKey = linkedAccount.ProviderKey
                        });
            }

            if (user.PasswordHash != null)
            {
                logins.Add(
                    new UserLoginInfoViewModel { LoginProvider = LocalLoginProvider, ProviderKey = user.UserName, });
            }

            return new ManageInfoViewModel
                       {
                           LocalLoginProvider = LocalLoginProvider,
                           Email = user.UserName,
                           Logins = logins,
                           ExternalLoginProviders = this.GetExternalLogins(returnUrl, generateState)
                       };
        }

        // POST api/Users/ChangePassword
        [Route("ChangePassword")]
        private async Task<IHttpActionResult> ChangePassword(ChangePasswordBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            IdentityResult result =
                await this.UserManager.ChangePasswordAsync(User.Identity.GetUserId(), model.OldPassword, model.NewPassword);

            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            return this.Ok();
        }

        // POST api/Users/SetPassword
        [Route("SetPassword")]
        private async Task<IHttpActionResult> SetPassword(SetPasswordBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var result = await this.UserManager.AddPasswordAsync(User.Identity.GetUserId(), model.NewPassword);

            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            return this.Ok();
        }

        // POST api/Users/AddExternalLogin
        [Route("AddExternalLogin")]
        private async Task<IHttpActionResult> AddExternalLogin(AddExternalLoginBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            this.Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

            AuthenticationTicket ticket = this.AccessTokenFormat.Unprotect(model.ExternalAccessToken);

            if (ticket == null || ticket.Identity == null
                || (ticket.Properties != null && ticket.Properties.ExpiresUtc.HasValue
                    && ticket.Properties.ExpiresUtc.Value < DateTimeOffset.UtcNow))
            {
                return this.BadRequest("External login failure.");
            }

            var externalData = ExternalLoginData.FromIdentity(ticket.Identity);

            if (externalData == null)
            {
                return this.BadRequest("The external login is already associated with an account.");
            }

            var result =
                await
                this.UserManager.AddLoginAsync(
                    User.Identity.GetUserId(),
                    new UserLoginInfo(externalData.LoginProvider, externalData.ProviderKey));

            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            return this.Ok();
        }

        // POST api/Users/RemoveLogin
        [Route("RemoveLogin")]
        private async Task<IHttpActionResult> RemoveLogin(RemoveLoginBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            IdentityResult result;

            if (model.LoginProvider == LocalLoginProvider)
            {
                result = await this.UserManager.RemovePasswordAsync(User.Identity.GetUserId());
            }
            else
            {
                result =
                    await
                    this.UserManager.RemoveLoginAsync(
                        User.Identity.GetUserId(),
                        new UserLoginInfo(model.LoginProvider, model.ProviderKey));
            }

            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            return this.Ok();
        }

        // GET api/Users/ExternalLogin
        [OverrideAuthentication]
        [HostAuthentication(DefaultAuthenticationTypes.ExternalCookie)]
        [AllowAnonymous]
        [Route("ExternalLogin", Name = "ExternalLogin")]
        private async Task<IHttpActionResult> GetExternalLogin(string provider, string error = null)
        {
            if (error != null)
            {
                return this.Redirect(Url.Content("~/") + "#error=" + Uri.EscapeDataString(error));
            }

            if (!User.Identity.IsAuthenticated)
            {
                return new ChallengeResult(provider, this);
            }

            ExternalLoginData externalLogin = ExternalLoginData.FromIdentity(User.Identity as ClaimsIdentity);

            if (externalLogin == null)
            {
                return this.InternalServerError();
            }

            if (externalLogin.LoginProvider != provider)
            {
                this.Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
                return new ChallengeResult(provider, this);
            }

            ApplicationUser user =
                await this.UserManager.FindAsync(new UserLoginInfo(externalLogin.LoginProvider, externalLogin.ProviderKey));

            bool hasRegistered = user != null;

            if (hasRegistered)
            {
                this.Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);

                var oauthIdentity = await user.GenerateUserIdentityAsync(this.UserManager, OAuthDefaults.AuthenticationType);
                var cookieIdentity =
                    await user.GenerateUserIdentityAsync(this.UserManager, CookieAuthenticationDefaults.AuthenticationType);

                AuthenticationProperties properties = ApplicationOAuthProvider.CreateProperties(user.UserName);
                this.Authentication.SignIn(properties, oauthIdentity, cookieIdentity);
            }
            else
            {
                IEnumerable<Claim> claims = externalLogin.GetClaims();
                var identity = new ClaimsIdentity(claims, OAuthDefaults.AuthenticationType);
                this.Authentication.SignIn(identity);
            }

            return this.Ok();
        }

        // GET api/Users/ExternalLogins?returnUrl=%2F&generateState=true
        [AllowAnonymous]
        [Route("ExternalLogins")]
        private IEnumerable<ExternalLoginViewModel> GetExternalLogins(string returnUrl, bool generateState = false)
        {
            IEnumerable<AuthenticationDescription> descriptions = this.Authentication.GetExternalAuthenticationTypes();
            var logins = new List<ExternalLoginViewModel>();

            string state;

            if (generateState)
            {
                const int StrengthInBits = 256;
                state = RandomOAuthStateGenerator.Generate(StrengthInBits);
            }
            else
            {
                state = null;
            }

            foreach (AuthenticationDescription description in descriptions)
            {
                var login = new ExternalLoginViewModel
                                {
                                    Name = description.Caption,
                                    Url =
                                        Url.Route(
                                            "ExternalLogin",
                                            new
                                                {
                                                    provider = description.AuthenticationType,
                                                    response_type = "token",
                                                    client_id = Startup.PublicClientId,
                                                    redirect_uri =
                                        new Uri(Request.RequestUri, returnUrl).AbsoluteUri,
                                                    state = state
                                                }),
                                    State = state
                                };
                logins.Add(login);
            }

            return logins;
        }

        // POST api/Users/RegisterExternal
        [OverrideAuthentication]
        [HostAuthentication(DefaultAuthenticationTypes.ExternalBearer)]
        [Route("RegisterExternal")]
        private async Task<IHttpActionResult> RegisterExternal(RegisterExternalBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var info = await this.Authentication.GetExternalLoginInfoAsync();
            if (info == null)
            {
                return this.InternalServerError();
            }

            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };

            IdentityResult result = await this.UserManager.CreateAsync(user);
            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            result = await this.UserManager.AddLoginAsync(user.Id, info.Login);
            if (!result.Succeeded)
            {
                return this.GetErrorResult(result);
            }

            return this.Ok();
        }

        #region Helpers

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return this.InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        this.ModelState.AddModelError(string.Empty, error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return this.BadRequest();
                }

                return this.BadRequest(this.ModelState);
            }

            return null;
        }

        private static class RandomOAuthStateGenerator
        {
            private static RandomNumberGenerator random = new RNGCryptoServiceProvider();

            public static string Generate(int strengthInBits)
            {
                const int BitsPerByte = 8;

                if (strengthInBits % BitsPerByte != 0)
                {
                    throw new ArgumentException("strengthInBits must be evenly divisible by 8.", "strengthInBits");
                }

                int strengthInBytes = strengthInBits / BitsPerByte;

                var data = new byte[strengthInBytes];
                random.GetBytes(data);
                return HttpServerUtility.UrlTokenEncode(data);
            }
        }

        private class ExternalLoginData
        {
            public string LoginProvider { get; set; }

            public string ProviderKey { get; set; }

            public string UserName { get; set; }

            public static ExternalLoginData FromIdentity(ClaimsIdentity identity)
            {
                if (identity == null)
                {
                    return null;
                }

                Claim providerKeyClaim = identity.FindFirst(ClaimTypes.NameIdentifier);

                if (providerKeyClaim == null || string.IsNullOrEmpty(providerKeyClaim.Issuer)
                    || string.IsNullOrEmpty(providerKeyClaim.Value))
                {
                    return null;
                }

                if (providerKeyClaim.Issuer == ClaimsIdentity.DefaultIssuer)
                {
                    return null;
                }

                return new ExternalLoginData
                {
                    LoginProvider = providerKeyClaim.Issuer,
                    ProviderKey = providerKeyClaim.Value,
                    UserName = identity.FindFirstValue(ClaimTypes.Name)
                };
            }

            public IList<Claim> GetClaims()
            {
                IList<Claim> claims = new List<Claim>();
                claims.Add(new Claim(ClaimTypes.NameIdentifier, this.ProviderKey, null, this.LoginProvider));

                if (this.UserName != null)
                {
                    claims.Add(new Claim(ClaimTypes.Name, this.UserName, null, this.LoginProvider));
                }

                return claims;
            }
        }

        #endregion
    }
}