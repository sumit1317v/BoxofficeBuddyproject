package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.MovieCategory;
import com.example.demo.repositories.MovieCategoryRepository;

@Service
public class MovieCategoryService {
	
	@Autowired
	MovieCategoryRepository movieCatRepo;
	
	public List<MovieCategory> getAllMovieCategory(){
		return movieCatRepo.findAll();
	}
	
	public MovieCategory getMovieCategory(int movieCategoryId) {
		Optional<MovieCategory> omc=movieCatRepo.findById( movieCategoryId);
		MovieCategory mc=null;
		try {
			mc=omc.get();
		}catch (Exception ex) {
			ex.printStackTrace();
		}
		return mc;
	}
	
	public MovieCategory saveMovieCategory(MovieCategory mc) {
		return movieCatRepo.save(mc);
	}
	
	public int updateMovieCategory(MovieCategory movieCat) {
		if(movieCatRepo.updateMovieCategory(movieCat.getMovieCategory(), movieCat.getMovieDescription(), movieCat.getMovieCategoryId())>0){
			return 1;
		}
		return 0;
	}
	 
    public void deleteMovieCategory(int movieCategoryId) {
    	movieCatRepo.deleteById(movieCategoryId);
    }

    //for Save
	public MovieCategory getByID(Integer getmovieCategoryId) {
		 
		return movieCatRepo.findById(getmovieCategoryId).get();
	}

	
	
	

}
