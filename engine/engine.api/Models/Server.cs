using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Server
    {
        public long ServerId { get; set; }
        public string? ServerName { get; set; }
        public string? ServerUrl { get; set; }
    }
}
