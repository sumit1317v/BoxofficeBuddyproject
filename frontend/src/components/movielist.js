import React, { useEffect, useState } from 'react';
import './movie.css';
// import { getMovies, deleteMovie } from '../../api/moviesApi';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // getMovies().then(data => setMovies(data));
  }, []);

  const handleDelete = (id) => {
    // deleteMovie(id).then(() => {
    //   setMovies(movies.filter(movie => movie.id !== id));
    // });
  };

  return (
    <div className="movie-list">
      <h1>Manage Movies</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.releaseDate}</td>
              <td>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
