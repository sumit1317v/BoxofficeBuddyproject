package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dummyentities.TheatreDummy;
import com.example.demo.entities.City;
import com.example.demo.entities.Theatre;
import com.example.demo.entities.User;
import com.example.demo.services.CityService;
import com.example.demo.services.TheatreService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TheatreController {

	@Autowired
	TheatreService tservice;
	
	@Autowired
	UserService uservice;
	
	@Autowired
	CityService cservice;
	
	
	
	@GetMapping("/getalltheat")
	public List<Theatre> getallTheatre(){
		return tservice.getAllTheatre();
	}
	
	/*@PostMapping("/savet")
	public Theatre saveTheat(@RequestBody Theatre th) {
		
		return tservice.saveTheatre(th);
	}*/
	
	@PostMapping(value="/savetheat")
	 public Theatre saveque(@RequestBody  TheatreDummy td) {
		User u =  uservice.getById(td.getUserid());
		City c= cservice.getById(td.getCityid());
		
		Theatre t = new Theatre();
		
		t.setTheatreName(td.getTheatreName());
		t.setGstNo(td.getGstNo());
		t.setAddressLine1(td.getAddressLine1());
		t.setAddressLine2(td.getAddressLine2());
		t.setNoOfScreens(td.getNoOfScreens());
		t.setPhone(td.getPhone());
		t.setPincode(td.getPincode());
		t.setUser(u);
		t.setCity(c);
		
		return tservice.saveTheatre(t);
		
		
	}
	
	//query string - data - key -value
		//http://localhost:8080/gettheatrebyid?theatreid=12
		@GetMapping("/gettheatrebyid")
		public Theatre getTheatreById(@RequestParam("theatreid") int theatreId) {
				return tservice.getTheatreById(theatreId);
		}
	
	 @GetMapping("/gettheatrebyid/:theatreid")
	   public Theatre getTheatreById1(@PathVariable("theatreid") int theatreId ) {
		   return tservice.getTheatreById(theatreId);
	   }
	
	 @PostMapping("/getTheatrebyuserid")
		public List<Theatre> getAllTheatreByUserid(@RequestBody TheatreDummy td){
			return tservice.getTheatre(td.getUserid());
		}
	 
	 
	 
	 
	 
}