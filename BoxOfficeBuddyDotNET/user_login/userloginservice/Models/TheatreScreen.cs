using System;
using System.Collections.Generic;

namespace userloginservice.Models
{
    public partial class TheatreScreen
    {
        public int ScreenId { get; set; }
        public string ScreenName { get; set; } = null!;
        public string TotalSeats { get; set; } = null!;
        public int TheatreId { get; set; }

        public virtual Theatre Theatre { get; set; } = null!;
    }
}
