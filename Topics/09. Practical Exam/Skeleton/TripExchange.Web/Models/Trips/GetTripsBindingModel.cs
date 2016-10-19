namespace TripExchange.Web.Models.Trips
{
    using System.ComponentModel.DataAnnotations;

    public class GetTripsBindingModel
    {
        public GetTripsBindingModel()
        {
            this.Page = 1;
            this.OrderBy = "date";
            this.OrderType = "asc";
            this.From = null;
            this.To = null;
            this.Finished = false;
            this.OnlyMine = false;
        }

        [Range(1, int.MaxValue)]
        public int Page { get; set; }

        public string OrderBy { get; set; }

        public string OrderType { get; set; }

        public string From { get; set; }

        public string To { get; set; }

        public bool Finished { get; set; }

        public bool OnlyMine { get; set; }

        public string GetOrderByPropertyName()
        {
            switch (this.OrderBy.ToLower())
            {
                case "driver":
                    return "DriverName";
                case "date":
                    return "DepartureDate";
                case "seats":
                    return "NumberOfFreeSeats";
                case "from":
                    return "From";
                case "to":
                    return "To";
                default:
                    return null;
            }
        }
    }
}