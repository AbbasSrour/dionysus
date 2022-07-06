using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class Writer
    {
        public long WriterId { get; set; }
        public string WriterFirstName { get; set; } = null!;
        public string WriterLastName { get; set; } = null!;
        public string? WriterImage { get; set; }
    }
}
