import React, { useState } from 'react';
import './movie.css';
// import { addMovie } from '../../api/moviesApi';

const MovieForm = () => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    releaseDate: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addMovie(movie).then(() => {
    //   alert('Movie added successfully!');
    //   setMovie({ title: '', genre: '', releaseDate: '' });
    // });
  };

  return (
    <div className="movie-form">
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
