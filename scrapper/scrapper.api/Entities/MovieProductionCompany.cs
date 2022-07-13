using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieProductionCompany
    {
        public int MovieProductionCompanyId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? ProductionCompanyId { get; set; }
        public int? MovieId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual ProductionCompany? ProductionCompany { get; set; }
    }
}
