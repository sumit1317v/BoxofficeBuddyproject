package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TheatreScreenShow;
import com.example.demo.repositories.TheatreScreenShowRepository;

@Service
public class TheatreScreenShowService {

	@Autowired
	TheatreScreenShowRepository tssrepo;

	public List<TheatreScreenShow> getAllShows() {
		
		return tssrepo.findAll();
	}

	public TheatreScreenShow saveShows(TheatreScreenShow t) {
		// TODO Auto-generated method stub
		return tssrepo.save(t);
	}
	
	
	public List<TheatreScreenShow> getShow(int movieId){
		return tssrepo.getshowbymoveid(movieId);
	}

	

		
	
	
}
