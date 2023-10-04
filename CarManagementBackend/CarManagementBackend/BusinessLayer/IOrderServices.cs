using CarManagementBackend.Data;
using CarManagementBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarManagementBackend.BusinessLayer
{
    public interface IOrderServices
    {

        Task<Booking> AddBooking(Booking booking);
        Task<List<Booking>> getBooking(int userId);
        Task<List<Booking>> getAllBooking();
        Task<Booking> UpdateProduct(int id);
        Task<Booking> UpdateReturn(int id);
        Task<Booking> DeleteBooking(int id);
    }  
    
    public class OrderServices  : IOrderServices
    {
        private readonly DataContext _dataContext;
        public OrderServices(DataContext datacontext)
        {
            _dataContext = datacontext;
        }
   
        public async Task<Booking> AddBooking([FromBody] Booking booking)
        {
            await _dataContext.Booking.AddAsync(booking);
            await _dataContext.SaveChangesAsync();
            return booking;
        }
        public async Task<List<Booking>> getBooking(int userId)
        {

            var userBookings = await _dataContext.Booking
                    .Where(b => b.User_ID == userId)
               .ToListAsync();   
            return userBookings;
        }

        public async Task<List<Booking>> getAllBooking()
        {

            var allbooking = await _dataContext.Booking.ToListAsync();
            return allbooking;
        }

        public async Task<Booking> UpdateProduct(int id)
        {
            var existingBooking = await _dataContext.Booking.FindAsync(id);
            existingBooking.ReturnRequest = 1;
            _dataContext.SaveChanges();
            return existingBooking;
        } 
        public async Task<Booking> UpdateReturn(int id)
        {
            var existingBooking = await _dataContext.Booking.FindAsync(id);
            existingBooking.ReturnRequest = 2;
            _dataContext.SaveChanges();
            return existingBooking;
        }

        public async Task<Booking> DeleteBooking(int id)
        {
            var booking = await _dataContext.Booking.FindAsync(id);
            _dataContext.Booking.Remove(booking);
            await _dataContext.SaveChangesAsync();
            return booking;
        }
    }
}
