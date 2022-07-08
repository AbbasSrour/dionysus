using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieGenre
    {
        public long GenreId { get; set; }
        public long MovieId { get; set; }

        public virtual Genre Genre { get; set; } = null!;
        public virtual Movie Movie { get; set; } = null!;
    }
}
