namespace TripExchange.Data
{
    using TripExchange.Models;

    public interface ITripExchangeData
    {
        IRepository<ApplicationUser> Users { get; }

        IRepository<Trip> Trips { get; }

        IRepository<City> Cities { get; }

        int SaveChanges();
    }
}
