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
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private String userId;
    
    @Column(name="full_name")
    private String fullName;
    @Column(name="password")
    private String password;
    @Column(name="address_line1")
    private String addressLine1;
    @Column(name="address_line2")
    private String addressLine2;
    @Column(name="pincode")
    private String pincode;
    @Column(name="mobile_no")
    private String mobileNo;
    @Column(name="email_id")
    private String emailId;
    @Column(name="status")
    private Integer status;

    @JsonIgnoreProperties("")
    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    
    @JsonIgnoreProperties("users")
    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String fullName, String password, String addressLine1, String addressLine2, String pincode,
			String mobileNo, String emailId, Integer status, City city, Role role) {
		super();
		this.fullName = fullName;
		this.password = password;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
		this.status = status;
		this.city = city;
		this.role = role;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

    
}