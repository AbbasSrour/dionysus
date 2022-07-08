using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class SeriesHistory
    {
        public long UserId { get; set; }
        public long EpisodeId { get; set; }
        public DateOnly? WatchDate { get; set; }
        public TimeOnly? WatchTime { get; set; }
        public int? MinutesWatched { get; set; }

        public virtual Episode Episode { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
