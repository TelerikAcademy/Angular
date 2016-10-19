namespace TripExchange.Web.Models.Drivers
{
    using System.ComponentModel.DataAnnotations;

    public class GetDriversBindingModel
    {
        [Range(1, int.MaxValue)]
        public int Page { get; set; }

        public string Username { get; set; }
    }
}