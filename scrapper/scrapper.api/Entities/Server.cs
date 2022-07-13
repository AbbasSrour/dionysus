using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Server
    {
        public Server()
        {
            MovieServers = new HashSet<MovieServer>();
            SeriesServers = new HashSet<SeriesServer>();
        }

        public int ServersId { get; set; }
        public string Name { get; set; } = null!;
        public string Url { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<MovieServer> MovieServers { get; set; }
        public virtual ICollection<SeriesServer> SeriesServers { get; set; }
    }
}
