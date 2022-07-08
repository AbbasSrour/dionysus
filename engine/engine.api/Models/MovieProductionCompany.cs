using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieProductionCompany
    {
        public long? MovieId { get; set; }
        public long ProductionCompanyId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual ProductionCompany ProductionCompany { get; set; } = null!;
    }
}
