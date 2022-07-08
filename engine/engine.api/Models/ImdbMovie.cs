using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class ImdbMovie
    {
        public ImdbMovie()
        {
            Movies = new HashSet<Movie>();
        }

        public string ImdbId { get; set; } = null!;
        public float? Rating { get; set; }
        public int? Vote { get; set; }

        public virtual ICollection<Movie> Movies { get; set; }
    }
}
