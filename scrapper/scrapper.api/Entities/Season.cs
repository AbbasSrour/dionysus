using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Season
    {
        public Season()
        {
            Episodes = new HashSet<Episode>();
        }

        public int SeasonId { get; set; }
        public int Number { get; set; }
        public string? Summery { get; set; }
        public string? Wallpaper { get; set; }
        public string? Trailer { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? SeriesId { get; set; }

        public virtual Series? Series { get; set; }
        public virtual ICollection<Episode> Episodes { get; set; }
    }
}
