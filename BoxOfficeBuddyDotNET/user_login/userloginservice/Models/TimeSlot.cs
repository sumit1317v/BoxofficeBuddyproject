using System;
using System.Collections.Generic;

namespace userloginservice.Models
{
    public partial class TimeSlot
    {
        public int SlotId { get; set; }
        public string SlotName { get; set; } = null!;
        public string StartTime { get; set; } = null!;
        public string EndTime { get; set; } = null!;
        public int TheatreId { get; set; }

        public virtual Theatre Theatre { get; set; } = null!;
    }
}
