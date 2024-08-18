package com.example.demo.dummyentities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
public class TheatreScreenShowDummy {
	 
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date showStartDate;

	@JsonFormat(pattern = "yyyy-MM-dd")
	  private Date showEndDate;
	 

	  private String nineAmSlot;

	   
	    private String twelveAmSlot;

	    
	    private String threePmSlot;

	    
	    private String sixPmSlot;

	    private String ninePmSlot;
	    
      private Integer moveid;
      
      private Integer screenid;

	public TheatreScreenShowDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TheatreScreenShowDummy(Integer showId, Date showStartDate, Date showEndDate, String nineAmSlot,
			String twelveAmSlot, String threePmSlot, String sixPmSlot, String ninePmSlot, Integer moveid,
			Integer screenid) {
		super();
		
		this.showStartDate = showStartDate;
		this.showEndDate = showEndDate;
		this.nineAmSlot = nineAmSlot;
		this.twelveAmSlot = twelveAmSlot;
		this.threePmSlot = threePmSlot;
		this.sixPmSlot = sixPmSlot;
		this.ninePmSlot = ninePmSlot;
		this.moveid = moveid;
		this.screenid = screenid;
	}

	public TheatreScreenShowDummy(Date showStartDate, Date showEndDate, String nineAmSlot, String twelveAmSlot,
			String threePmSlot, String sixPmSlot, String ninePmSlot, Integer moveid, Integer screenid) {
		super();
		this.showStartDate = showStartDate;
		this.showEndDate = showEndDate;
		this.nineAmSlot = nineAmSlot;
		this.twelveAmSlot = twelveAmSlot;
		this.threePmSlot = threePmSlot;
		this.sixPmSlot = sixPmSlot;
		this.ninePmSlot = ninePmSlot;
		this.moveid = moveid;
		this.screenid = screenid;
	}



	public Date getShowStartDate() {
		return showStartDate;
	}

	public void setShowStartDate(Date showStartDate) {
		this.showStartDate = showStartDate;
	}

	public Date getShowEndDate() {
		return showEndDate;
	}

	public void setShowEndDate(Date showEndDate) {
		this.showEndDate = showEndDate;
	}

	public String getNineAmSlot() {
		return nineAmSlot;
	}

	public void setNineAmSlot(String nineAmSlot) {
		this.nineAmSlot = nineAmSlot;
	}

	public String getTwelveAmSlot() {
		return twelveAmSlot;
	}

	public void setTwelveAmSlot(String twelveAmSlot) {
		this.twelveAmSlot = twelveAmSlot;
	}

	public String getThreePmSlot() {
		return threePmSlot;
	}

	public void setThreePmSlot(String threePmSlot) {
		this.threePmSlot = threePmSlot;
	}

	public String getSixPmSlot() {
		return sixPmSlot;
	}

	public void setSixPmSlot(String sixPmSlot) {
		this.sixPmSlot = sixPmSlot;
	}

	public String getNinePmSlot() {
		return ninePmSlot;
	}

	public void setNinePmSlot(String ninePmSlot) {
		this.ninePmSlot = ninePmSlot;
	}

	public Integer getMoveid() {
		return moveid;
	}

	public void setMoveid(Integer moveid) {
		this.moveid = moveid;
	}

	public Integer getScreenid() {
		return screenid;
	}

	public void setScreenid(Integer screenid) {
		this.screenid = screenid;
	}
      

}
