// // src/MovieCard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './movieCard.css';
// import img from '../images/project-k.jpg'
// const MovieCard = ({ movie }) => {
//   return (
//     <div className="card movie-card">
//       {/* <img src={movie.posterUrl} className="card-img-top" alt={movie.title} /> */}
//       <img src={img} className="card-img-top" alt={movie.title} />
//       <div className="card-body">
//         <h5 className="card-title">{movie.title}</h5>
//         <p className="card-text">{movie.description}</p>
//         <Link to={`/book/${movie.id}`} className="btn btn-primary">Book Now</Link>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
// src/MovieCard.js
import React from 'react';
import './movieCard.css';
import img from '../images/project-k.jpg'
const MovieCard = ({ movie, handleBookNow }) => {
  return (
    <div className="card movie-card">
      {/* <img src={movie.posterUrl} className="card-img-top" alt={movie.title} /> */}
      <img src={img} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default MovieCard;
