namespace TheBigCatProject.Server.Models
{
    public class CatFilterModel
    {
        public CatFilterModel()
        {
            this.Page = 1;
        }

        public string Name { get; set; }

        public int? Age { get; set; }

        public CatBreed? Breed { get; set; }

        public int Page { get; set; }
    }
}
