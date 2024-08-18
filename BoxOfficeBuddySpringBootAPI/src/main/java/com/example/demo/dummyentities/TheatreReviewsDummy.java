package com.example.demo.dummyentities;

public class TheatreReviewsDummy {

	private Integer reviewId;   
    private Float rating;
    private String comment;
    private Integer userid;
    private Integer theatreid;
	public TheatreReviewsDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TheatreReviewsDummy(Integer reviewId, Float rating, String comment, Integer userid, Integer theatreid) {
		super();
		this.reviewId = reviewId;
		this.rating = rating;
		this.comment = comment;
		this.userid = userid;
		this.theatreid = theatreid;
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
	public Integer getTheatreid() {
		return theatreid;
	}
	public void setTheatreid(Integer theatreid) {
		this.theatreid = theatreid;
	}
    
    

}
