using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class MovieServer
    {
        public int MovieServersId { get; set; }
        public string Url { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int? MovieId { get; set; }
        public int? ServerId { get; set; }

        public virtual Movie? Movie { get; set; }
        public virtual Server? Server { get; set; }
    }
}
