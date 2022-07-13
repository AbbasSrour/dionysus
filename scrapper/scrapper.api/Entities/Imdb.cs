using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Imdb
    {
        public int ImdbId { get; set; }
        public float? Rating { get; set; }
        public int? Vote { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual Series? Series { get; set; }
    }
}
