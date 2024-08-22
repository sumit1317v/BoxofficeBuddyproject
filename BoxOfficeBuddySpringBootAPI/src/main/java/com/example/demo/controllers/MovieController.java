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
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dummyentities.MovieDummy;
import com.example.demo.entities.Movie;
import com.example.demo.entities.MovieCategory;
import com.example.demo.services.MovieCategoryService;
import com.example.demo.services.MovieService;



@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class MovieController {

	@Autowired
	MovieService mservice;
	
	@Autowired
	MovieCategoryService mcservice;
	
	//http://localhost:8080/getallmovie
	@GetMapping("/getallmovie")
	public List<Movie> getAllMovie(){
		return mservice.getAllMovie();
		
	}
	
	//http://localhost:8080/savemovie
  @PostMapping("/savemovie")
   public Movie saveMovie(@RequestBody MovieDummy md) {
		System.out.println(md);
   MovieCategory mc =mcservice.getByID(md.getMovieCategoryId());
   
   Movie m = new Movie();
   
   m.setMovieTitle(md.getMovieTitle());
   m.setMovieReleaseDate(md.getMovieReleaseDate());
   m.setMovieDuration(md.getMovieDuration());
   m.setMovieLanguage(md.getMovieLanguage());
   m.setMovieCategory(mc);
	
   return mservice.saveMovie(m);

 }
  

  @PostMapping(value="/uploadimage/{mid}",consumes="multipart/form-data")
  public boolean uploadImage(@PathVariable("mid") int moid,@RequestBody MultipartFile file) {
	  boolean flag=true;
	  try {
		  flag=mservice.upload(moid, file.getBytes());
		  
	  }catch(Exception ex) {
		  flag=false;
	  }
	  return flag;
  }
  
  
     //query string - data - key -value
	//http://localhost:8080/getmovie?movieid=12
	@GetMapping("/getmovie")
	public Movie getMovieById(@RequestParam("movieid") int movieId) {
			return mservice.getMovieById(movieId);
	}
  
    //REST API
	//path variable
	//http://localhost:8080/getmovie/20
   @GetMapping("/getmovie/{movieid}")
   public Movie getMovieById1(@PathVariable("movieid") int movieId ) {
	   return mservice.getMovieById(movieId);
   }
   
   //http://localhost:8080/updatemovie
   @PutMapping("/updatemovie")
   public int updateMovie(@RequestBody MovieDummy movie) {
	   return mservice.updateMovie(movie);
   }
   
   
 //http://localhost:8080/deleteMovie
 	@DeleteMapping("/deleteMovie")
 	public int deleteMovieCategory(@RequestBody Movie movie ) {
 		mservice.deleteMovie1(movie.getMovieId());
 		return 1;
 	}
 	
 	//http://localhost:8080/deletemovie/15
 	 @DeleteMapping("/deletemovie/{id}")
 	   public int deleteMovie(@PathVariable int id){
 		  return mservice.deleteMovie(id);
 	   }
 	 
 	 @GetMapping("/searchmovie")
 	 public List<Movie> searchMoviebyName(@RequestParam String title){
 		 return mservice.findMovieTitle(title);
 	 }
  
}
