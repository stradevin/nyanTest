using asp.net_core_6_jwt_authentication.Data.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace asp.net_core_6_jwt_authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        public RolesController() { }

        [HttpPost("user")]
        public ActionResult CreateUser([FromBody] UserJson user)
        {
            return Ok();
        }
    }
}
