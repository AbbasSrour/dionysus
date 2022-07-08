using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesWriter
    {
        public long? SeriesId { get; set; }
        public long WriterId { get; set; }

        public virtual Series? Series { get; set; }
        public virtual Writer Writer { get; set; } = null!;
    }
}
