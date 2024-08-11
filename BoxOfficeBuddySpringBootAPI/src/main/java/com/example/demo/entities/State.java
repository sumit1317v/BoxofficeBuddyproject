package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="state")
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="state_id")
    private Integer stateId;
    
    @Column(name="state_name")
    private String stateName;
    
    
    @JsonIgnoreProperties("state")	
    @OneToMany(mappedBy = "state",cascade = CascadeType.ALL ,orphanRemoval = true)
	private Set<City> cities;

	public State() {
		super();
		
	}

	public State(String stateName) {
		super();
		this.stateName = stateName;
	}
	
	

	public State(String stateName, Set<City> cities) {
		super();
		this.stateName = stateName;
		this.cities = cities;
	}

	public Integer getStateId() {
		return stateId;
	}

	public void setStateId(Integer stateId) {
		this.stateId = stateId;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public Set<City> getCities() {
		return cities;
	}

	public void setCities(Set<City> cities) {
		this.cities = cities;
	}
	
	
}
