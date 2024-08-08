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
    
    
    @JsonIgnoreProperties("state")	@OneToMany(mappedBy = "state",cascade = CascadeType.ALL)
	Set<City> citys;

	public State() {
		super();
		// TODO Auto-generated constructor stub
	}

	public State(String stateName) {
		super();
		this.stateName = stateName;
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
    
    

}
