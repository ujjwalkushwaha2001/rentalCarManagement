using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarManagementBackend.Models
{
    public class Cars
    {
        [Key]
        public int ID { get; set; }
        public string Model { get; set; }
        public string Color { set; get; }
        public int Price { set; get; }
        public int Mileage { set; get; }
        public int Seating_capacity { set; get; }
         public string Fuel_Type { set; get; }
        public string Transmission_Type { set; get; }
        public string Location { set; get; }
        public string Images { set; get; }
        public string Description { get; set; }
        public string Availability { set; get; }
    }
}
