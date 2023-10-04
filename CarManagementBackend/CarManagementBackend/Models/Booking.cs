using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarManagementBackend.Models
{
    public class Booking
    {
        [Key]
        public int ID { get; set; }
        public int User_ID { get; set; }
        public int Car_ID { get; set; }
        public string Model { get; set; }
        public string Images { set; get; }
        public int TotalDay { set; get; }
        public DateTime OrderDate { get; set; }
        public string Name { get; set; }
        public int ReturnRequest { get; set; }
        public int totalPrice { get; set; }

    }
}
