﻿using System;
using System.Collections.Generic;

namespace scrapper.api.Entities
{
    public partial class TypeormMetadatum
    {
        public string Type { get; set; } = null!;
        public string? Database { get; set; }
        public string? Schema { get; set; }
        public string? Table { get; set; }
        public string? Name { get; set; }
        public string? Value { get; set; }
    }
}