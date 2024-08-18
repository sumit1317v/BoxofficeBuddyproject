package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.MovieCategory;
import com.example.demo.services.MovieCategoryService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class MovieCategoryController {
	
	@Autowired
	MovieCategoryService movieCatService;
	
	//http://localhost:8080/getallmoviecategory
	@GetMapping("/getallmoviecategory")
	public List<MovieCategory> getAllMovieCategory(){
		return movieCatService.getAllMovieCategory();
	}
	
	//query string - data - key -value
	//http://localhost:8080/getmoviecategory?moviecategoryid=12
	@GetMapping("/getmoviecategory")
	public MovieCategory getMovieCategoryById(@RequestParam("moviecategoryid") int movieCategoryId) {
			return movieCatService.getMovieCategory(movieCategoryId);
	}
	
	//REST API
	//path variable
	//http://localhost:8080/getmoviecategory/20
	@GetMapping("/getmoviecategory/:moviecategoryid")
	public MovieCategory getMovieCategory1(@PathVariable("moviecategoryid") int movieCategoryId) {
		return movieCatService.getMovieCategory(movieCategoryId);
	}
	
	//http://localhost:8080/savemoviecategory
	@PostMapping("/savemoviecategory")
	public MovieCategory saveMovieCategory(@RequestBody MovieCategory mc) {
		return movieCatService.saveMovieCategory(mc);
	}
	
	//http://localhost:8080/updateMovieCategory
	@PutMapping("/updateMovieCategory")
	public int updateMovieCategoryById(@RequestBody MovieCategory mc) {
		return movieCatService.updateMovieCategory(mc);
	}

	//http://localhost:8080/deleteMovieCategory
	@DeleteMapping("/deleteMovieCategory")
	public int deleteMovieCategory(@RequestBody MovieCategory mc ) {
		movieCatService.deleteMovieCategory(mc.getMovieCategoryId());
		return 1;
	}
	
}
