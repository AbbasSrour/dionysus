using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class ProductionCompany
    {
        public long ProductionCompanyId { get; set; }
        public string Name { get; set; } = null!;
        public string? Image { get; set; }
    }
}
