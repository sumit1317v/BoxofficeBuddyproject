package com.example.demo.dummyentities;



public class MovieReviewsDummy {
	
	private Integer reviewId;   
    private Float rating;
    private String comment;
    private Integer userid;
    private Integer movieid;
    
	

	public MovieReviewsDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
    
	public MovieReviewsDummy(Integer reviewId, Float rating, String comment, Integer userid, Integer movieid) {
		super();
		this.reviewId = reviewId;
		this.rating = rating;
		this.comment = comment;
		this.userid = userid;
		this.movieid = movieid;
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

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public Integer getMovieid() {
		return movieid;
	}

	public void setMovieid(Integer movieid) {
		this.movieid = movieid;
	}
	
	
    

}
