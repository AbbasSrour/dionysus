using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Director
    {
        public Director()
        {
            MovieDirectors = new HashSet<MovieDirector>();
            SeriesDirectors = new HashSet<SeriesDirector>();
        }

        public int DirectorId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Image { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<MovieDirector> MovieDirectors { get; set; }
        public virtual ICollection<SeriesDirector> SeriesDirectors { get; set; }
    }
}
