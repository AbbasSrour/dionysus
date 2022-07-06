using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesProductionCompany
    {
        public long? SeriesId { get; set; }
        public long ProductionCompanyId { get; set; }

        public virtual ProductionCompany ProductionCompany { get; set; } = null!;
        public virtual Series? Series { get; set; }
    }
}
