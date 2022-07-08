using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class History
    {
        public long? UserId { get; set; }
        public long? MovieId { get; set; }
        public long? EpisodeId { get; set; }
        public DateOnly? WatchDate { get; set; }
        public TimeOnly? WatchTime { get; set; }
    }
}
