import { useReducer, useState, useEffect } from "react";

// Initial state
const init = {
  movietitle: '',
  releasedate: '',
  duration: '',
  language: '',
  category: 0
};

// Modification function
// Gets called after calling dispatch, receives an action object
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

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch("http://localhost:8080/getallmoviecategory");
        if (!response.ok) {
          throw new Error('Failed to fetch category');
        }
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      alert("Data saved and banner uploaded successfully");

    } catch (error) {
      console.log(error.toString());
      alert("Server error. Please try again.");
    }
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <form>
        <div className="mt-2">
          <label htmlFor="movietitle" className="form-label">Movie Title</label>
          <input type="text" name="movietitle" value={movie.movietitle}
            className="form-control"
            onChange={(e) => { dispatch({ type: 'update', fld: 'movietitle', val: e.target.value }) }} />
        </div>
        <div className="mt-2">
          <label htmlFor="releasedate" className="form-label">Movie Release Date</label>
          <input type="date" name="releasedate" value={movie.releasedate}
            className="form-control"
            onChange={(e) => { dispatch({ type: 'update', fld: 'releasedate', val: e.target.value }) }} />
        </div>
        <div className="mt-2">
          <label htmlFor="duration" className="form-label">Movie Duration</label>
          <input type="time" name="duration" value={movie.duration}
            className="form-control"
            onChange={(e) => { dispatch({ type: 'update', fld: 'duration', val: e.target.value }) }} />
        </div>
        <div className="mt-2">
          <label htmlFor="language" className="form-label">Movie Language</label>
          <select className="form-select" name='language'
            onChange={(e) => { dispatch({ type: 'update', fld: 'language', val: e.target.value }) }} >
            <option value="">Select Movie Language</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
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
        </div>

        <div className="mt-2">
          <label htmlFor="cname" className="form-label">Movie Banner</label>
          <input type="file" name="cname" id="cname"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="mt-2">
          <input type="submit" value="Send Data"
            className="btn btn-primary"
            onClick={(e) => { handleSubmit(e) }} />
          <input type="reset" value="Clear"
            className="btn btn-primary"
            onClick={() => { dispatch({ type: 'init' }) }} />
        </div>
      </form>
      {JSON.stringify(movie)}
      <p>{file && file.name}</p>

    </div>
  );
}

export default AddMovieAdmin;