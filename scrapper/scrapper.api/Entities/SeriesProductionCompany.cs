using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesProductionCompany
    {
        public int SeriesProductionCompanyId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? ProductionCompanyId { get; set; }
        public int? SeriesId { get; set; }

        public virtual ProductionCompany? ProductionCompany { get; set; }
        public virtual Series? Series { get; set; }
    }
}
