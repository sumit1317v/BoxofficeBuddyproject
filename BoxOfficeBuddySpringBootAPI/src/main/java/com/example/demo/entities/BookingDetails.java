package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="booking_details")
public class BookingDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="booking_detail_id")
    private Integer bookingDetailId;

    @Column(name="seat_no")
    private Integer seatNo;
    private Float price;

    @JsonIgnoreProperties("bookingDetails")
    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    

	public BookingDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookingDetails(Integer seatNo, Float price, Booking booking) {
		super();
		this.seatNo = seatNo;
		this.price = price;
		this.booking = booking;
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

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
    
    
}
