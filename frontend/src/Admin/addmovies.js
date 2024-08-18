

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Container, Form, Button, Row, Col } from 'react-bootstrap';
// import './AddEditMovie.css';

// const AddMovieAdmin = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Submit data to the server or API here
//   };

//   return (
//     <Container className="mt-5 main">
//       <h1 className="mb-4">Add New Movie</h1>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="movieTitle">
//               <Form.Label>Movie Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter movie title"
//                 {...register('movieTitle', { required: 'Movie title is required', maxLength: 45 })}
//                 isInvalid={!!errors.movieTitle}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieTitle?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="movieReleaseDate">
//               <Form.Label>Release Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 {...register('movieReleaseDate', { required: 'Release date is required' })}
//                 isInvalid={!!errors.movieReleaseDate}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieReleaseDate?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="movieDuration">
//               <Form.Label>Duration</Form.Label>
//               <Form.Control
//                 type="time"
//                 {...register('movieDuration', { required: 'Movie duration is required' })}
//                 isInvalid={!!errors.movieDuration}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieDuration?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="movieLanguage">
//               <Form.Label>Language</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter language"
//                 {...register('movieLanguage', { required: 'Language is required', maxLength: 45 })}
//                 isInvalid={!!errors.movieLanguage}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieLanguage?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="movieCategoryId">
//               <Form.Label>Category ID</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter category ID"
//                 {...register('movieCategoryId', { required: 'Category ID is required' })}
//                 isInvalid={!!errors.movieCategoryId}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieCategoryId?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="movieSynopsis">
//               <Form.Label>Synopsis</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Enter synopsis"
//                 {...register('movieSynopsis', { required: 'Synopsis is required', maxLength: 45 })}
//                 isInvalid={!!errors.movieSynopsis}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieSynopsis?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="movieBannerPath">
//               <Form.Label>Banner Path</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter banner path URL"
//                 {...register('movieBannerPath', { required: 'Banner path is required', maxLength: 200 })}
//                 isInvalid={!!errors.movieBannerPath}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieBannerPath?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="movieTrailorPath">
//               <Form.Label>Trailer Path</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter trailer path URL"
//                 {...register('movieTrailorPath', { required: 'Trailer path is required', maxLength: 200 })}
//                 isInvalid={!!errors.movieTrailorPath}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.movieTrailorPath?.message}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>

//         <Button variant="primary" type="submit">Add Movie</Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddMovieAdmin;
import React, { useState, useEffect } from 'react';

const AddMovieAdmin = ({ movie, onClose, setMovies, movies }) => {
  const [formData, setFormData] = useState({
    title: '',
    releaseDate: '',
    duration: '',
    language: '',
    category: '',
    cast: '',
  });

  useEffect(() => {
    if (movie) {
      setFormData(movie);
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie) {
      // Editing existing movie
      setMovies(movies.map(m => (m.id === movie.id ? formData : m)));
    } else {
      // Adding a new movie
      setMovies([...movies, { id: movies.length + 1, ...formData }]);
    }
    onClose();
  };

  return (
    <div className="add-edit-movie">
      <h2>{movie ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Release Date:</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="time"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Cast:</label>
          <input
            type="text"
            name="cast"
            value={formData.cast}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddMovieAdmin;
