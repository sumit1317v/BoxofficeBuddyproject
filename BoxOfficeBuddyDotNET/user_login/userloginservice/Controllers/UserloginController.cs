using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using userloginservice.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;



namespace userloginservice.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class UserLoginController : ControllerBase
    {
        private readonly boxofficebuddy_dbContext _context;

        public UserLoginController(boxofficebuddy_dbContext context)
        {
            _context = context;
        }



        [HttpGet]

        public List<User> GetUser()
        {
            List<User> list = new List<User>();
            using (var db = new boxofficebuddy_dbContext())
            {
                list = db.Users.ToList();
            }
            return list;
        }
        [HttpGet]
        public List<User> GetUserwithRole()
        {
            List<User> list = new List<User>();
            using (var db = new boxofficebuddy_dbContext())
            {
                list = db.Users.Include(add => add.Role).ToList();
            }
            return list;
        }

        [HttpGet]
        public User? GetUserwithId(int id)
        {
            User? user = new User();
            using (var db = new boxofficebuddy_dbContext())
            {
                user = db.Users.Find(id);
            }
            return user;
        }


        [HttpPost]
        public dynamic SaveUser(User u)
        {
            using (var db = new boxofficebuddy_dbContext())
            {
                try
                {
                    u.Password = BCrypt.Net.BCrypt.HashPassword(u.Password);
                    db.Users.Add(u);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    return "Username already exists!";
                }
            }
            return u;
        }

        [HttpPost]
        public IActionResult CheckLogin(User us)
        {

            User? user;

            using (var db = new boxofficebuddy_dbContext())
            {
                user = db.Users.Where((u => u.UserName == us.UserName)).FirstOrDefault();
            }
            if (user != null && BCrypt.Net.BCrypt.Verify(us.Password, user.Password))
            {
                var response = new
                {
                    user.UserName,
                    user.RoleId,
                };
                return Ok(response);
            }
            return Unauthorized(new { message = "Invalid username or password" });
        }






        [HttpGet]
        public List<State> GetAllState()
        {
            List<State> result = new List<State>();
            using (var db = new boxofficebuddy_dbContext())
            {
                result = db.States.ToList();
            }
            return result;
        }

        [HttpGet]
        public List<City> GetAllCities(int sid)
        {
            List<City> result = new List<City>();
            using (var db = new boxofficebuddy_dbContext())
            {
                result = db.Cities.Where(c => c.StateId == sid).ToList();
            }
            return result;
        }

    }
}
