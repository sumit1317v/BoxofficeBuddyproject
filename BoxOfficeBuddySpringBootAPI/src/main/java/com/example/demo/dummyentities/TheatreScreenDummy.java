package com.example.demo.dummyentities;

public class TheatreScreenDummy {
	 private String screenName;

	    private String totalSeats;
	    
	    private Integer theatreid;

		public TheatreScreenDummy() {
			super();
			// TODO Auto-generated constructor stub
		}

		public TheatreScreenDummy(String screenName, String totalSeats, Integer theatreid) {
			super();
			this.screenName = screenName;
			this.totalSeats = totalSeats;
			this.theatreid = theatreid;
		}

		public String getScreenName() {
			return screenName;
		}

		public void setScreenName(String screenName) {
			this.screenName = screenName;
		}

		public String getTotalSeats() {
			return totalSeats;
		}

		public void setTotalSeats(String totalSeats) {
			this.totalSeats = totalSeats;
		}

		public Integer getTheatreid() {
			return theatreid;
		}

		public void setTheatreid(Integer theatreid) {
			this.theatreid = theatreid;
		}
	    

}
