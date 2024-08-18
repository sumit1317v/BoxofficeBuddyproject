package com.example.demo.dummyentities;

public class TheatreDummy {

	private Integer noOfScreens;
	
	private String theatreName;
	
	private String gstNo;
	
	private String addressLine1;
	
	private String addressLine2;
	
	private String pincode;
	
	private String phone;

	private int userid;
	
	private int cityid;

	public Integer getNoOfScreens() {
		return noOfScreens;
	}

	public void setNoOfScreens(Integer noOfScreens) {
		this.noOfScreens = noOfScreens;
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

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public TheatreDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TheatreDummy(Integer noOfScreens, String theatreName, String gstNo, String addressLine1, String addressLine2,
			String pincode, String phone, int userid) {
		super();
		this.noOfScreens = noOfScreens;
		this.theatreName = theatreName;
		this.gstNo = gstNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.phone = phone;
		this.userid = userid;
	}
	
	
	

	public TheatreDummy(Integer noOfScreens, String theatreName, String gstNo, String addressLine1, String addressLine2,
			String pincode, String phone, int userid, int cityid) {
		super();
		this.noOfScreens = noOfScreens;
		this.theatreName = theatreName;
		this.gstNo = gstNo;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.phone = phone;
		this.userid = userid;
		this.cityid = cityid;
	}
	

	

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public String getTheatreName() {
		return theatreName;
	}

	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}

	

}
