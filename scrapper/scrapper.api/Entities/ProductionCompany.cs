using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class ProductionCompany
    {
        public ProductionCompany()
        {
            MovieProductionCompanies = new HashSet<MovieProductionCompany>();
            SeriesProductionCompanies = new HashSet<SeriesProductionCompany>();
        }

        public int ProductionCompanyId { get; set; }
        public string Name { get; set; } = null!;
        public string? Image { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<MovieProductionCompany> MovieProductionCompanies { get; set; }
        public virtual ICollection<SeriesProductionCompany> SeriesProductionCompanies { get; set; }
    }
}
