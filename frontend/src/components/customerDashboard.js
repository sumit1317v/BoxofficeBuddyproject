import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './customerDashboard.css';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.movie || {};
  const movieId = movie.movieId;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      // Use POST method to fetch data by sending movieId in the request body
      fetch('http://localhost:8080/getshowbymoveid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ moveid: movieId }), // Sending movieId in the body of the request
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setMovieDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch movie details:', err);
          setError('Failed to fetch movie details');
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError('No movie selected');
    }
  }, [movieId]);

  const handleShowtimeClick = (slot, show) => {
    // Pass the selected slot, movie, and screen details to the next route
    navigate('/seating', { state: { slot, movie, screen: show.theatreScreen } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movieDetails || movieDetails.length === 0) {
    return <p>No movie details available.</p>;
  }

  return (
    <div className="movie-showtimes-container">
      <div className="movie-details">
        <img
          src={`data:image/jpeg;base64,${movie.movieBannerPath}`}
          alt={movie.movieTitle}
          className="movie-banner"
        />
        <div className="movie-details-content">
          <h1>{movie.movieTitle}</h1>
          <p><strong>Category:</strong> {movie.movieCategory.movieCategory}</p>
          <p><strong>Description:</strong> {movie.movieCategory.movieDescription}</p>
          <p><strong>Duration:</strong> {movie.movieDuration}</p>
          <p><strong>Language:</strong> {movie.movieLanguage}</p>
          <p><strong>Release Date:</strong> {movie.movieReleaseDate}</p>
        </div>
      </div>
      
      <h2>Available Showtimes</h2>
      {movieDetails.map((show) => (
        <div key={show.showId} className="showtime-details">
          <h3>{show.theatreScreen.theatre.theatreName}</h3> {/* Displaying Theatre Name */}
          <h4>Screen {show.theatreScreen.screenName} (Total Seats: {show.theatreScreen.totalSeats})</h4>
          <p>Show Dates: {show.showStartDate} to {show.showEndDate}</p>
          <div className="slots-container">
            {show.nineAmSlot === 'Yes' && (
              <button onClick={() => handleShowtimeClick('9 AM', show)}>9 AM</button>
            )}
            {show.twelveAmSlot === 'Yes' && (
              <button onClick={() => handleShowtimeClick('12 Noon', show)}>12 Noon</button>
            )}
            {show.threePmSlot === 'Yes' && (
              <button onClick={() => handleShowtimeClick('3 PM', show)}>3 PM</button>
            )}
            {show.sixPmSlot === 'Yes' && (
              <button onClick={() => handleShowtimeClick('6 PM', show)}>6 PM</button>
            )}
            {show.ninePmSlot === 'Yes' && (
              <button onClick={() => handleShowtimeClick('9 PM', show)}>9 PM</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerDashboard;
