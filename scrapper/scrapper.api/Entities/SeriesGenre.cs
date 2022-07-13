using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesGenre
    {
        public int SeriesGenres { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? GenreId { get; set; }
        public int? SeriesId { get; set; }

        public virtual Genre? Genre { get; set; }
        public virtual Series? Series { get; set; }
    }
}
