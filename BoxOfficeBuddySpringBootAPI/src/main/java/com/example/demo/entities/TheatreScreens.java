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
@Table(name="theatre_screens")
public class TheatreScreens {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="screen_id")
    private Integer screenId;
    
    @Column(name="screen_name")
    private String screenName;
    @Column(name="total_seats")
    private String totalSeats;

    @JsonIgnoreProperties("screens")
    @ManyToOne
    @JoinColumn(name = "theatre_id")
    private Theatre theatre;

	public TheatreScreens() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
    

}
