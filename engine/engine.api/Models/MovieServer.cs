using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieServer
    {
        public long ServerId { get; set; }
        public long? MovieId { get; set; }
        public string Url { get; set; } = null!;

        public virtual Movie? Movie { get; set; }
        public virtual Server Server { get; set; } = null!;
    }
}
