package com.example.demo.entities;

import java.sql.Date;
import java.sql.Time;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

  @Entity
  @Table(name="movies")
	public class Movie {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="movie_id")
	    private Integer movieId;
	    
	    @Column(name="movie_title")
	    private String movieTitle;
	    
	    @Column(name="movie_release_date")
	    private java.sql.Date movieReleaseDate;
	    
	    @Column(name="movie_duration")
	    private java.sql.Time movieDuration;
	    
	    @Column(name="movie_language")
	    private String movieLanguage;
	    
	  
	    
	    @Column(name="movie_banner_path",columnDefinition = "LONGBLOB")
	    private byte[] movieBannerPath;
	     
	    
	    @JsonIgnoreProperties("movies")
	    @ManyToOne
	    @JoinColumn(name = "movie_category_id")
	    private MovieCategory movieCategory;
	    
	    @JsonIgnore
	    @JsonIgnoreProperties("movie")
	    @OneToMany(mappedBy = "movie",cascade = CascadeType.ALL,orphanRemoval = true)
	    private Set<TheatreScreenShow> theatrescreenshows;
	    
	    
	    public Movie() {
	    	super();
	    }
	    
	    public Movie(String movieTitle, Date movieReleaseDate, Time movieDuration, String movieLanguage,
				byte[] movieBannerPath, MovieCategory movieCategory) {
			super();
			this.movieTitle = movieTitle;
			this.movieReleaseDate = movieReleaseDate;
			this.movieDuration = movieDuration;
			this.movieLanguage = movieLanguage;
			this.movieBannerPath = movieBannerPath;
			this.movieCategory = movieCategory;
			
		}
	    
	    

		public Movie(String movieTitle, Date movieReleaseDate, Time movieDuration, String movieLanguage,
				byte[] movieBannerPath, MovieCategory movieCategory, Set<TheatreScreenShow> theatrescreenshows) {
			super();
			this.movieTitle = movieTitle;
			this.movieReleaseDate = movieReleaseDate;
			this.movieDuration = movieDuration;
			this.movieLanguage = movieLanguage;
			this.movieBannerPath = movieBannerPath;
			this.movieCategory = movieCategory;
			this.theatrescreenshows = theatrescreenshows;
		}

		public Integer getMovieId() {
			return movieId;
		}

		public void setMovieId(Integer movieId) {
			this.movieId = movieId;
		}

		public String getMovieTitle() {
			return movieTitle;
		}

		public void setMovieTitle(String movieTitle) {
			this.movieTitle = movieTitle;
		}

		public java.sql.Date getMovieReleaseDate() {
			return movieReleaseDate;
		}

		public void setMovieReleaseDate(java.sql.Date movieReleaseDate) {
			this.movieReleaseDate = movieReleaseDate;
		}

		public java.sql.Time getMovieDuration() {
			return movieDuration;
		}

		public void setMovieDuration(java.sql.Time movieDuration) {
			this.movieDuration = movieDuration;
		}

		public String getMovieLanguage() {
			return movieLanguage;
		}

		public void setMovieLanguage(String movieLanguage) {
			this.movieLanguage = movieLanguage;
		}

		
		public byte[] getMovieBannerPath() {
			return movieBannerPath;
		}

		public void setMovieBannerPath(byte[] movieBannerPath) {
			this.movieBannerPath = movieBannerPath;
		}

		

		public MovieCategory getMovieCategory() {
			return movieCategory;
		}

		public void setMovieCategory(MovieCategory movieCategory) {
			this.movieCategory = movieCategory;
		}

		public Set<TheatreScreenShow> getTheatrescreenshows() {
			return theatrescreenshows;
		}

		public void setTheatrescreenshows(Set<TheatreScreenShow> theatrescreenshows) {
			this.theatrescreenshows = theatrescreenshows;
		}
		
		

		

		

	  


}
