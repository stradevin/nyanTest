using Newtonsoft.Json;

namespace asp.net_core_6_jwt_authentication.Data.DTO
{
    public class UserJson
    {
        [JsonProperty("username")]
        public string Username { get; set; }

        [JsonProperty("password")]
        public string Password { get; set; }
    }
}
