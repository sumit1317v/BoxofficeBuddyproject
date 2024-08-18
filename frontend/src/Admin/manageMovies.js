import React, { useState } from 'react';
import './manageMovies.css'; // Custom styles
import './AddEditMovie.css';
import AddEditMovie from './addmovies'; // Import the AddEditMovie component
import Modal from 'react-modal'; // Import React Modal

// Set the root element for the modal (important for accessibility)
Modal.setAppElement('#root');

const ManageMovies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMovie, setEditMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: 'Baaghi',
      releaseDate: '01/01/2017',
      duration: '2:27',
      language: 'Hindi',
      category: 'Action',
      cast: 'Tiger Shroff, Shraddha Kapoor',
    },
    // Other movies...
  ];

  const handleAddMovie = () => {
    setEditMovie(null);
    setIsModalOpen(true);
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);
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
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Duration</th>
            <th>Language</th>
            <th>Category</th>
            <th>Cast</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.duration}</td>
              <td>{movie.language}</td>
              <td>{movie.category}</td>
              <td>{movie.cast}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(movie)}
                >
                  Edit
                </button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add/Edit Movie"
        className="movie-modal-content"
        overlayClassName="movie-modal-overlay"
      >
        <AddEditMovie movie={editMovie} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default ManageMovies;
