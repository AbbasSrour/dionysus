using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class GenreRating
    {
        public int GenreRating1 { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? UserId { get; set; }
        public int? GenreId { get; set; }

        public virtual Genre? Genre { get; set; }
        public virtual User? User { get; set; }
    }
}
