
import React, { useState } from 'react';
import MovieCard from './movieCard';
import { Link } from 'react-router-dom';
import './home.css';
import  MovieCarousel from './moviecarousel';
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'This is a description of Movie 1.',
      posterUrl: 'https://via.placeholder.com/300x450.png?text=Movie+1',
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'This is a description of Movie 2.',
      posterUrl: 'https://via.placeholder.com/300x450.png?text=Movie+2',
    },
    {
      id: 3,
      title: 'Movie 3',
      description: 'This is a description of Movie 3.',
      posterUrl: 'https://via.placeholder.com/300x450.png?text=Movie+3',
    },
  ];

  const handleBookNow = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container mt-5">
      <div className="container mt-4">
            <h1>Featured Movies</h1>
            <MovieCarousel movies={movies} />
        </div>
      <h1 className="text-center mb-5">Now Showing</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <MovieCard movie={movie} handleBookNow={() => handleBookNow(movie)} />
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Please Log In or Register</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>You need to log in or register to book a ticket.</p>
              </div>
              <div className="modal-footer">
                <Link to="/login" className="btn btn-primary" onClick={handleCloseModal}>Log In</Link>
                <Link to="/register/customer" className="btn btn-secondary" onClick={handleCloseModal}>Register</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
