package com.example.demo.entities;

import java.sql.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name="theatre_screen_show")
public class TheatreScreenShow {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "show_id")
    private Integer showId;
	 
	 @Column(name = "show_startdate")
	   private Date showStartDate;

	 @Column(name = "show_enddate")
	  private Date showEndDate;
	 

	    @Column(name = "9_am_slot")
	    private String nineAmSlot;

	    @Column(name = "12_am_slot")
	    private String twelveAmSlot;

	    @Column(name = "3_pm_slot")
	    private String threePmSlot;

	    @Column(name = "6_pm_slot")
	    private String sixPmSlot;

	    @Column(name = "9_pm_slot")
	    private String ninePmSlot;
	    
	    @JsonIgnore
	    @JsonIgnoreProperties("theatrescreenshows")
	    @ManyToOne
	    @JoinColumn(name = "movie_id")
	    private Movie movie;
	    
	    
	    
	    @JsonIgnoreProperties("theatrescreenshows")
	    @ManyToOne
	    @JoinColumn(name = "screen_id")
	    private TheatreScreen theatreScreen;
	    
	    @JsonIgnore
	    @JsonIgnoreProperties("show")
	    @OneToMany(mappedBy = "show", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	    private Set<Booking> bookings;


		public TheatreScreenShow() {
			super();
			// TODO Auto-generated constructor stub
		}


		public TheatreScreenShow(Date showStartDate, Date showEndDate, String nineAmSlot, String twelveAmSlot,
				String threePmSlot, String sixPmSlot, String ninePmSlot, Movie movie, TheatreScreen theatreScreen) {
			super();
			this.showStartDate = showStartDate;
			this.showEndDate = showEndDate;
			this.nineAmSlot = nineAmSlot;
			this.twelveAmSlot = twelveAmSlot;
			this.threePmSlot = threePmSlot;
			this.sixPmSlot = sixPmSlot;
			this.ninePmSlot = ninePmSlot;
			this.movie = movie;
			this.theatreScreen = theatreScreen;
		}
		
		


		public TheatreScreenShow(Date showStartDate, Date showEndDate, String nineAmSlot, String twelveAmSlot,
				String threePmSlot, String sixPmSlot, String ninePmSlot, Movie movie, TheatreScreen theatreScreen,
				Set<Booking> bookings) {
			super();
			this.showStartDate = showStartDate;
			this.showEndDate = showEndDate;
			this.nineAmSlot = nineAmSlot;
			this.twelveAmSlot = twelveAmSlot;
			this.threePmSlot = threePmSlot;
			this.sixPmSlot = sixPmSlot;
			this.ninePmSlot = ninePmSlot;
			this.movie = movie;
			this.theatreScreen = theatreScreen;
			this.bookings = bookings;
		}


		public Integer getShowId() {
			return showId;
		}


		public void setShowId(Integer showId) {
			this.showId = showId;
		}


		public Date getShowStartDate() {
			return showStartDate;
		}


		public void setShowStartDate(Date showStartDate) {
			this.showStartDate = showStartDate;
		}


		public Date getShowEndDate() {
			return showEndDate;
		}


		public void setShowEndDate(Date showEndDate) {
			this.showEndDate = showEndDate;
		}


		public String getNineAmSlot() {
			return nineAmSlot;
		}


		public void setNineAmSlot(String nineAmSlot) {
			this.nineAmSlot = nineAmSlot;
		}


		public String getTwelveAmSlot() {
			return twelveAmSlot;
		}


		public void setTwelveAmSlot(String twelveAmSlot) {
			this.twelveAmSlot = twelveAmSlot;
		}


		public String getThreePmSlot() {
			return threePmSlot;
		}


		public void setThreePmSlot(String threePmSlot) {
			this.threePmSlot = threePmSlot;
		}


		public String getSixPmSlot() {
			return sixPmSlot;
		}


		public void setSixPmSlot(String sixPmSlot) {
			this.sixPmSlot = sixPmSlot;
		}


		public String getNinePmSlot() {
			return ninePmSlot;
		}


		public void setNinePmSlot(String ninePmSlot) {
			this.ninePmSlot = ninePmSlot;
		}


		public Movie getMovie() {
			return movie;
		}


		public void setMovie(Movie movie) {
			this.movie = movie;
		}


		public TheatreScreen getTheatreScreen() {
			return theatreScreen;
		}


		public void setTheatreScreen(TheatreScreen theatreScreen) {
			this.theatreScreen = theatreScreen;
		}


		public Set<Booking> getBookings() {
			return bookings;
		}


		public void setBookings(Set<Booking> bookings) {
			this.bookings = bookings;
		}
		
		
	    
	

}
