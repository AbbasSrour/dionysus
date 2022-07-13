using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieWriter
    {
        public int MovieWriterId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? WriterId { get; set; }
        public int? MovieId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual Writer? Writer { get; set; }
    }
}
