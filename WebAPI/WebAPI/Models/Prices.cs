using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Prices
    {
        public int Id { get; set; }
        public int? OptionId { get; set; }
        public int Price { get; set; }

        public virtual Options Option { get; set; }
    }
}
