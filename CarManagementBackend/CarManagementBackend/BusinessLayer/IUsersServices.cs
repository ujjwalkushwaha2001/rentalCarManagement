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
    public interface IUsersServices
    {
        Task<List<Users> >GetSpecificUser(string mail,string Password);
        Task<Users> AddUsers(Users user);
    }
    
    public class UsersServices: IUsersServices
    {
        private readonly DataContext _dataContext;
        public UsersServices(DataContext datacontext)
        {
            _dataContext = datacontext;
        }
        public async Task<List<Users>> GetSpecificUser(string mail, string password)
        {
            
                var user = await _dataContext.Users.Where(s => s.Email == mail && s.Password == password).ToListAsync();
                return user;   
        }             
        public async Task<Users> AddUsers([FromBody] Users user)
        {
            await _dataContext.Users.AddAsync(user);
            await _dataContext.SaveChangesAsync();
            return user;
        }
    }

}
