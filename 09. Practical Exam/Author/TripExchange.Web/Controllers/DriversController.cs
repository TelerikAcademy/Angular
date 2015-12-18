namespace TripExchange.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;

    using TripExchange.Data;
    using TripExchange.Web.Models.Drivers;
    using TripExchange.Web.Models.Trips;

    public class DriversController : BaseApiController
    {
        public DriversController()
            : this(new TripExchangeData())
        {
        }

        public DriversController(ITripExchangeData data)
            : base(data)
        {
        }

        [HttpGet]
        public IEnumerable<DriverViewModel> Get([FromUri]GetDriversBindingModel model)
        {
            const int ItemsPerPage = 10;

            // When called anonymously it returns the top 10 drivers with no paging and filtering
            if (!User.Identity.IsAuthenticated || model == null)
            {
                model = new GetDriversBindingModel { Page = 1, Username = null };
            }

            var data = this.Data.Users.All().Where(x => x.IsDriver).Select(DriverViewModel.FromApplicationUser);

            if (!string.IsNullOrEmpty(model.Username))
            {
                data = data.Where(driver => driver.Name.Contains(model.Username));
            }

            data = data.OrderByDescending(driver => driver.NumberOfTotalTrips).ThenBy(driver => driver.Name);

            if (model.Page > 1)
            {
                data = data.Skip(ItemsPerPage * (model.Page - 1));
            }

            data = data.Take(ItemsPerPage);

            return data.ToList();
        }
        
        [HttpGet]
        [Authorize]
        public IHttpActionResult Get(string id)
        {
            var currentUserUsername = User.Identity.Name;

            // TODO: Investigate why using Expression<Func> (DriverWithTripsViewModel.FromApplicationUser()) is causing EF exception
            var driver =
                this.Data.Users.All()
                    .Where(user => user.IsDriver && user.Id == id)
                    .Select(
                        user =>
                        new DriverWithTripsViewModel
                            {
                                Id = user.Id,
                                Name = user.UserName,
                                NumberOfTotalTrips = user.Trips.Count(),
                                NumberOfUpcomingTrips =
                                    user.Trips.Count(trip => trip.DepartureTime > DateTime.Now),
                                Trips =
                                    user.Trips
                                        .Where(trip => trip.DepartureTime > DateTime.Now)
                                        .OrderBy(trip => trip.DepartureTime)
                                        .Take(50)
                                        .Select(trip =>
                                        new TripInfoViewModel
                                            {
                                                Id = trip.Id.ToString(),
                                                DriverId = trip.DriverId,
                                                DriverName = trip.Driver.UserName,
                                                From = trip.From.Name,
                                                To = trip.To.Name,
                                                DepartureDate = trip.DepartureTime,
                                                NumberOfFreeSeats = trip.AvailableSeats - trip.Passengers.Count,
                                                IsMine = trip.Passengers.Any(u => u.UserName == currentUserUsername),
                                            }),
                            })
                    .FirstOrDefault();

            if (driver == null)
            {
                return this.BadRequest("The requested driver was not found in users or is not marked as a driver.");
            }

            return this.Ok(driver);
        }
    }
}
