using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Movie
    {
        public Movie()
        {
            MovieCasts = new HashSet<MovieCast>();
            MovieDirectors = new HashSet<MovieDirector>();
            MovieGenres = new HashSet<MovieGenre>();
            MovieHistories = new HashSet<MovieHistory>();
            MovieProductionCompanies = new HashSet<MovieProductionCompany>();
            MovieRatings = new HashSet<MovieRating>();
            MovieServers = new HashSet<MovieServer>();
            MovieWriters = new HashSet<MovieWriter>();
        }

        public int MovieId { get; set; }
        public string Name { get; set; } = null!;
        public int? ReleaseYear { get; set; }
        public string? Wallpaper { get; set; }
        public string? Summery { get; set; }
        public string? Trailer { get; set; }
        public string? PgRating { get; set; }
        public int? Length { get; set; }
        public int? Budget { get; set; }
        public long? Revenue { get; set; }
        public string? OgLanguage { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? ImdbId { get; set; }

        public virtual Imdb? Imdb { get; set; }
        public virtual ICollection<MovieCast> MovieCasts { get; set; }
        public virtual ICollection<MovieDirector> MovieDirectors { get; set; }
        public virtual ICollection<MovieGenre> MovieGenres { get; set; }
        public virtual ICollection<MovieHistory> MovieHistories { get; set; }
        public virtual ICollection<MovieProductionCompany> MovieProductionCompanies { get; set; }
        public virtual ICollection<MovieRating> MovieRatings { get; set; }
        public virtual ICollection<MovieServer> MovieServers { get; set; }
        public virtual ICollection<MovieWriter> MovieWriters { get; set; }
    }
}
