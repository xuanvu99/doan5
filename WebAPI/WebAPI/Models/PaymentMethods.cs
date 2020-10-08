using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class PaymentMethods
    {
        public PaymentMethods()
        {
            Orders = new HashSet<Orders>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte Status { get; set; }

        public virtual ICollection<Orders> Orders { get; set; }
    }
}
