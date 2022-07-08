using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieWriter
    {
        public long WriterId { get; set; }
        public long? MovieId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual Writer Writer { get; set; } = null!;
    }
}
