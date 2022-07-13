using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Series
    {
        public Series()
        {
            Episodes = new HashSet<Episode>();
            Seasons = new HashSet<Season>();
            SeriesCasts = new HashSet<SeriesCast>();
            SeriesDirectors = new HashSet<SeriesDirector>();
            SeriesGenres = new HashSet<SeriesGenre>();
            SeriesProductionCompanies = new HashSet<SeriesProductionCompany>();
            SeriesRatings = new HashSet<SeriesRating>();
            SeriesWriters = new HashSet<SeriesWriter>();
        }

        public int SeriesId { get; set; }
        public string Name { get; set; } = null!;
        public int ReleaseYear { get; set; }
        public string? Wallpaper { get; set; }
        public string? Summery { get; set; }
        public string? Trailer { get; set; }
        public string? PgRating { get; set; }
        public string? OgLanguage { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? ImdbId { get; set; }

        public virtual Imdb? Imdb { get; set; }
        public virtual ICollection<Episode> Episodes { get; set; }
        public virtual ICollection<Season> Seasons { get; set; }
        public virtual ICollection<SeriesCast> SeriesCasts { get; set; }
        public virtual ICollection<SeriesDirector> SeriesDirectors { get; set; }
        public virtual ICollection<SeriesGenre> SeriesGenres { get; set; }
        public virtual ICollection<SeriesProductionCompany> SeriesProductionCompanies { get; set; }
        public virtual ICollection<SeriesRating> SeriesRatings { get; set; }
        public virtual ICollection<SeriesWriter> SeriesWriters { get; set; }
    }
}
