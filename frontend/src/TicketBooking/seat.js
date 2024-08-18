import React, { useState, useEffect } from 'react';
import './seat.css';

const Seat = ({ row, column, isAvailable, onReserve, onCancelReservation }) => {
  const [isReserved, setIsReserved] = useState(!isAvailable);

  useEffect(() => {
    setIsReserved(!isAvailable);
  }, [isAvailable]);

  const handleReserve = () => {
    if (isReserved) {
      return;
    }
    setIsReserved(true);
    onReserve(row, column);
  };

  const handleCancelReservation = () => {
    if (!isReserved) {
      return;
    }
    setIsReserved(false);
    onCancelReservation(row, column);
  };

  return (
    <div
      className={`seat ${isReserved ? 'reserved' : 'available'}`}
      onClick={handleReserve}
      onDoubleClick={handleCancelReservation}
    />
  );
};

export default Seat;
