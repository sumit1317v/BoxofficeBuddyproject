package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dummyentities.MovieDummy;
import com.example.demo.entities.Movie;
import com.example.demo.repositories.MovieRepository;



@Service
public class MovieService {
   @Autowired
	MovieRepository mrepo;
	
	public Movie saveMovie(Movie m) {
		return  mrepo.save(m);
	}
	
	public Movie getById(Integer moveid) {
		
		 return mrepo.findById(moveid).get();
		}

	
	public boolean upload(int id,byte[] movieBanner) {
		if(mrepo.uploadPhoto(id, movieBanner)==1)
			return true;
		else
			return false;
	}

	public List<Movie> getAllMovie() {
		
		return mrepo.findAll();
	}
	
	public Movie getMovieById(int movieId) {
		Optional<Movie> omovie=mrepo.findById(movieId);
		Movie movie=null;
		try {
			movie=omovie.get();
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		return movie;
		
	}

	public int updateMovie(MovieDummy movie) {
		if(mrepo.updateMovie(movie.getMovieTitle(), movie.getMovieReleaseDate(), movie.getMovieDuration(), movie.getMovieLanguage(), movie.getMovieCategoryId(),  movie.getMovieId())>0)
			return 1;
		return 0;
	}
	
	
	public int deleteMovie(int movieId) {
		Movie mo =mrepo.findById(movieId).orElseThrow(() -> new RuntimeException("User not found"));
		mrepo.delete(mo);
		return movieId;
		
	}
	
	public void deleteMovie1(int movieId) {
    	mrepo.deleteById(movieId);
    }

   public List<Movie> findMovieTitle(String title){
	   return mrepo.findBymovieTitleContainingIgnoreCase(title);
   }
	

}
