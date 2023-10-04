using CarManagementBackend.BusinessLayer;
using CarManagementBackend.Data;
using CarManagementBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarManagementBackend.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {

        private readonly IOrderServices _orderServices;
        public OrderController(IOrderServices orderServices )
        {
            _orderServices = orderServices;
        }
        [HttpPost]
        public async Task<IActionResult> AddBooking([FromBody]  Booking booking )
        {
           var bookings= await _orderServices.AddBooking(booking);
            return Ok(bookings);
        }
        [HttpGet("{userId}")]
        public async Task<IActionResult>getBooking (int userId)
        {

            var userBookings = await _orderServices.getBooking(userId);

            if (userBookings == null)
            {
                return NotFound();
            }
            return Ok(userBookings);
        } 
        [HttpGet]
        public async Task<IActionResult>getAllBooking ()
        {

            var userBookings = await _orderServices.getAllBooking();

            if (userBookings == null)
            {
                return NotFound();
            }
            return Ok(userBookings);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id)
        {
            var existingBooking = await _orderServices.UpdateProduct(id);
            return Ok(existingBooking);
        }
        [HttpPut("onlyid/{id}")]
        public async Task<IActionResult> UpdateReturn(int id)
        {
            var existingBooking = await _orderServices.UpdateReturn(id);
            return Ok(existingBooking);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var booking = await _orderServices.DeleteBooking(id);
            return Ok(booking);
        }
    }
}
