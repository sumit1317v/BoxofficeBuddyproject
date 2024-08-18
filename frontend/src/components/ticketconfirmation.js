import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { reservedSeats } = location.state || { reservedSeats: [] };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container className="confirmation-container">
      <h1 className="title">Booking Confirmed!</h1>
      <Row>
        <Col>
          <h2>Your Reserved Seats:</h2>
          <ul className="reserved-seats-list">
            {reservedSeats.map((seat, index) => (
              <li key={index}>
                Row: {seat.row + 1}, Seat: {seat.column + 1}
              </li>
            ))}
          </ul>
          <Button className="home-button" onClick={handleGoHome}>
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Confirmation;
