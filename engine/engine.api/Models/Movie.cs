using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Movie
    {
        public long MovieId { get; set; }
        public string? MovieName { get; set; }
        public string? MovieWallpaper { get; set; }
        public int? MovieReleaseDate { get; set; }
        public string? Summery { get; set; }
        public string? Trailer { get; set; }
        public string? ImdbId { get; set; }
        public string? PgRating { get; set; }
        public int? MovieLength { get; set; }
        public int? Budget { get; set; }
        public long? Revenue { get; set; }
        public string? OgLanguage { get; set; }

        public virtual ImdbMovie? Imdb { get; set; }
    }
}
