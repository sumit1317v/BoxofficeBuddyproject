import React from 'react';
import { useNavigate } from 'react-router-dom';
import './movieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the customer dashboard with the entire movie object passed in state
    navigate(`/customerDashboard`, { state: { movie } });
  };

  return (
    <div 
      className="card movie-card" 
      onClick={handleCardClick} 
      style={{ cursor: 'pointer' }} // Add pointer cursor to indicate it's clickable
    >
      <img
        src={`data:image/jpeg;base64,${movie.movieBannerPath}`} // Assuming movieBannerPath is a base64 string
        className="card-img-top"
        alt={movie.movieTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.movieTitle}</h5>
        <p className="card-text">{movie.movieCategory.movieDescription}</p>
      </div>
    </div>
  );
};

export default MovieCard;
