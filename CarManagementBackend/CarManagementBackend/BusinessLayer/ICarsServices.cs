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
    public interface ICarsServices
    {

        Task<List<Cars>> GetCars();
        Task<Cars> AddCars(Cars car);
        Task<Cars> GetProductById(int id);
        Task<Cars> UpdateProduct(int id ,Cars updatedProduct);
        Task<Cars> UpdateAvialability(int id );
        Task<Cars> DeleteProduct(int id);
    }

    public class CarsServices: ICarsServices
    {

        private readonly DataContext _dataContext;
        public CarsServices(DataContext datacontext)
        {
            _dataContext = datacontext;
        }

      
        public async Task<List<Cars>> GetCars()
        {

            var cars = await _dataContext.Cars.ToListAsync();
            return cars;
        }
        public async Task<Cars> AddCars([FromBody] Cars car)
        {
            await _dataContext.Cars.AddAsync(car);
            await _dataContext.SaveChangesAsync();
            return car;
        }
        public async Task<Cars> GetProductById(int id)
        {
            var car = await _dataContext.Cars.FindAsync(id);
            return car;
        }
    
        public async Task<Cars> DeleteProduct(int id)
        {
            var car = await _dataContext.Cars.FindAsync(id);
            _dataContext.Cars.Remove(car);
            await _dataContext.SaveChangesAsync();
            return car;
        }
       
        public async Task<Cars> UpdateProduct(int id, Cars updatedProduct)
        {

            var existingProduct = await _dataContext.Cars.FindAsync(id);
            existingProduct.Model = updatedProduct.Model;
            existingProduct.Color = updatedProduct.Color;
            existingProduct.Mileage = updatedProduct.Mileage;
            existingProduct.Price = updatedProduct.Price;
            existingProduct.Seating_capacity = updatedProduct.Seating_capacity;
            existingProduct.Fuel_Type = updatedProduct.Fuel_Type;
            existingProduct.Transmission_Type = updatedProduct.Transmission_Type;
            existingProduct.Location = updatedProduct.Location;
            existingProduct.Images = updatedProduct.Images;
            existingProduct.Description = updatedProduct.Description;
            existingProduct.Availability = updatedProduct.Availability;
            _dataContext.SaveChanges();
            return existingProduct;
        } 
        public async Task<Cars> UpdateAvialability(int id)
        {

            var existingProduct = await _dataContext.Cars.FindAsync(id);       
            existingProduct.Availability ="Available";
            _dataContext.SaveChanges();
            return existingProduct;
        }
    }

}
