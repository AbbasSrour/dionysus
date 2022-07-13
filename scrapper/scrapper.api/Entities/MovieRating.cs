using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieRating
    {
        public int MovieRatingId { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? UserId { get; set; }
        public int? MovieId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual User? User { get; set; }
    }
}
