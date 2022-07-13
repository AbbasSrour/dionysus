using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieCast
    {
        public int MovieCastId { get; set; }
        public string? Role { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? MovieId { get; set; }
        public int? ActorId { get; set; }

        public virtual Actor? Actor { get; set; }
        public virtual Movie? Movie { get; set; }
    }
}
