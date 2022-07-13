using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class User
    {
        public User()
        {
            GenreRatings = new HashSet<GenreRating>();
            MovieHistories = new HashSet<MovieHistory>();
            MovieRatings = new HashSet<MovieRating>();
            SeriesHistories = new HashSet<SeriesHistory>();
            SeriesRatings = new HashSet<SeriesRating>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string UserPassword { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public int Age { get; set; }
        public string Image { get; set; } = null!;
        public bool Verified { get; set; }
        public string? VerificationCode { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual ICollection<GenreRating> GenreRatings { get; set; }
        public virtual ICollection<MovieHistory> MovieHistories { get; set; }
        public virtual ICollection<MovieRating> MovieRatings { get; set; }
        public virtual ICollection<SeriesHistory> SeriesHistories { get; set; }
        public virtual ICollection<SeriesRating> SeriesRatings { get; set; }
    }
}
