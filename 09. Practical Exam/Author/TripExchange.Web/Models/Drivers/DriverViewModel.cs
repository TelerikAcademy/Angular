namespace TripExchange.Web.Models.Drivers
{
    using System;
    using System.Linq;
    using System.Linq.Expressions;

    using TripExchange.Models;

    public class DriverViewModel
    {
        public static Expression<Func<ApplicationUser, DriverViewModel>> FromApplicationUser
        {
            get
            {
                return user => new DriverViewModel
                {
                    Id = user.Id,
                    Name = user.UserName,
                    NumberOfTotalTrips = user.Trips.Count,
                    NumberOfUpcomingTrips = user.Trips.Count(trip => trip.DepartureTime > DateTime.Now),
                };
            }
        }

        public string Id { get; set; }

        public string Name { get; set; }

        public int NumberOfUpcomingTrips { get; set; }

        public int NumberOfTotalTrips { get; set; }
    }
}
