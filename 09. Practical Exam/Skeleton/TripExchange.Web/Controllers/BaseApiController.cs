namespace TripExchange.Web.Controllers
{
    using System.Web.Http;

    using TripExchange.Data;

    public class BaseApiController : ApiController
    {
        public BaseApiController(ITripExchangeData data)
        {
            this.Data = data;
        }

        protected ITripExchangeData Data { get; private set; }
    }
}