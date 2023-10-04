using CarManagementBackend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarManagementBackend.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Users> Users { set; get; }
        public DbSet<Cars> Cars { set; get; }
        public DbSet<Booking> Booking { set; get; }

    }
}
