using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesWriter
    {
        public int SeriesWritersId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? WriterId { get; set; }
        public int? SeriesId { get; set; }

        public virtual Series? Series { get; set; }
        public virtual Writer? Writer { get; set; }
    }
}
