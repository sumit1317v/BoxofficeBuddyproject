
// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const mystate = useSelector((state) => state.logged);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State to hold search results
 
  const movies = [
    { id: 1, name: 'Inception' },
    { id: 2, name: 'Interstellar' },
    { id: 3, name: 'The Dark Knight' },
    // Add more movies as needed
  ];
  
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Simple search logic: filter movies that contain the search term
    const results = movies.filter(movie =>
      movie.name.toLowerCase().includes(search.toLowerCase()))
      console.log(results);
  };

  return (
  <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Box Office Buddy
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
              <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={dropdown}>
                Register
              </div>
              <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/register/customer" className="dropdown-item">
                    Customer Registration
                  </Link>
                </li>
                <li>
                  <Link to="/register/theatre-owner" className="dropdown-item">
                    Theatre Owner Registration
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <form className="d-flex" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2 searchFont"
                  type="search"
                  placeholder="Search movies or city"
                  aria-label="Search"
                  value={search}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-info" type="submit">Search</button>
              </form>
              {searchResults.length > 0 && (
                  <ul className="list-group position-absolute" style={{ zIndex: 1000 }}>
                    {searchResults.map(result => (
                      <li key={result.id} className="list-group-item">
                        <Link to={`/movies/${result.id}`}>{result.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}

            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
