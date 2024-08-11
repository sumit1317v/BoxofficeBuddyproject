package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


	
	@Entity
	@Table(name="movie_category")
	public class MovieCategory {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="movie_category_id")
	    private Integer movieCategoryId;
	    
	    @Column(name="movie_category")
	    private String movieCategory;
	    
	    @Column(name="movie_description")
	    private String movieDescription;
	    
	    @JsonIgnoreProperties("movieCategory")
		@OneToMany(mappedBy = "movieCategory",cascade = CascadeType.ALL)
		private Set<Movie> movies;
	    
	    
	   
		public MovieCategory(){
			super();
		}	
		
		
		
		public MovieCategory(String movieCategory, String movieDescription, Set<Movie> movies) {
			super();
			this.movieCategory = movieCategory;
			this.movieDescription = movieDescription;
			this.movies = movies;
		}



		public Integer getMovieCategoryId() {
			return movieCategoryId;
		}
		public void setMovieCategoryId(Integer movieCategoryId) {
			this.movieCategoryId = movieCategoryId;
		}
		public String getMovieCategory() {
			return movieCategory;
		}
		public void setMovieCategory(String movieCategory) {
			this.movieCategory = movieCategory;
		}
		public MovieCategory(String movieCategory, String movieDescription) {
			super();
			this.movieCategory = movieCategory;
			this.movieDescription = movieDescription;
		}
		public String getMovieDescription() {
			return movieDescription;
		}
		public void setMovieDescription(String movieDescription) {
			this.movieDescription = movieDescription;
		}
		public Set<Movie> getMovies() {
				return movies;
		}
		public void setMovies(Set<Movie> movies) {
				this.movies = movies;
		}



	
}
