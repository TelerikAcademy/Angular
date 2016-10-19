namespace TripExchange.Web.Models.Trips
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class CreateTripBindingModel
    {
        [Required]
        public string From { get; set; }

        [Required]
        public string To { get; set; }

        [Required]
        public DateTime DepartureTime { get; set; }

        [Required]
        [Range(1, 254)]
        public byte AvailableSeats { get; set; }
    }
}