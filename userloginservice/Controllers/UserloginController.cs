using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using userloginservice.Models;


namespace userloginservice.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class UserloginController : ControllerBase
    {
        [HttpGet]
        
        public List<User> GetUser()
        {
            List<User> list = new List<User>();
            using (var db=new boxofficebuddy_dbContext())
            {
                list=db.Users.ToList();
            }
            return list;
        }

        [HttpGet]
        public List<User> GetUserwithRole()
        {
            List<User> list = new List<User>();
            using (var db = new boxofficebuddy_dbContext())
            {
                list=db.Users.Include(add => add.Role).ToList();
            }
            return list;
        }

        [HttpGet]
        public User? GetUserwithId(int id)
        {
            User? user = new User();
            using (var db = new boxofficebuddy_dbContext())
            {
                user=db.Users.Find(id);
            }
            return user;
        }


        [HttpPost]
        public User SaveUser(User user)
        {
            using (var db = new boxofficebuddy_dbContext())
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

                db.Users.Add(user);
                db.SaveChanges();
            }
            return user;


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


        [HttpPost]
        public IActionResult CheckLogin1(String username,string password)
        {
            User? user;

            using (var db = new boxofficebuddy_dbContext())
            {
                user=db.Users.Find(username);
                
            }
            return Unauthorized(new { message = "Invalid username or password" });
        }


    }


}
