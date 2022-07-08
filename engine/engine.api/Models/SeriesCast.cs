using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesCast
    {
        public long ActorId { get; set; }
        public long SeriesId { get; set; }
        public string? ActorRole { get; set; }

        public virtual Actor Actor { get; set; } = null!;
        public virtual Series Series { get; set; } = null!;
    }
}
