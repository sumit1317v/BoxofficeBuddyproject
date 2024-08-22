package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dummyentities.TheatreScreenDummy;
import com.example.demo.entities.Theatre;
import com.example.demo.entities.TheatreScreen;
import com.example.demo.services.TheatreScreenService;
import com.example.demo.services.TheatreService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TheatreScreenController {

	@Autowired
	TheatreScreenService tsservice;
	
	@Autowired
	TheatreService tservice;
	
	@GetMapping("/getallscreens")
	
	public List<TheatreScreen>getallTheatreScreen(){
		return tsservice.getAllScreens();
	}
	
	@PostMapping("/savetheatrescreen")
	public TheatreScreen saveTheatreScreen(@RequestBody TheatreScreenDummy tsd) {
		//User u =  uservice.getById(td.getUserid());
		Theatre t=tservice.getById(tsd.getTheatreid());
		
		TheatreScreen ts= new TheatreScreen();
		
		ts.setScreenName(tsd.getScreenName());
		ts.setTotalSeats(tsd.getTotalSeats());
		ts.setTheatre(t);
		
		return tsservice.saveTheatreScreen(ts);
		}
	
	@PostMapping("/getscreenbytheatreid")
	public List<TheatreScreen> getAllTheatreByUserid(@RequestBody TheatreScreenDummy tsd){
		return tsservice.getScreen(tsd.getTheatreid());
	}
}
	
	
	

