using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Series
    {
        public Series()
        {
            Episodes = new HashSet<Episode>();
            Seasons = new HashSet<Season>();
        }

        public long SeriesId { get; set; }
        public string SeriesName { get; set; } = null!;
        public int? ReleaseDate { get; set; }
        public string? SeriesWallpaper { get; set; }
        public string? Summery { get; set; }
        public string? Trailer { get; set; }
        public string? PgRating { get; set; }
        public string? OgLanguage { get; set; }

        public virtual ICollection<Episode> Episodes { get; set; }
        public virtual ICollection<Season> Seasons { get; set; }
    }
}
