using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieRating
    {
        public long? MovieId { get; set; }
        public long? UserId { get; set; }
        public int? Rating { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual User? User { get; set; }
    }
}
