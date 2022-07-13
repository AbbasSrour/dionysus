using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class SeriesHistory
    {
        public int SeriesHistoryId { get; set; }
        public int? MinutesWatched { get; set; }
        public DateOnly WatchDate { get; set; }
        public TimeOnly WatchTime { get; set; }
        public int? UserId { get; set; }
        public int? EpisodeId { get; set; }

        public virtual Episode? Episode { get; set; }
        public virtual User? User { get; set; }
    }
}
