using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieHistory
    {
        public int MovieHistoryId { get; set; }
        public DateOnly WatchDate { get; set; }
        public TimeOnly WatchTime { get; set; }
        public int? MinutesWatched { get; set; }
        public int? MovieId { get; set; }
        public int? UserId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual User? User { get; set; }
    }
}
