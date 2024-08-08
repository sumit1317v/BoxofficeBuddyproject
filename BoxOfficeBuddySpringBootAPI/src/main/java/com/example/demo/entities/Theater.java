package com.example.demo.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="theater")
public class Theater {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="theater_id")
	private Integer theaterId;
	@Column(name="no_of_screens")
	private Integer noOfScreens;
	@Column(name="theater_name")
	private String theaterName;
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
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
	
	
	public Theater() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Theater(Integer noOfScreens, String theaterName, String gstNo, String addressLine1, String addressLine2,
			String pincode, String phone, User user) {
		super();
		this.noOfScreens = noOfScreens;
		this.theaterName = theaterName;
		this.gstNo = gstNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.phone = phone;
		this.user = user;
	}


	public Integer getTheaterId() {
		return theaterId;
	}


	public void setTheaterId(Integer theaterId) {
		this.theaterId = theaterId;
	}


	public Integer getNoOfScreens() {
		return noOfScreens;
	}


	public void setNoOfScreens(Integer noOfScreens) {
		this.noOfScreens = noOfScreens;
	}


	public String getTheaterName() {
		return theaterName;
	}


	public void setTheaterName(String theaterName) {
		this.theaterName = theaterName;
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
	
	
	
	
	
	
	
	

}
