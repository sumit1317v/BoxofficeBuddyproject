package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;

@CrossOrigin(origins= {"http://localhost:3000"})
@RestController
public class BookingController {
	@Autowired
	BookingService bserv;
	
	@GetMapping("/getallbooking")
	public List<Booking> getAllBooking(){
		return bserv.getallBookings();
	}
	@GetMapping("/getbookingbyid/{booking_id}")
	public Booking getbookingbyid(@PathVariable("booking_id")Integer booking_id)
	{
		return bserv.getbookingbyid(booking_id);
	}
	 @GetMapping("/getbookingbyuserid/{user_id}")
	    public List<Booking> getBookingsByUserid(@PathVariable Integer user_id) {
	        return bserv.getbookingbyuserid(user_id);
	    }
	 
	 @GetMapping("/getbookingbyshowid/{show_id}")
	 public List<Booking> getbookingbyshowid(@PathVariable Integer show_id ){
		 return bserv.getbookingbyshowid(show_id);
	 }


}
