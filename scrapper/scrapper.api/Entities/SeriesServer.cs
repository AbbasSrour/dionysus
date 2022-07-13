using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesServer
    {
        public int SeriesServerId { get; set; }
        public string Url { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? EpisodeId { get; set; }
        public int? ServerId { get; set; }

        public virtual Episode? Episode { get; set; }
        public virtual Server? Server { get; set; }
    }
}
