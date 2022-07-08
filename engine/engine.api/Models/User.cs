using System;
using System.Collections.Generic;

namespace engine.api.Models
{
    public partial class User
    {
        public long UserId { get; set; }
        public string? UserName { get; set; }
        public string? UserEmail { get; set; }
        public string? UserPassword { get; set; }
    }
}
