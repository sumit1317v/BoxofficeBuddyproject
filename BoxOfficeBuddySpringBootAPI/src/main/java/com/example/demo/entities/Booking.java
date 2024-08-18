package com.example.demo.entities;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="booking_id")
    private Integer bookingId;

    @Column(name="date_time")
    private java.util.Date dateTime;
    @Column(name="total_price")
    private Float totalPrice;
    @Column(name="total_seats")
    private Integer totalSeats;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties("bookings") // Ignore the bookings list in User to prevent recursive serialization
    private User user;

    
    @JsonIgnoreProperties("bookings")
    @ManyToOne
    @JoinColumn(name = "show_id")
    private TheatreScreenShow show;
    
    

    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("booking")
    private Set<BookingDetails> bookingDetails;



	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Booking(Date dateTime, Float totalPrice, Integer totalSeats, User user, TheatreScreenShow show,
			Set<BookingDetails> bookingDetails) {
		super();
		this.dateTime = dateTime;
		this.totalPrice = totalPrice;
		this.totalSeats = totalSeats;
		this.user = user;
		this.show = show;
		this.bookingDetails = bookingDetails;
	}



	public java.util.Date getDateTime() {
		return dateTime;
	}



	public void setDateTime(java.util.Date dateTime) {
		this.dateTime =  dateTime;
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



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public TheatreScreenShow getShow() {
		return show;
	}



	public void setShow(TheatreScreenShow show) {
		this.show = show;
	}



	public Set<BookingDetails> getBookingDetails() {
		return bookingDetails;
	}



	public void setBookingDetails(Set<BookingDetails> bookingDetails) {
		this.bookingDetails = bookingDetails;
	}
    
    
    

}
