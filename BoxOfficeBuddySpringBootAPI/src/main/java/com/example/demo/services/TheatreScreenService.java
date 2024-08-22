package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TheatreScreen;
import com.example.demo.repositories.TheatreScreenRepository;

@Service
public class TheatreScreenService {

	@Autowired
	TheatreScreenRepository tsrepo;

	public List<TheatreScreen> getAllScreens() {
		return tsrepo.findAll();
	}

	public TheatreScreen saveTheatreScreen(TheatreScreen ts) {
		return tsrepo.save(ts);	
	}

	public TheatreScreen getByID(Integer screenid) {
		// TODO Auto-generated method stub
		return tsrepo.findById(screenid).get();
	}
	
	public List<TheatreScreen> getScreen(int theatreId){
		return tsrepo.screenBytheatre(theatreId);
	}
	
}
