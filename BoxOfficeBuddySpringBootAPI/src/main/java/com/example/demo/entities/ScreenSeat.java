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
@Table(name="screen_seats")
public class ScreenSeat {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @Column(name="seat_id")
	    private Integer seatId;
	    
	    @Column(name="seat_no")
	    private String seatno;
	    
	    @Column(name="ticket_price")
	    private Integer ticketprice;
	    
	    @JsonIgnoreProperties("screenseats")
	    @ManyToOne
	    @JoinColumn(name = "screen_id")
	    private TheatreScreen theatrescreen ;

		public ScreenSeat() {
			super();
			// TODO Auto-generated constructor stub
		}

		public ScreenSeat(String seatno, Integer ticketprice, TheatreScreen theatrescreen) {
			super();
			this.seatno = seatno;
			this.ticketprice = ticketprice;
			this.theatrescreen = theatrescreen;
		}

		public Integer getSeatId() {
			return seatId;
		}

		public void setSeatId(Integer seatId) {
			this.seatId = seatId;
		}

		public String getSeatno() {
			return seatno;
		}

		public void setSeatno(String seatno) {
			this.seatno = seatno;
		}

		
		public Integer getTicketprice() {
			return ticketprice;
		}

		public void setTicketprice(Integer ticketprice) {
			this.ticketprice = ticketprice;
		}

		public TheatreScreen getTheatrescreen() {
			return theatrescreen;
		}

		public void setTheatrescreen(TheatreScreen theatrescreen) {
			this.theatrescreen = theatrescreen;
		}
	    
	    

	
	

}
