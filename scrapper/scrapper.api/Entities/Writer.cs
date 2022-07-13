using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Writer
    {
        public Writer()
        {
            MovieWriters = new HashSet<MovieWriter>();
            SeriesWriters = new HashSet<SeriesWriter>();
        }

        public int WriterId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Image { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<MovieWriter> MovieWriters { get; set; }
        public virtual ICollection<SeriesWriter> SeriesWriters { get; set; }
    }
}
