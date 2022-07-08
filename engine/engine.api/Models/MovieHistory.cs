using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class MovieHistory
    {
        public long UserId { get; set; }
        public long MovieId { get; set; }
        public DateOnly? WatchDate { get; set; }
        public TimeOnly? WatchTime { get; set; }
        public int? MinutesWatched { get; set; }

        public virtual Movie Movie { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
