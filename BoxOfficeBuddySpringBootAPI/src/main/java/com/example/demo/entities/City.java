package com.example.demo.entities;

import java.util.Set;

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
@Table(name="city")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="city_id")
    private Integer cityId;
    
    @Column(name="city_name")
    private String cityName;
    
    @JsonIgnoreProperties("cities")
    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;
    
    @JsonIgnoreProperties("city")
    @OneToMany(mappedBy="city", cascade=CascadeType.ALL, orphanRemoval = true)
    private Set<User> users;
    
    
    @JsonIgnoreProperties("city")
    @OneToMany(mappedBy="city", cascade=CascadeType.ALL, orphanRemoval = true)
    private Set<Theatre> theatres;
    

	public City() {
		super();
		
	}

	public City(String cityName, State state) {
		super();
		this.cityName = cityName;
		this.state = state;
	}
	
	

	public City(String cityName, State state, Set<User> users) {
		super();
		this.cityName = cityName;
		this.state = state;
		this.users = users;
	}
	
	

	public City(String cityName, State state, Set<User> users, Set<Theatre> theatres) {
		super();
		this.cityName = cityName;
		this.state = state;
		this.users = users;
		this.theatres = theatres;
	}

	public Integer getCityId() {
		return cityId;
	}

	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Set<Theatre> getTheatres() {
		return theatres;
	}

	public void setTheatres(Set<Theatre> theatres) {
		this.theatres = theatres;
	}
	
	
	
}
