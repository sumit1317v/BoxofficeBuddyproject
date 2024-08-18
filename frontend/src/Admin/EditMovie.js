
// import { useReducer, useState, useEffect } from "react";

// // Initial state
// const init = {
//   movietitle: '',
//   releasedate: '',
//   duration: '',
//   language: '',
//   category: 0
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'update':
//       return { ...state, [action.fld]: action.val };
//     case 'set_movie':
//       return { ...action.payload }; // Update state with fetched movie data
//     case 'init':
//       return init;
//     default:
//       return state;
//   }
// };

// const EditMovieAdmin = ({ movieId, update, onClose }) => {
//   const [movie, dispatch] = useReducer(reducer, init);
//   const [file, setFile] = useState(null);
//   const [category, setCategory] = useState([]);
//   const [minDate, setMinDate] = useState('');
//   const [message, setMessage] = useState(''); // State for the success/error message
//   const [validationErrors, setValidationErrors] = useState({}); // State for validation errors
//   const [photo ,setPhoto] = useState({});

//   // Fetch movie details when movieId changes
//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/getmovie/${movieId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch movie details");
//         }
//         const movieData = await response.json();
//         setPhoto(movieData);
//         const movieDuration = movieData.movieDuration ? movieData.movieDuration.slice(0, 5) : ''; // Extract only hh:mm part if it exists

//         // Update the state with the fetched movie data
//         dispatch({ type: 'update', fld: 'movietitle', val: movieData.movieTitle });
//         dispatch({ type: 'update', fld: 'releasedate', val: movieData.movieReleaseDate });
//         dispatch({ type: 'update', fld: 'duration', val: movieDuration });
//         dispatch({ type: 'update', fld: 'language', val: movieData.movieLanguage });
//         dispatch({ type: 'update', fld: 'category', val: movieData.movieCategory.movieCategoryId });
//         setFile(movieData.movieBannerPath); // Set the existing banner path
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]); // Run only when movieId changes

//   useEffect(() => {
//     // Set minimum date to today
//     const currentDate = new Date().toISOString().split('T')[0];
//     setMinDate(currentDate);

//     const fetchCategory = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/getallmoviecategory");
//         if (!response.ok) {
//           throw new Error('Failed to fetch category');
//         }
//         const data = await response.json();
//         setCategory(data);
//       } catch (error) {
//         console.error('Error fetching category:', error);
//       }
//     };

//     fetchCategory();
//   }, []);

//   const validateForm = () => {
//     const errors = {};
//     if (!movie.movietitle) errors.movietitle = "Movie title is required";
//     if (!movie.releasedate) errors.releasedate = "Release date is required";
//     if (!movie.duration) errors.duration = "Duration is required";
//     if (!movie.language) errors.language = "Language is required";
//     if (movie.category === 0) errors.category = "Category is required";
//     setValidationErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       setMessage("Please fill out all required fields");
//       return;
//     }

//     try {
//       const t = movie.duration + ":00";
//       const reqData = {
//         method: 'PUT',
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify({
//           movieId:movieId,
//           movieTitle: movie.movietitle,
//           movieReleaseDate: movie.releasedate,
//           movieDuration: t,
//           movieLanguage: movie.language,
//           movieCategoryId: movie.category
//         })
//       };

//       const resp = await fetch("http://localhost:8080/updatemovie", reqData);
//       if (!resp.ok) {
//         throw new Error("Failed to save movie");
//       }

//       const obj = await resp.json();

//       // Upload banner image only if a new file has been selected
//       if (file instanceof File) {
//         const fd = new FormData();
//         fd.append("file", file);
//         const reqOptions = {
//           method: 'POST',
//           body: fd
//         };

//         const imageResp = await fetch(`http://localhost:8080/uploadimage/${movieId}`, reqOptions);
//         if (!imageResp.ok) {
//           throw new Error("Failed to upload banner");
//         }

//         await imageResp.json();
//       }

//       setMessage("Data saved");

//     } catch (error) {
//       console.log(error.toString());
//       setMessage("Server error. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Movie</h2>
//       <form>
//         <div className="mt-2">
//           <label htmlFor="movietitle" className="form-label">Movie Title</label>
//           <input type="text" name="movietitle" value={movie.movietitle}
//             className="form-control"
//             onChange={(e) => { dispatch({ type: 'update', fld: 'movietitle', val: e.target.value }) }} />
//           {validationErrors.movietitle && <div className="text-danger">{validationErrors.movietitle}</div>}
//         </div>
//         <div className="mt-2">
//           <label htmlFor="releasedate" className="form-label">Movie Release Date</label>
//           <input type="date" name="releasedate" value={movie.releasedate}
//             className="form-control" min={minDate}
//             onChange={(e) => { dispatch({ type: 'update', fld: 'releasedate', val: e.target.value }) }} />
//           {validationErrors.releasedate && <div className="text-danger">{validationErrors.releasedate}</div>}
//         </div>
//         <div className="mt-2">
//           <label htmlFor="duration" className="form-label">Movie Duration</label>
//           <input type="time" name="duration" value={movie.duration}
//             className="form-control"
//             onChange={(e) => { dispatch({ type: 'update', fld: 'duration', val: e.target.value }) }} />
//           {validationErrors.duration && <div className="text-danger">{validationErrors.duration}</div>}
//         </div>
//         <div className="mt-2">
//           <label htmlFor="language" className="form-label">Movie Language</label>
//           <select className="form-select" name='language' value={movie.language}
//             onChange={(e) => { dispatch({ type: 'update', fld: 'language', val: e.target.value }) }} >
//             <option value="">Select Movie Language</option>
//             <option value="Hindi">Hindi</option>
//             <option value="English">English</option>
//           </select>
//           {validationErrors.language && <div className="text-danger">{validationErrors.language}</div>}
//         </div>

//         <div className="mt-2">
//           <label className="form-label" htmlFor="category">Movie Category</label>
//           <select className="form-select" value={movie.category} name='category'
//             onChange={(e) => { dispatch({ type: 'update', fld: 'category', val: e.target.value }) }}>
//             <option value="0">Select Movie Category</option>
//             {category.map((cat) => (
//               <option key={cat.movieCategoryId} value={cat.movieCategoryId}>
//                 {cat.movieCategory}
//               </option>
//             ))}
//           </select>
//           {validationErrors.category && <div className="text-danger">{validationErrors.category}</div>}
//         </div>

//         <div className="mt-2">
//           <label htmlFor="cname" className="form-label">Movie Banner</label>
//           <input type="file" name="cname" id="cname"
//             className="form-control"
//             onChange={(e) => setFile(e.target.files[0])} />
//           {file && (
//             <div className="mt-2">
//               <label>Current Banner:</label>
//               <img src={file instanceof File ? URL.createObjectURL(file) : `data:image/jpeg;base64,${movieId && photo.movieBannerPath}`} 
//                    alt="Movie Banner" 
//                    className="img-fluid mt-2" 
//                    style={{ maxHeight: '100px', maxWidth: '50%' }} />
//             </div>
//           )}
//         </div>

//         <div className="mt-2">
//           <input type="submit"  value="Send Data" className="btn btn-primary" onClick={(e) => { handleSubmit(e) }} />
//           <input type="reset" value="Clear"
//             className="btn btn-primary"
//             onClick={() => { dispatch({ type: 'init' }); setMessage(''); setValidationErrors({}); setFile(null); }} />
//         </div>
//       </form>
//       {message && <div className="mt-4 alert alert-info">{message}</div>}
//     </div>
//   );
// }

// export default EditMovieAdmin;

import { useReducer, useState, useEffect } from "react";

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
    case 'set_movie':
      return { ...action.payload }; // Update state with fetched movie data
    case 'init':
      return init;
    default:
      return state;
  }
};

