using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Genre
    {
        public Genre()
        {
            GenreRatings = new HashSet<GenreRating>();
            MovieGenres = new HashSet<MovieGenre>();
            SeriesGenres = new HashSet<SeriesGenre>();
        }

        public int GenreId { get; set; }
        public string GenreName { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<GenreRating> GenreRatings { get; set; }
        public virtual ICollection<MovieGenre> MovieGenres { get; set; }
        public virtual ICollection<SeriesGenre> SeriesGenres { get; set; }
    }
}
