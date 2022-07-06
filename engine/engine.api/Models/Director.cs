using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Director
    {
        public string DirectorFirstName { get; set; } = null!;
        public string? DirectorLastName { get; set; }
        public string? DirectorImage { get; set; }
        public long DirectorId { get; set; }
    }
}
