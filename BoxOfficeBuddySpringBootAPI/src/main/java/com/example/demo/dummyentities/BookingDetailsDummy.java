package com.example.demo.dummyentities;

public class BookingDetailsDummy {
	
	private Integer bookingDetailId;
	
    private Integer seatNo;
    
    private Float price;

    private Integer bookingid;

	public BookingDetailsDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookingDetailsDummy(Integer bookingDetailId, Integer seatNo, Float price, Integer bookingid) {
		super();
		this.bookingDetailId = bookingDetailId;
		this.seatNo = seatNo;
		this.price = price;
		this.bookingid = bookingid;
	}

	public Integer getBookingDetailId() {
		return bookingDetailId;
	}

	public void setBookingDetailId(Integer bookingDetailId) {
		this.bookingDetailId = bookingDetailId;
	}

	public Integer getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(Integer seatNo) {
		this.seatNo = seatNo;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Integer getBookingid() {
		return bookingid;
	}

	public void setBookingid(Integer bookingid) {
		this.bookingid = bookingid;
	}
    
    

}
