using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieDirector
    {
        public int MovieDirectorId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? DirectorId { get; set; }
        public int? MovieId { get; set; }

        public virtual Director? Director { get; set; }
        public virtual Movie? Movie { get; set; }
    }
}
