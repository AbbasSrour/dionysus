using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Episode
    {
        public long EpisodeId { get; set; }
        public long SeriesId { get; set; }
        public long SeasonId { get; set; }
        public int EpisodeNumber { get; set; }
        public string? EpisodeName { get; set; }
        public string? EpisodeWallpaper { get; set; }
        public string? Summery { get; set; }
        public int? ReleaseDate { get; set; }
        public int? EpisodeLength { get; set; }

        public virtual Season Season { get; set; } = null!;
        public virtual Series Series { get; set; } = null!;
    }
}
