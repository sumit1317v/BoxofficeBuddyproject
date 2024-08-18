package com.example.demo.dummyentities;

import java.util.Date;

public class BookingDummy {
	
	private Integer bookingId;

    
    private Date dateTime;
    
    private Float totalPrice;
    
    private Integer totalSeats;

	private Integer userid;


    private Integer showid;
    
    
    public BookingDummy() {
		super();
		
	}


	public BookingDummy(Integer bookingId, Date dateTime, Float totalPrice, Integer totalSeats, Integer userid,
			Integer showid) {
		super();
		this.bookingId = bookingId;
		this.dateTime = dateTime;
		this.totalPrice = totalPrice;
		this.totalSeats = totalSeats;
		this.userid = userid;
		this.showid = showid;
	}


	public Integer getBookingId() {
		return bookingId;
	}


	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}


	public Date getDateTime() {
		return dateTime;
	}


	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}


	public Float getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(Float totalPrice) {
		this.totalPrice = totalPrice;
	}


	public Integer getTotalSeats() {
		return totalSeats;
	}


	public void setTotalSeats(Integer totalSeats) {
		this.totalSeats = totalSeats;
	}


	public Integer getUserid() {
		return userid;
	}


	public void setUserid(Integer userid) {
		this.userid = userid;
	}


	public Integer getShowid() {
		return showid;
	}


	public void setShowid(Integer showid) {
		this.showid = showid;
	}
	
	
    
    

}
