using System;
using System.Collections.Generic;

namespace userloginservice.Models
{
    public partial class Theatre
    {
        public Theatre()
        {
            TheatreScreens = new HashSet<TheatreScreen>();
            TimeSlots = new HashSet<TimeSlot>();
        }

        public int TheatreId { get; set; }
        public int NoOfScreens { get; set; }
        public string TheatreName { get; set; } = null!;
        public int UserId { get; set; }
        public string GstNo { get; set; } = null!;
        public string AddressLine1 { get; set; } = null!;
        public string AddressLine2 { get; set; } = null!;
        public string Pincode { get; set; } = null!;
        public string Phone { get; set; } = null!;

        public virtual User User { get; set; } = null!;
        public virtual ICollection<TheatreScreen> TheatreScreens { get; set; }
        public virtual ICollection<TimeSlot> TimeSlots { get; set; }
    }
}
