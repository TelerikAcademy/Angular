namespace TripExchange.Data
{
    using System.Data.Entity;

    using Microsoft.AspNet.Identity.EntityFramework;

    using TripExchange.Models;

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
            // Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, Configuration>());
        }

        public IDbSet<Trip> Trips { get; set; }

        public IDbSet<City> Cities { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Trip>()
                .HasRequired(m => m.Driver)
                .WithMany(m => m.TripsWhereDriver)
                .HasForeignKey(m => m.DriverId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Trip>()
                .HasMany(m => m.Passengers)
                .WithMany(m => m.Trips);
        }
    }
}