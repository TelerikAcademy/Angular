namespace TripExchange.Web.Areas.HelpPage.ModelDescriptions
{
    using System.Collections.ObjectModel;

    public class ParameterDescription
    {
        public ParameterDescription()
        {
            this.Annotations = new Collection<ParameterAnnotation>();
        }

        public Collection<ParameterAnnotation> Annotations { get; private set; }

        public string Documentation { get; set; }

        public string Name { get; set; }

        public ModelDescription TypeDescription { get; set; }
    }
}