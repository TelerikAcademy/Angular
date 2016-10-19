namespace TripExchange.Models
{
    using System;
    using System.Collections.Generic;

    public class Trip
    {
        private ICollection<ApplicationUser> passengers;

        public Trip()
        {
            this.Id = Guid.NewGuid();
            this.passengers = new HashSet<ApplicationUser>();
        }

        public Guid Id { get; set; }

        public string DriverId { get; set; }

        public virtual ApplicationUser Driver { get; set; }

        public DateTime DepartureTime { get; set; }

        public virtual City From { get; set; }

        public virtual City To { get; set; }

        /// <summary>
        /// Available seats including the driver
        /// </summary>
        public byte AvailableSeats { get; set; }
        
        public virtual ICollection<ApplicationUser> Passengers
        {
            get { return this.passengers; }
            set { this.passengers = value; }
        }
    }
}
