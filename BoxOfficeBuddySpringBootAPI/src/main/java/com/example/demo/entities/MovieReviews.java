package com.example.demo.entities;

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
@Table(name="movie_reviews")
public class MovieReviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="review_id")
    private Integer reviewId;
    
   
    private Float rating;
    private String comment;

    @JsonIgnoreProperties("movieReviews")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    
    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

	public MovieReviews() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MovieReviews(Float rating, String comment, User user, Movie movie) {
		super();
		this.rating = rating;
		this.comment = comment;
		this.user = user;
		this.movie = movie;
	}

	public Integer getReviewId() {
		return reviewId;
	}

	public void setReviewId(Integer reviewId) {
		this.reviewId = reviewId;
	}

	public Float getRating() {
		return rating;
	}

	public void setRating(Float rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}
    
    


}