const EditMovieAdmin = ({ movieId, update, onClose }) => {
  const [movie, dispatch] = useReducer(reducer, init);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const [minDate, setMinDate] = useState('');
  const [message, setMessage] = useState(''); // State for the success/error message
  const [validationErrors, setValidationErrors] = useState({}); // State for validation errors
  const [photo, setPhoto] = useState({});

  // Fetch movie details when movieId changes
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getmovie/${movieId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const movieData = await response.json();
        setPhoto(movieData);
        const movieDuration = movieData.movieDuration ? movieData.movieDuration.slice(0, 5) : ''; // Extract only hh:mm part if it exists

        // Update the state with the fetched movie data
        dispatch({ type: 'update', fld: 'movietitle', val: movieData.movieTitle });
        dispatch({ type: 'update', fld: 'releasedate', val: movieData.movieReleaseDate });
        dispatch({ type: 'update', fld: 'duration', val: movieDuration });
        dispatch({ type: 'update', fld: 'language', val: movieData.movieLanguage });
        dispatch({ type: 'update', fld: 'category', val: movieData.movieCategory.movieCategoryId });
        setFile(movieData.movieBannerPath); // Set the existing banner path
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Run only when movieId changes

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
      const t = movie.duration + ":00";
      const reqData = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          movieId: movieId,
          movieTitle: movie.movietitle,
          movieReleaseDate: movie.releasedate,
          movieDuration: t,
          movieLanguage: movie.language,
          movieCategoryId: movie.category
        })
      };

      const resp = await fetch("http://localhost:8080/updatemovie", reqData);
      if (!resp.ok) {
        throw new Error("Failed to save movie");
      }

      const obj = await resp.json();

      // Upload banner image only if a new file has been selected
      if (file instanceof File) {
        const fd = new FormData();
        fd.append("file", file);
        const reqOptions = {
          method: 'POST',
          body: fd
        };

        const imageResp = await fetch(`http://localhost:8080/uploadimage/${movieId}`, reqOptions);
        if (!imageResp.ok) {
          throw new Error("Failed to upload banner");
        }

        await imageResp.json();
      }

      setMessage("Data saved");

    } catch (error) {
      console.log(error.toString());
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <h2>Edit Movie</h2>
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
            className="form-control" min={minDate}
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
          <select className="form-select" name='language' value={movie.language}
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
          {file && (
            <div className="mt-2">
              <label>Current Banner:</label>
              <img src={file instanceof File ? URL.createObjectURL(file) : `data:image/jpeg;base64,${movieId && photo.movieBannerPath}`} 
                   alt="Movie Banner" 
                   className="img-fluid mt-2" 
                   style={{ maxHeight: '100px', maxWidth: '50%' }} />
            </div>
          )}
        </div>

        <div className="mt-2">
          <input type="submit" value="Send Data" className="btn btn-primary" onClick={(e) => { handleSubmit(e) }} />
          <input type="reset" value="Clear"
            className="btn btn-primary"
            onClick={() => { dispatch({ type: 'init' }); setMessage(''); setValidationErrors({}); setFile(null); }} />
        </div>
      </form>
      {message && <div className="mt-4 alert alert-info">{message}</div>}
    </div>
  );
}

export default EditMovieAdmin;
