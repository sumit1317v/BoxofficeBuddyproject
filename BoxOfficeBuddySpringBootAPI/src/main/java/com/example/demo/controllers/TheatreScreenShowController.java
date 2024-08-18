package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dummyentities.TheatreScreenShowDummy;
import com.example.demo.entities.Movie;
import com.example.demo.entities.TheatreScreen;
import com.example.demo.entities.TheatreScreenShow;
import com.example.demo.repositories.TheatreScreenShowRepository;
import com.example.demo.services.MovieService;
import com.example.demo.services.TheatreScreenService;
import com.example.demo.services.TheatreScreenShowService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TheatreScreenShowController {
	
   @Autowired
   TheatreScreenShowService tssservice;	
   
   @Autowired
   MovieService moservice;
   
   @Autowired
   TheatreScreenService tservice;
   
   @Autowired
   TheatreScreenShowRepository tss;
   
   @GetMapping("/getallshows")
   public List<TheatreScreenShow> getallShows(){
	   return tssservice.getAllShows();
   }
   
   @PostMapping("/saveshows")
   public TheatreScreenShow saveShows(@RequestBody TheatreScreenShowDummy tssd) {
	   
	   Movie m =moservice.getById(tssd.getMoveid());
	   TheatreScreen ts =tservice.getByID(tssd.getScreenid());
	   
	   TheatreScreenShow t =new TheatreScreenShow();
	   t.setShowStartDate(tssd.getShowStartDate());
	   t.setShowEndDate(tssd.getShowEndDate());
	   t.setNineAmSlot(tssd.getNineAmSlot());
	   t.setTwelveAmSlot(tssd.getTwelveAmSlot());
	   t.setSixPmSlot(tssd.getSixPmSlot());
	   t.setThreePmSlot(tssd.getThreePmSlot());
	   t.setNinePmSlot(tssd.getNinePmSlot());
	   
	   t.setMovie(m);
	   t.setTheatreScreen(ts);
	   
	   return tssservice.saveShows(t);
   }
   
   
   
   
   @PostMapping("/getshowbymoveid")
	public List<TheatreScreenShow> getshowBymoveid(@RequestBody TheatreScreenShowDummy td){
		return tssservice.getShow(td.getMoveid());
	}
}
