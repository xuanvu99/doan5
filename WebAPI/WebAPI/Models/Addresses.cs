using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Addresses
    {
        public Addresses()
        {
            Orders = new HashSet<Orders>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int? CustomerId { get; set; }

        public virtual Customers Customer { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }
}
