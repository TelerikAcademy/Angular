namespace TripExchange.Web.Models.Trips
{
    using System;

    public class TripInfoViewModel
    {
        public string Id { get; set; }

        public string DriverId { get; set; }

        public string DriverName { get; set; }

        public string From { get; set; }

        public string To { get; set; }

        public DateTime DepartureDate { get; set; }

        public int NumberOfFreeSeats { get; set; }

        public bool IsMine { get; set; }
    }
}