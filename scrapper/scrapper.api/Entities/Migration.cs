using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Migration
    {
        public int Id { get; set; }
        public long Timestamp { get; set; }
        public string Name { get; set; } = null!;
    }
}
