using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesRating
    {
        public int SeriesRatingId { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? SeriesId { get; set; }
        public int? UserId { get; set; }

        public virtual Series? Series { get; set; }
        public virtual User? User { get; set; }
    }
}
