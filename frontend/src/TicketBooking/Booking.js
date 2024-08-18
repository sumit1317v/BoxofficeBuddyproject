import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './bookingTicket.css';

const BookingTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { reservedSeats } = location.state || { reservedSeats: [] };

  const handleConfirmBooking = async () => {
    console.log(reservedSeats);
  
      navigate('/confirmation', { state: { reservedSeats } });
    
      // navigate('/seating');
    
  };

  const handleCancelBooking = () => {
    navigate('/customerDashboard');
  };

  const backtoBooking = () => {
    // Pass the currently reserved seats back to the seating page
    navigate('/seating', { state: { reservedSeats } });
  };

  return (
    <Container className="booking-ticket-container hello11">
      <h1 className="title">Confirm Your Booking</h1>
      {reservedSeats.length > 0 ? (
        <>
          <Row className="reserved-seats-row">
            <Col>
              <h2>Reserved Seats:</h2>
              <ul className="reserved-seats-list">
                {reservedSeats.map((seat, index) => (
                  <li key={index}>
                    Row: {seat.row + 1}, Seat: {seat.column + 1}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row className="button-row">
            <Col>
            <Button
                style={{ width: '170px' }}
                className="back-button"
                onClick={backtoBooking}
              >
                Back
              </Button>
              <Button
                style={{ width: '170px' }}
                className="confirm-button"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </Button>
              <Button
                style={{ width: '170px' }}
                className="cancel-button"
                onClick={handleCancelBooking}
              >
                Cancel
              </Button>
              
            </Col>
          </Row>
        </>
      ) : (
        <Row className="no-seats-row">
          <Col>
            <h2>No seats reserved. Please select seats first.</h2>
            <Button style={{ width: '170px' }} onClick={handleCancelBooking}>
              Back to Seating
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BookingTicket;
