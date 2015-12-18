namespace TripExchange.Data.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;
    using System.Linq;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;

    using TripExchange.Models;

    public sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            this.AutomaticMigrationsEnabled = true;
            this.AutomaticMigrationDataLossAllowed = false;
        }

        protected override void Seed(ApplicationDbContext context)
        {
            if (context.Users.Any())
            {
                return;
            }

            var random = new Random();

            var users = this.SeedApplicationUsers(context);

            var cities = this.SeedCities(context);

            this.SeedTrips(context, random, users, cities);

            context.SaveChanges();
        }

        private List<City> SeedCities(ApplicationDbContext context)
        {
            var cities = new List<City>();
            var cityNames = new List<string>
                                {
                                    "Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Stara Zagora", "Pleven", "Sliven", "Dobrich",
                                    "Pernik", "Shumen", "Haskovo", "Yambol", "Pazardzhik", "Blagoevgrad", "Veliko Tarnovo", "Vratsa",
                                    "Gabrovo", "Asenovgrad", "Vidin", "Kazanlak", "Kyustendil", "Kardzhali", "Montana", "Dimitrovgrad",
                                    "Targovishte", "Lovech", "Silistra", "Dupnitsa", "Svishtov", "Razgrad", "Gorna Oryahovitsa",
                                    "Smolyan", "Petrich", "Sandanski", "Samokov", "Sevlievo", "Lom", "Karlovo", "Velingrad",
                                    "Nova Zagora", "Troyan", "Aytos", "Botevgrad", "Gotse Delchev", "Peshtera", "Harmanli",
                                    "Karnobat", "Svilengrad", "Panagyurishte", "Chirpan", "Popovo", "Rakovski", "Radomir",
                                    "Novi Iskar", "Kozloduy", "Parvomay", "Berkovitsa", "Cherven Bryag", "Pomorie", "Ihtiman",
                                    "Radnevo", "Provadiya", "Novi Pazar", "Razlog", "Byala Slatina", "Nesebar", "Balchik", "Kostinbrod",
                                    "Stamboliyski", "Kavarna", "Knezha", "Pavlikeni", "Mezdra", "Etropole", "Levski", "Teteven",
                                    "Elhovo", "Bankya", "Tryavna", "Lukovit", "Tutrakan", "Sredets", "Sopot", "Byala", "Veliki Preslav",
                                    "Isperih", "Belene", "Omurtag", "Bansko", "Krichim", "Galabovo", "Devnya", "Septemvri", "Rakitovo",
                                    "Lyaskovets", "Svoge", "Aksakovo", "Kubrat", "Dryanovo", "Beloslav", "Pirdop", "Lyubimets",
                                    "Momchilgrad", "Slivnitsa", "Hisarya", "Zlatograd", "Kostenets", "Devin", "General Toshevo",
                                    "Simeonovgrad", "Simitli", "Elin Pelin", "Dolni Chiflik", "Tervel", "Dulovo", "Varshets", "Kotel",
                                    "Madan", "Straldzha", "Saedinenie", "Bobov Dol", "Tsarevo", "Kuklen", "Tvarditsa", "Yakoruda",
                                    "Elena", "Topolovgrad", "Bozhurishte", "Chepelare", "Oryahovo", "Sozopol", "Belogradchik",
                                    "Perushtitsa", "Zlatitsa", "Strazhitsa", "Krumovgrad", "Kameno", "Dalgopol", "Vetovo", "Suvorovo",
                                    "Dolni Dabnik", "Dolna Banya", "Pravets", "Nedelino", "Polski Trambesh", "Trastenik", "Bratsigovo",
                                    "Koynare", "Godech", "Slavyanovo", "Dve Mogili", "Kostandovo", "Debelets", "Strelcha",
                                    "Sapareva Banya", "Ignatievo", "Smyadovo", "Breznik", "Sveti Vlas", "Nikopol", "Shivachevo", "Belovo",
                                    "Tsar Kaloyan", "Ivaylovgrad", "Valchedram", "Marten", "Glodzhevo", "Sarnitsa", "Letnitsa",
                                    "Varbitsa", "Iskar", "Ardino", "Shabla", "Rudozem", "Vetren", "Kresna", "Banya", "Batak", "Maglizh",
                                    "Valchi Dol", "Gulyantsi", "Dragoman", "Zavet", "Kran", "Miziya", "Primorsko", "Sungurlare",
                                    "Dolna Mitropoliya", "Krivodol", "Kula", "Kalofer", "Slivo Pole", "Kaspichan", "Apriltsi", "Belitsa",
                                    "Roman", "Dzhebel", "Dolna Oryahovitsa", "Buhovo", "Gurkovo", "Pavel Banya", "Nikolaevo", "Yablanitsa",
                                    "Kableshkovo", "Opaka", "Rila", "Ugarchin", "Dunavtsi", "Dobrinishte", "Hadzhidimovo", "Bregovo",
                                    "Byala Cherkva", "Zlataritsa", "Kocherinovo", "Dospat", "Tran", "Sadovo", "Laki", "Koprivshtitsa",
                                    "Malko Tarnovo", "Loznitsa", "Obzor", "Kilifarevo", "Borovo", "Batanovtsi", "Chernomorets", "Aheloy",
                                    "Pordim", "Suhindol", "Merichleri", "Glavinitsa", "Chiprovtsi", "Kermen", "Brezovo", "Plachkovtsi",
                                    "Zemen", "Balgarovo", "Alfatar", "Boychinovtsi", "Gramada", "Senovo", "Momin Prohod", "Kaolinovo",
                                    "Shipka", "Antonovo", "Ahtopol", "Boboshevo", "Bolyarovo", "Brusartsi", "Klisura", "Dimovo", "Kiten",
                                    "Pliska", "Madzharovo", "Melnik"
                                };

            foreach (var cityName in cityNames)
            {
                var city = new City { Name = cityName };
                context.Cities.Add(city);

                cities.Add(city);
            }

            return cities;
        }

        private void SeedTrips(
            ApplicationDbContext context,
            Random random,
            List<ApplicationUser> users,
            IReadOnlyList<City> cities)
        {
            const int NumberOfTrips = 200;
            for (var i = -NumberOfTrips / 2; i <= NumberOfTrips / 2; i++)
            {
                var firstCity = cities[random.Next(0, cities.Count)];
                var secondCity = firstCity;
                while (secondCity.Name == firstCity.Name)
                {
                    secondCity = cities[random.Next(0, cities.Count)];
                }

                users = this.Shuffle(users, random).ToList();

                var trip = new Trip
                               {
                                   DepartureTime = DateTime.Now.AddDays(i),
                                   AvailableSeats = 5,
                                   From = firstCity,
                                   To = secondCity,
                               };

                for (var j = 0; j < random.Next(0, 4); j++)
                {
                    trip.Passengers.Add(users[j]);
                }

                trip.Driver = users.FirstOrDefault(x => x.IsDriver && !trip.Passengers.Contains(x));
                trip.Passengers.Add(trip.Driver);

                context.Trips.Add(trip);
            }
        }

        private List<ApplicationUser> SeedApplicationUsers(ApplicationDbContext context)
        {
            const int NumberOfUsers = 40;
            var users = new List<ApplicationUser>();
            var userStore = new UserStore<ApplicationUser>(context);
            var manager = new UserManager<ApplicationUser>(userStore);
            for (var i = 1; i <= NumberOfUsers; i++)
            {
                var userName = string.Format("test{0:D2}@test.com", i);
                const string Password = "123456";
                var isDriver = i % 2 == 0;
                var car = isDriver ? string.Format("car {0}", i) : null;
                var user = new ApplicationUser
                               {
                                   UserName = userName,
                                   Email = userName,
                                   IsDriver = isDriver,
                                   Car = car,
                               };

                var identityResult = manager.Create(user, Password);
                if (identityResult.Succeeded)
                {
                    users.Add(user);
                }
            }

            return users;
        }

        private IList<T> Shuffle<T>(IList<T> list, Random randomGenerator)
        {
            for (var i = 0; i < list.Count; i++)
            {
                var swapIndex = randomGenerator.Next(list.Count);
                var currentElement = list[i];
                list[i] = list[swapIndex];
                list[swapIndex] = currentElement;
            }

            return list;
        }
    }
}
