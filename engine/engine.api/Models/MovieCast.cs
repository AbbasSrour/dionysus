using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieCast
    {
        public long ActorId { get; set; }
        public long MovieId { get; set; }
        public string? ActorRole { get; set; }

        public virtual Actor Actor { get; set; } = null!;
        public virtual Movie Movie { get; set; } = null!;
    }
}
