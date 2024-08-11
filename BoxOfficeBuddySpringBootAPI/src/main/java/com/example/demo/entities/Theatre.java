package com.example.demo.entities;


import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="theatre")
public class Theatre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="theatre_id")
	private Integer theatreId;
	@Column(name="no_of_screens")
	private Integer noOfScreens;
	@Column(name="theatre_name")
	private String theatreName;
	@Column(name="GST_No")
    private String gstNo;
	@Column(name="address_line1")
	private String addressLine1;
	@Column(name="address_line2")
	private String addressLine2;
	@Column(name="pincode")
	private String pincode;
	@Column(name="phone")
	private String phone;
	
	@JsonIgnoreProperties("theatres")
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	
	 @JsonIgnoreProperties("theatre")
	@OneToMany(mappedBy="theatre", cascade=CascadeType.ALL ,orphanRemoval = true)
	private Set<TheatreScreens> screens;
	
	@JsonIgnoreProperties("theatre")
	@OneToMany(mappedBy = "theatre", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<TheatreReviews> theatreReviews;
	
	
	public Theatre() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Theatre(Integer noOfScreens, String theatreName, String gstNo, String addressLine1, String addressLine2,
			String pincode, String phone, User user) {
		super();
		this.noOfScreens = noOfScreens;
		this.theatreName = theatreName;
		this.gstNo = gstNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.phone = phone;
		this.user = user;
	}
	
	


	public Theatre(Integer noOfScreens, String theatreName, String gstNo, String addressLine1, String addressLine2,
			String pincode, String phone, User user, Set<TheatreScreens> screens) {
		super();
		this.noOfScreens = noOfScreens;
		this.theatreName = theatreName;
		this.gstNo = gstNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.phone = phone;
		this.user = user;
		this.screens = screens;
	}
	
	


	public Theatre(Integer noOfScreens, String theatreName, String gstNo, String addressLine1, String addressLine2,
			String pincode, String phone, User user, Set<TheatreScreens> screens, Set<TheatreReviews> theatreReviews) {
		super();
		this.noOfScreens = noOfScreens;
		this.theatreName = theatreName;
		this.gstNo = gstNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.phone = phone;
		this.user = user;
		this.screens = screens;
		this.theatreReviews = theatreReviews;
	}


	public Integer getTheatreId() {
		return theatreId;
	}


	public void setTheatreId(Integer theatreId) {
		this.theatreId = theatreId;
	}


	public Integer getNoOfScreens() {
		return noOfScreens;
	}


	public void setNoOfScreens(Integer noOfScreens) {
		this.noOfScreens = noOfScreens;
	}


	public String getTheatreName() {
		return theatreName;
	}


	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}


	public String getGstNo() {
		return gstNo;
	}


	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}


	public String getAddressLine1() {
		return addressLine1;
	}


	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}


	public String getAddressLine2() {
		return addressLine2;
	}


	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Set<TheatreScreens> getScreens() {
		return screens;
	}


	public void setScreens(Set<TheatreScreens> screens) {
		this.screens = screens;
	}


	public Set<TheatreReviews> getTheatreReviews() {
		return theatreReviews;
	}


	public void setTheatreReviews(Set<TheatreReviews> theatreReviews) {
		this.theatreReviews = theatreReviews;
	}


	


	

}
