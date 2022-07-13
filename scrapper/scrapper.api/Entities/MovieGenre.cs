using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieGenre
    {
        public int MovieGenreId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? GenreId { get; set; }
        public int? MovieId { get; set; }

        public virtual Genre? Genre { get; set; }
        public virtual Movie? Movie { get; set; }
    }
}
