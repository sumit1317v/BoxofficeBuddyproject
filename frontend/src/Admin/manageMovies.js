import React, { useState, useEffect } from 'react';
import './manageMovies.css'; // Custom styles
import './AddEditMovie.css';
import AddEditMovie from './addmovies'; // Import the AddEditMovie component
import EditMovieAdmin from './EditMovie'; // Import the EditMovieAdmin component
import Modal from 'react-modal'; // Import React Modal

// Set the root element for the modal (important for accessibility)
Modal.setAppElement('#root');

const ManageMovies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMovie, setEditMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://localhost:8080/getallmovie")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.json(); // Correctly parse the JSON response
      })
      .then((movies) => {
        setMovies(movies);
        console.log(movies);
      })
      .catch((error) => console.error("Failed to fetch movies:", error)); // Log the error to the console
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:8080/deletemovie/${movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Movie deleted successfully');
        fetchMovies(); // Re-fetch theaters to update the list
      } else {
        console.error('Failed to delete movie');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddMovie = () => {
    setEditMovie(null);
    setIsModalOpen(true);
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);  // Set the entire movie object to editMovie
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="manage-movies">
      <h2>Manage Movies</h2>

      <button className="btn btn-success" onClick={handleAddMovie}>
        Add Movie
      </button>
      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Duration</th>
              <th>Language</th>
              <th>Category Name</th>
              <th>Banner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
              
                <td>{movie.movieTitle}</td>
                <td>{movie.movieReleaseDate.toString()}</td>
                <td>{movie.movieDuration.toString()}</td>
                <td>{movie.movieLanguage}</td>
                <td>{movie.movieCategory.movieCategory}</td>
                <td>
                  <img
                    src={`data:image/jpeg;base64,${movie.movieId && movie.movieBannerPath}`}
                    width="100"
                    height="100"
                    alt={movie.movieTitle}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(movie)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(movie.movieId);
                      console.log(movie.movieId);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add/Edit Movie"
        className="movie-modal-content"
        overlayClassName="movie-modal-overlay"
      >
        {editMovie ? (
          <EditMovieAdmin movieId={editMovie.movieId} update={editMovie} onClose={closeModal} />
        ) : (
          <AddEditMovie onClose={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default ManageMovies;