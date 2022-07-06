using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class ImdbSeries
    {
        public string ImdbId { get; set; } = null!;
        public float? Rating { get; set; }
        public int? Vote { get; set; }
    }
}
