using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesRating
    {
        public int? Rating { get; set; }
        public long? UserId { get; set; }
        public long? SeriesId { get; set; }

        public virtual Series? Series { get; set; }
        public virtual User? User { get; set; }
    }
}
