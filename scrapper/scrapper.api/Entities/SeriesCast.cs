using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesCast
    {
        public int SeriesCastId { get; set; }
        public string? ActorRole { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? SeriesId { get; set; }
        public int? ActorId { get; set; }

        public virtual Actor? Actor { get; set; }
        public virtual Series? Series { get; set; }
    }
}
