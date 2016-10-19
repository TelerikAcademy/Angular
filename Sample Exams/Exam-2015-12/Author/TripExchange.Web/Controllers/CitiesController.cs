namespace TripExchange.Web.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;

    using TripExchange.Data;

    public class CitiesController : BaseApiController
    {
        public CitiesController()
            : this(new TripExchangeData())
        {
        }

        public CitiesController(ITripExchangeData data)
            : base(data)
        {
        }

        /// <summary>
        /// Return list of all cities sorted by name
        /// </summary>
        /// <returns>List of strings with all cities sorted by name</returns>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var cities = this.Data.Cities.All().Select(city => city.Name).ToList();
            cities.Sort();
            return cities;
        }
    }
}