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
    public class UsersController : Controller
    {
        private readonly IUsersServices _usersServices;
        public UsersController(IUsersServices usersServices)
        {
            _usersServices = usersServices;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpecificUser(string mail ,string password)
        {
            try
            {

                    var user =await _usersServices.GetSpecificUser(mail, password);
                    return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
        [HttpPost]
        public async Task<IActionResult> AddUsers([FromBody] Users user)
        {
            var users = await _usersServices.AddUsers(user);
            return Ok(users);
        }
    }
}
