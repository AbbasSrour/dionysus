using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class GenreRating
    {
        public int? Rating { get; set; }
        public long? UserId { get; set; }
        public long? GenreId { get; set; }

        public virtual Genre? Genre { get; set; }
        public virtual User? User { get; set; }
    }
}
