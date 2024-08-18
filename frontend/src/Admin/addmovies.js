
// import React, { useState, useEffect } from 'react';

// const AddMovieAdmin = ({ movie, onClose, setMovies, movies }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     releaseDate: '',
//     duration: '',
//     language: '',
//     category: '',
//     cast: '',
//   });

//   useEffect(() => {
//     if (movie) {
//       setFormData(movie);
//     }
//   }, [movie]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (movie) {
//       // Editing existing movie
//       setMovies(movies.map(m => (m.id === movie.id ? formData : m)));
//     } else {
//       // Adding a new movie
//       setMovies([...movies, { id: movies.length + 1, ...formData }]);
//     }
//     onClose();
//   };

//   return (
//     <div className="add-edit-movie">
//       <h2>{movie ? 'Edit Movie' : 'Add Movie'}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Movie Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Release Date:</label>
//           <input
//             type="date"
//             name="releaseDate"
//             value={formData.releaseDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Duration:</label>
//           <input
//             type="time"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Language:</label>
//           <input
//             type="text"
//             name="language"
//             value={formData.language}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Cast:</label>
//           <input
//             type="text"
//             name="cast"
//             value={formData.cast}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Save
//         </button>
//         <button type="button" className="btn btn-secondary" onClick={onClose}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddMovieAdmin;
import { useReducer, useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import './AddEditMovie.css';
// Initial state
const init = {
  movietitle: '',
  releasedate: '',
  duration: '',
  language: '',
  category: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'init':
      return init;
    default:
      return state;
  }
};

function AddMovieAdmin() {
  const [movie, dispatch] = useReducer(reducer, init);
  const [file, setFile] = useState();
  const [category, setCategory] = useState([]);
  const [minDate, setMinDate] = useState('');
  const [message, setMessage] = useState(''); // State for the success/error message
  const [validationErrors, setValidationErrors] = useState({}); // State for validation errors
  //const navigate = useNavigate();

 

  useEffect(() => {
    // Set minimum date to today
    const currentDate = new Date().toISOString().split('T')[0];
    setMinDate(currentDate);

    const fetchCategory = async () => {
      try {
        const response = await fetch("http://localhost:8080/getallmoviecategory");
        if (!response.ok) {
          throw new Error('Failed to fetch category');
        }
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!movie.movietitle) errors.movietitle = "Movie title is required";
    if (!movie.releasedate) errors.releasedate = "Release date is required";
    if (!movie.duration) errors.duration = "Duration is required";
    if (!movie.language) errors.language = "Language is required";
    if (movie.category === 0) errors.category = "Category is required";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setMessage("Please fill out all required fields");
      return;
    }

    try {
      // Send movie data
      const t = movie.duration + ":00";
      const reqData = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          movieTitle: movie.movietitle,
          movieReleaseDate: movie.releasedate,
          movieDuration: t,
          movieLanguage: movie.language,
          movieCategoryId: movie.category
        })
      };

      const resp = await fetch("http://localhost:8080/savemovie", reqData);
      if (!resp.ok) {
        throw new Error("Failed to save movie");
      }

      const obj = await resp.json();

      // Upload banner image
      const fd = new FormData();
      fd.append("file", file);
      const reqOptions = {
        method: 'POST',
        body: fd
      };

      const imageResp = await fetch(`http://localhost:8080/uploadimage/${obj.movieId}`, reqOptions);
      if (!imageResp.ok) {
        throw new Error("Failed to upload banner");
      }

      await imageResp.json();
      setMessage("Data saved"); // Set success message
      //navigate('/');

    } catch (error) {
      console.log(error.toString());
      setMessage("Server error. Please try again."); // Set error message
    }
  };

 
  return (
    <div>
      <h2>Add Movie</h2>
      <form>
        <div className="mt-2">
          <label htmlFor="movietitle" className="form-label">Movie Title</label>
          <input type="text" name="movietitle" value={movie.movietitle}
            className="form-control"
            onChange={(e) => { dispatch({ type: 'update', fld: 'movietitle', val: e.target.value }) }} />
          {validationErrors.movietitle && <div className="text-danger">{validationErrors.movietitle}</div>}
        </div>
        <div className="mt-2">
          <label htmlFor="releasedate" className="form-label">Movie Release Date</label>
          <input type="date" name="releasedate" value={movie.releasedate}
            className="form-control"
            min={minDate} // Set the minimum date to the current date
            onChange={(e) => { dispatch({ type: 'update', fld: 'releasedate', val: e.target.value }) }} />
          {validationErrors.releasedate && <div className="text-danger">{validationErrors.releasedate}</div>}
        </div>
        <div className="mt-2">
          <label htmlFor="duration" className="form-label">Movie Duration</label>
          <input type="time" name="duration" value={movie.duration}
            className="form-control"
            onChange={(e) => { dispatch({ type: 'update', fld: 'duration', val: e.target.value }) }} />
          {validationErrors.duration && <div className="text-danger">{validationErrors.duration}</div>}
        </div>
        <div className="mt-2">
          <label htmlFor="language" className="form-label">Movie Language</label>
          <select className="form-select" name='language'
            onChange={(e) => { dispatch({ type: 'update', fld: 'language', val: e.target.value }) }} >
            <option value="">Select Movie Language</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
          {validationErrors.language && <div className="text-danger">{validationErrors.language}</div>}
        </div>

        <div className="mt-2">
          <label className="form-label" htmlFor="category">Movie Category</label>
          <select className="form-select" value={movie.category} name='category'
            onChange={(e) => { dispatch({ type: 'update', fld: 'category', val: e.target.value }) }}>
            <option value="0">Select Movie Category</option>
            {category.map((cat) => (
              <option key={cat.movieCategoryId} value={cat.movieCategoryId}>
                {cat.movieCategory}
              </option>
            ))}
          </select>
          {validationErrors.category && <div className="text-danger">{validationErrors.category}</div>}
        </div>

        <div className="mt-2">
          <label htmlFor="cname" className="form-label">Movie Banner</label>
          <input type="file" name="cname" id="cname"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="mt-2">
          <input type="submit" value="Send Data" className="btn btn-primary" onClick={(e) => { handleSubmit(e) }} />
          <input type="reset" value="Clear"
            className="btn btn-primary"
            onClick={() => { dispatch({ type: 'init' }); setMessage(''); setValidationErrors({}); }} />
        </div>
      </form>
      {/* Display the message at the bottom of the form */}
      {message && <div className="mt-4 alert alert-info">{message}</div>}
    </div>
  );
}

export default AddMovieAdmin;