package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.repositories.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository brepo;
	
	
	public List<Booking> getallBookings(){
		return brepo.findAll();
		
	}
	
	public Booking getbookingbyid(Integer booking_id)
	{
		Optional<Booking> obooking=brepo.findById(booking_id);
		Booking booking=null;
		try {
			booking=obooking.get();
		}catch (Exception e) {
			e.printStackTrace();
		}
		return booking;
	}
	
	public List<Booking> getbookingbyuserid(Integer user_id){
		return brepo.findByUserId(user_id);
	}
	
	public List<Booking> getbookingbyshowid(Integer show_id){
		return brepo.findByShowId(show_id);
	}
	
	public void deletebybookingid(Integer booking_id) {
		 brepo.deleteById(booking_id);
	}

}
