using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesDirector
    {
        public int SeriesDirectorId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? DirectorId { get; set; }
        public int? SeriesId { get; set; }

        public virtual Director? Director { get; set; }
        public virtual Series? Series { get; set; }
    }
}
