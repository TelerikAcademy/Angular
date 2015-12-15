namespace TheBigCatProject.Server.Models
{
    public class CatRequestModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Age { get; set; }

        public string Url { get; set; }

        public CatBreed Breed { get; set; }
    }
}
