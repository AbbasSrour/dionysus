using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Actor
    {
        public long ActorId { get; set; }
        public string? ActorFirstName { get; set; }
        public string? ActorLastName { get; set; }
        public string? ActorImage { get; set; }
    }
}
