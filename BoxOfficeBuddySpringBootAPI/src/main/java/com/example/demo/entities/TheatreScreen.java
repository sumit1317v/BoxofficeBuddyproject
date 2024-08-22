package com.example.demo.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name="theatre_screens")
public class TheatreScreen {
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
    
    @JsonIgnore
    @JsonIgnoreProperties("theatrescreen")
    @OneToMany(mappedBy="theatrescreen" , cascade=CascadeType.ALL,orphanRemoval = true)
    private Set<ScreenSeat> screenseats;
    
    @JsonIgnore
    @JsonIgnoreProperties("theatreScreen")
    @OneToMany(mappedBy = "theatreScreen",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<TheatreScreenShow> theatrescreenshows;
    
    
    

	public TheatreScreen() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public TheatreScreen(Integer screenId, String screenName, String totalSeats, Theatre theatre) {
		super();
		this.screenId = screenId;
		this.screenName = screenName;
		this.totalSeats = totalSeats;
		this.theatre = theatre;
	}
	
	

	public TheatreScreen(String screenName, String totalSeats, Theatre theatre,
			Set<TheatreScreenShow> theatrescreenshows) {
		super();
		this.screenName = screenName;
		this.totalSeats = totalSeats;
		this.theatre = theatre;
		this.theatrescreenshows = theatrescreenshows;
	}

	public Integer getScreenId() {
		return screenId;
	}

	public void setScreenId(Integer screenId) {
		this.screenId = screenId;
	}

	public String getScreenName() {
		return screenName;
	}

	public void setScreenName(String screenName) {
		this.screenName = screenName;
	}

	public String getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(String totalSeats) {
		this.totalSeats = totalSeats;
	}

	public Theatre getTheatre() {
		return theatre;
	}

	public void setTheatre(Theatre theatre) {
		this.theatre = theatre;
	}

	public Set<TheatreScreenShow> getTheatrescreenshows() {
		return theatrescreenshows;
	}

	public void setTheatrescreenshows(Set<TheatreScreenShow> theatrescreenshows) {
		for(TheatreScreenShow tss:theatrescreenshows)
		tss.setTheatreScreen(this);
		this.theatrescreenshows = theatrescreenshows;
	}
	
	
    
    
    
    

}
