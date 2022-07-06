using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Season
    {
        public Season()
        {
            Episodes = new HashSet<Episode>();
        }

        public long SeasonId { get; set; }
        public long SeriesId { get; set; }
        public int SeasonNumber { get; set; }
        public string? Summery { get; set; }
        public string? SeasonWallpaper { get; set; }
        public string? Trailer { get; set; }

        public virtual Series Series { get; set; } = null!;
        public virtual ICollection<Episode> Episodes { get; set; }
    }
}
