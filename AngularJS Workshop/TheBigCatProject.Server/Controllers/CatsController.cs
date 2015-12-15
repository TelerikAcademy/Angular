namespace TheBigCatProject.Server.Controllers
{
    using System.Web.Http;
    using System.Linq;
    using Models;
    using System.Collections.Generic;
    using Extensions;

    public class CatsController : ApiController
    {
        private List<CatRequestModel> catsData = new List<CatRequestModel>
        {
            new CatRequestModel
            {
                Id = 1,
                Name = "Pesho",
                Age = 3,
                Breed = CatBreed.Persian,
                Url = "https://www.petfinder.com/wp-content/uploads/2012/11/99059361-choose-cat-litter-632x475.jpg"
            },
            new CatRequestModel
            {
                Id = 2,
                Name = "Gosho",
                Age = 2,
                Breed = CatBreed.Siamese,
                Url = "http://static3.businessinsider.com/image/5238c9c5ecad047f12b2751a/internet-famous-grumpy-cat-just-landed-an-endorsement-deal-with-friskies.jpg"
            },
            new CatRequestModel
            {
                Id = 3,
                Name = "Ivan",
                Age = 25,
                Breed = CatBreed.Street,
                Url = "https://pbs.twimg.com/profile_images/447460759329460224/mt2UmwGG_400x400.jpeg"
            },
            new CatRequestModel
            {
                Id = 4,
                Name = "Asparuh",
                Age = 10,
                Breed = CatBreed.Siamese,
                Url = "http://purrfectcatbreeds.com/wp-content/uploads/2014/06/siberian-cat1.jpg"
            },
        };

        public IHttpActionResult Get([FromUri]CatFilterModel model)
        {
            var result = this.catsData
                .AsQueryable()
                .ToFilteredCats(model)
                .Take(10)
                .ToList();

            return this.Ok(result);
        }

        public IHttpActionResult Post(CatRequestModel model)
        {
            if (model != null)
            {
                model.Id = catsData.Count + 1;
                catsData.Add(model);
            }

            return Ok(model.Id);
        }
    }
}
