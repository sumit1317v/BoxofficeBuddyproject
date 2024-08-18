import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Seat from './seat';
import './seatingArrangement.css';

const SeatingArrangement = ({ rows = 10, columns = 20 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the reserved seats from location.state if it exists, or initialize with empty array
  const reservedSeatsFromState = location.state?.reservedSeats || [];

  // Initialize seat state, marking previously reserved seats as unavailable
  const [seats, setSeats] = useState(
    Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: columns }, (_, columnIndex) => ({
        row: rowIndex,
        column: columnIndex,
        isAvailable: !reservedSeatsFromState.some(
          (seat) => seat.row === rowIndex && seat.column === columnIndex
        ),
      }))
    )
  );

  const handleReserveSeat = (row, column) => {
    const newSeats = [...seats];
    const seat = newSeats[row][column];
    if (seat.isAvailable) {
      seat.isAvailable = false;
      setSeats(newSeats);
    }
  };

  const handleCancelReservation = (row, column) => {
    const newSeats = [...seats];
    const seat = newSeats[row][column];
    if (!seat.isAvailable) {
      seat.isAvailable = true;
      setSeats(newSeats);
    }
  };

  const handleBookTickets = () => {
    const reservedSeats = seats.flat().filter((seat) => !seat.isAvailable);
    navigate('/booking', { state: { reservedSeats } });
  };

  const hasReservedSeats = seats.flat().some((seat) => !seat.isAvailable);

  return (
    <Container className="seating-container">
      <div className="screen">Screen</div>
      <h1 className="title">Seating Arrangement</h1>
      {seats.map((row, rowIndex) => (
        <Row key={rowIndex} className="row-container">
          {row.map((seat, columnIndex) => (
            <Col key={`${rowIndex}-${columnIndex}`} xs="auto">
              <Seat
                row={seat.row}
                column={seat.column}
                isAvailable={seat.isAvailable}
                onReserve={handleReserveSeat}
                onCancelReservation={handleCancelReservation}
              />
            </Col>
          ))}
        </Row>
      ))}
      <Button
        style={{ width: '170px' }}
        className="book-tickets-button"
        onClick={handleBookTickets}
        disabled={!hasReservedSeats}
      >
        Book Tickets
      </Button>
    </Container>
  );
};

export default SeatingArrangement;
