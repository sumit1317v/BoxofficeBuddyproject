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
@Table(name="theatre_reviews")
public class TheatreReviews {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="review_id")
	    private Integer reviewId;

	    private Float rating;
	    private String comment;

	    @JsonIgnoreProperties("theatreReviews")
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;
        
	    @JsonIgnoreProperties("theatreReviews")
	    @ManyToOne
	    @JoinColumn(name = "theatre_id")
	    private Theatre theatre;

		public TheatreReviews() {
			super();
			// TODO Auto-generated constructor stub
		}

		public TheatreReviews(Float rating, String comment, User user, Theatre theatre) {
			super();
			this.rating = rating;
			this.comment = comment;
			this.user = user;
			this.theatre = theatre;
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

		public Theatre getTheatre() {
			return theatre;
		}

		public void setTheatre(Theatre theatre) {
			this.theatre = theatre;
		}

		
	   
		
	    

}
