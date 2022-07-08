using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesDirector
    {
        public long DirectorId { get; set; }
        public long? SeriesId { get; set; }

        public virtual Director Director { get; set; } = null!;
        public virtual Series? Series { get; set; }
    }
}
