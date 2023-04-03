namespace asp.net_core_6_jwt_authentication.Data.Models
{
    public class LoginRequest
    {
        public LoginRequest()
        {
            UserName = string.Empty;
            Password = string.Empty;
        }

        public string UserName { get; set; }
        public string Password { get; set; }
        public int Role { get; set; }
    }

}
