using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class Actor
    {
        public Actor()
        {
            MovieCasts = new HashSet<MovieCast>();
            SeriesCasts = new HashSet<SeriesCast>();
        }

        public int ActorId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Image { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<MovieCast> MovieCasts { get; set; }
        public virtual ICollection<SeriesCast> SeriesCasts { get; set; }
    }
}
