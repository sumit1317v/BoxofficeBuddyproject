using System;
using System.Collections.Generic;

namespace userloginservice.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string? FullName { get; set; } = null!;
        public string? UserName { get; set; } = null!;
        public string? Password { get; set; } = null!;
        public string? AddressLine1 { get; set; } = null!;
        public string? AddressLine2 { get; set; } = null!;
        public string? Pincode { get; set; } = null!;
        public string? MobileNo { get; set; } = null!;
        public string? EmailId { get; set; } = null!;
        public int? CityId { get; set; }
        public int? RoleId { get; set; }
        public sbyte? Status { get; set; }

        public virtual City? City { get; set; } = null!;
        public virtual Role? Role { get; set; } = null!;
    }
}
