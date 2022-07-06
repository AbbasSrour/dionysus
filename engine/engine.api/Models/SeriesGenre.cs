using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesGenre
    {
        public long GenreId { get; set; }
        public long SeriesId { get; set; }

        public virtual Genre Genre { get; set; } = null!;
        public virtual Series Series { get; set; } = null!;
    }
}
