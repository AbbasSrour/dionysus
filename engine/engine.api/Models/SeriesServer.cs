using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesServer
    {
        public long? EpisodeId { get; set; }
        public long ServerId { get; set; }
        public string Url { get; set; } = null!;

        public virtual Episode? Episode { get; set; }
        public virtual Server Server { get; set; } = null!;
    }
}
