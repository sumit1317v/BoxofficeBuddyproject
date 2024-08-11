package com.example.demo.entities;

import java.sql.Date;
import java.sql.Time;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	    
	    @Column(name="movie_relese_date")
	    private java.sql.Date movieReleaseDate;
	    
	    @Column(name="movie_duration")
	    private java.sql.Time movieDuration;
	    
	    @Column(name="movie_language")
	    private String movieLanguage;
	    
	    @Column(name="movie_synopsis")
	    private String movieSynopsis;
	    
	    @Column(name="movie_banner_path")
	    private String movieBannerPath;
	    
	    @Column(name="movie_trailer_path")
	    private String movieTrailerPath;
	    
	    @JsonIgnoreProperties("movies")
	    @ManyToOne
	    @JoinColumn(name = "movie_category_id")
	    private MovieCategory movieCategory;
	    
	    public Movie() {
	    	super();
	    }
	    
	    public Movie(String movieTitle, Date movieReleaseDate, Time movieDuration, String movieLanguage,
				String movieSynopsis, String movieBannerPath, MovieCategory movieCategory, String movieTrailorPath) {
			super();
			this.movieTitle = movieTitle;
			this.movieReleaseDate = movieReleaseDate;
			this.movieDuration = movieDuration;
			this.movieLanguage = movieLanguage;
			this.movieSynopsis = movieSynopsis;
			this.movieBannerPath = movieBannerPath;
			this.movieCategory = movieCategory;
			this.movieTrailorPath = movieTrailorPath;
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

		public String getMovieSynopsis() {
			return movieSynopsis;
		}

		public void setMovieSynopsis(String movieSynopsis) {
			this.movieSynopsis = movieSynopsis;
		}

		public String getMovieBannerPath() {
			return movieBannerPath;
		}

		public void setMovieBannerPath(String movieBannerPath) {
			this.movieBannerPath = movieBannerPath;
		}

		public String getMovieTrailorPath() {
			return movieTrailorPath;
		}

		public void setMovieTrailorPath(String movieTrailorPath) {
			this.movieTrailorPath = movieTrailorPath;
		}

		public MovieCategory getMovieCategory() {
			return movieCategory;
		}

		public void setMovieCategory(MovieCategory movieCategory) {
			this.movieCategory = movieCategory;
		}

		private String movieTrailorPath;

	  


}
