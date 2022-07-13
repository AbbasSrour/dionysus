using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Episode
    {
        public Episode()
        {
            SeriesHistories = new HashSet<SeriesHistory>();
            SeriesServers = new HashSet<SeriesServer>();
        }

        public int EpisodeId { get; set; }
        public int Number { get; set; }
        public string? Name { get; set; }
        public string? Wallpaper { get; set; }
        public string? Summery { get; set; }
        public int? ReleaseDate { get; set; }
        public int? EpisodeLength { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? SeasonId { get; set; }
        public int? SeriesId { get; set; }

        public virtual Season? Season { get; set; }
        public virtual Series? Series { get; set; }
        public virtual ICollection<SeriesHistory> SeriesHistories { get; set; }
        public virtual ICollection<SeriesServer> SeriesServers { get; set; }
    }
}
