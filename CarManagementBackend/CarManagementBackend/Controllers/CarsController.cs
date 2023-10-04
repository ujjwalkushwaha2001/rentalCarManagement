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

    public class CarsController : Controller
    {
        private readonly ICarsServices _carservice;
      
        public CarsController(ICarsServices carservice)
        {
            _carservice = carservice;
        }
        [HttpGet]
        public async Task<IActionResult> GetCars()
        {

            var cars = await _carservice.GetCars();
            return Ok(cars);
        } 
        [HttpPost]
        public async Task<IActionResult> AddCars([FromBody] Cars car)
        {

            await _carservice.AddCars(car);        
            return Ok(car);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var car = await _carservice.GetProductById(id);

            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var car = await _carservice.DeleteProduct(id);

            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Cars updatedProduct)
        {
           
                var existingProduct = await _carservice.UpdateProduct(id, updatedProduct);
                return Ok(existingProduct);
          
        }

        [HttpPut("onlyid/{id}")]
        public async Task<IActionResult> UpdateAvailability(int id)
        {
            var existingProduct = await _carservice.UpdateAvialability(id);
            return Ok(existingProduct);
        }
    }
}
