// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './navbar.css';
// // // import { useSelector } from 'react-redux';

// // // const Navbar = () => {
// // //   const mystate = useSelector((state) => state.logged);
// // //   const [dropdown, setDropdown] = useState(false);
// // //   const [search, setSearch] = useState('');
// // //   const [movies, setMovies] = useState([]); // State to hold the movie data fetched from the API
// // //   const [searchResults, setSearchResults] = useState([]); // State to hold filtered search results

// // //   useEffect(() => {
// // //     // Fetch the list of movies from the API when the component mounts
// // //     const fetchMovies = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:8080/getallmovie');
// // //         const data = await response.json();
// // //         console.log(data);
// // //         setMovies(data); // Store the fetched movies in state
// // //       } catch (error) {
// // //         console.error('Error fetching movies:', error);
// // //       }
// // //     };
// // //     fetchMovies();
// // //   }, []); // Empty dependency array ensures this runs once on mount

// // //   const handleDropdown = () => {
// // //     setDropdown(!dropdown);
// // //   };

// // //   const handleSearchChange = (e) => {
// // //     const searchTerm = e.target.value;
// // //     setSearch(searchTerm);

// // //     // Filter the movies based on the search term
// // //     const results = movies.filter(movie =>
// // //       movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
// // //     );

// // //     setSearchResults(results);
// // //   };

// // //   const handleSearchSubmit = (e) => {
// // //     e.preventDefault();
// // //     // In this case, handle the search logic if you want to perform further actions
// // //   };

// // //   return (
// // //     <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
// // //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// // //         <div className="container-fluid">
// // //           <Link to="/" className="navbar-brand">
// // //             Box Office Buddy
// // //           </Link>
// // //           <div className="collapse navbar-collapse" id="navbarNav">
// // //             <ul className="navbar-nav ms-auto">
// // //               <li className="nav-item">
// // //                 <Link to="/" className="nav-link">
// // //                   Home
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link to="/login" className="nav-link">
// // //                   Login
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
// // //                 <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={dropdown}>
// // //                   Register
// // //                 </div>
// // //                 <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
// // //                   <li>
// // //                     <Link to="/register/customer" className="dropdown-item">
// // //                       Customer Registration
// // //                     </Link>
// // //                   </li>
// // //                   <li>
// // //                     <Link to="/register/theatre-owner" className="dropdown-item">
// // //                       Theatre Owner Registration
// // //                     </Link>
// // //                   </li>
// // //                 </ul>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link to="/about-us" className="nav-link">
// // //                   About Us
// // //                 </Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <form className="d-flex" onSubmit={handleSearchSubmit}>
// // //                   <input
// // //                     className="form-control me-2 searchFont"
// // //                     type="search"
// // //                     placeholder="Search movies"
// // //                     aria-label="Search"
// // //                     value={search}
// // //                     onChange={handleSearchChange} // Update search as user types
// // //                   />
// // //                   <button className="btn btn-info" type="submit">Search</button>
// // //                 </form>
// // //                 {searchResults.length > 0 && (
// // //                   <ul className="list-group position-absolute" style={{ zIndex: 1000 }}>
// // //                     {searchResults.map(result => (
// // //                       <li key={result.movieId} className="list-group-item searchList">
// // //                         <Link to={`/movies/${result.movieId}`}>{result.movieTitle}</Link>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 )}
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;



// // // export default Navbar;
// // import React, { useState ,useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './navbar.css';
// // import { useSelector } from 'react-redux';

// // const Navbar = () => {
// //   const mystate = useSelector((state) => state.logged);
// //   const [dropdown, setDropdown] = useState(false);
// //   const [search, setSearch] = useState('');
// //   const [searchResults, setSearchResults] = useState([]); // State to hold search results
 
  
  
// //   const handleDropdown = () => {
// //     setDropdown(!dropdown);
// //   };

// //   const handleSearchChange = (e) => {
// //          setSearch(e.target.value);
// //     };

    
  
   
    
  

// //   useEffect(() => {
    
// //   }, []);

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();
// //     // Simple search logic: filter movies that contain the search term
// //     fetch(`http://localhost:8080/searchmovie?title=${search}`)
// //     .then((resp) => {
// //       if (!resp.ok) {
// //         throw new Error(`HTTP error! status: ${resp.status}`);
// //       }
// //       return resp.json(); // Correctly parse the JSON response
// //     })
// //     .then((movies) => {
// //       setSearchResults(movies);
// //       console.log(movies);
// //     })
// //     .catch((error) => console.error("Failed to fetch movie tile:", error)); // Log the error to the console
    
// //   };

// //   return (
// //   <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //       <div className="container-fluid">
// //         <Link to="/" className="navbar-brand">
// //           Box Office Buddy
// //         </Link>
// //         <div className="collapse navbar-collapse" id="navbarNav">
// //           <ul className="navbar-nav ms-auto">
// //             <li className="nav-item">
// //               <Link to="/" className="nav-link">
// //                 Home
// //               </Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/login" className="nav-link">
// //                 Login
// //               </Link>
// //             </li>
// //             <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
// //               <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={dropdown}>
// //                 Register
// //               </div>
// //               <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
// //                 <li>
// //                   <Link to="/register/customer" className="dropdown-item">
// //                     Customer Registration
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/register/theatre-owner" className="dropdown-item">
// //                     Theatre Owner Registration
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/about-us" className="nav-link">
// //                 About Us
// //               </Link>
// //             </li>
// //             <li className="nav-item">
// //               <form className="d-flex" onSubmit={handleSearchSubmit}>
// //                 <input
// //                   className="form-control me-2 searchFont"
// //                   type="search"
// //                   placeholder="Search movies"
// //                   aria-label="Search"
// //                   value={search}
// //                   onChange={handleSearchChange}
// //                 />
// //                 <button className="btn btn-info" type="submit" setSearchResults>Search</button>
// //               </form>
// //               {searchResults.length > 0 && (
// //                   <ul className="list-group position-absolute" style={{ zIndex: 1000 }}>
// //                     {searchResults.map(result => (
// //                     <span color='black'>  <li key={result.movieId} className="list-group-item">
// //                         <Link to={`/movies/${result.movieId}`}>{result.movieTitle}</Link>
// //                       </li></span>
// //                     ))}
// //                   </ul>
// //                 )}

// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;


// // import React, { useState, useEffect, useRef } from 'react';
// // import { Link } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './navbar.css';
// // import { useSelector } from 'react-redux';

// // const Navbar = () => {
// //   const mystate = useSelector((state) => state.logged);
// //   const [dropdown, setDropdown] = useState(false);
// //   const [search, setSearch] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);
// //   const searchResultsRef = useRef(null); 

// //   const handleDropdown = () => {
// //     setDropdown(!dropdown);
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearch(e.target.value);
// //   };

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();
// //     fetch(`http://localhost:8080/searchmovie?title=${search}`)
// //       .then((resp) => {
// //         if (!resp.ok) {
// //           throw new Error(`HTTP error! status: ${resp.status}`);
// //         }
// //         return resp.json();
// //       })
// //       .then((movies) => {
// //         setSearchResults(movies);
// //         console.log(movies);
// //       })
// //       .catch((error) => console.error("Failed to fetch movie title:", error));
// //   };

// //   const handleClickOutside = (event) => {
// //     if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
// //       setSearchResults([]);
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener('click', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('click', handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
// //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //         <div className="container-fluid">
// //           <Link to="/" className="navbar-brand">
// //             Box Office Buddy
// //           </Link>
// //           <div className="collapse navbar-collapse" id="navbarNav">
// //             <ul className="navbar-nav ms-auto">
// //               <li className="nav-item">
// //                 <Link to="/" className="nav-link">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/login" className="nav-link">
// //                   Login
// //                 </Link>
// //               </li>
// //               <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
// //                 <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={dropdown}>
// //                   Register
// //                 </div>
// //                 <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
// //                   <li>
// //                     <Link to="/register/customer" className="dropdown-item">
// //                       Customer Registration
// //                     </Link>
// //                   </li>
// //                   <li>
// //                     <Link to="/register/theatre-owner" className="dropdown-item">
// //                       Theatre Owner Registration
// //                     </Link>
// //                   </li>
// //                 </ul>
// //               </li>
// //               <li className="nav-item">
// //                 <Link to="/about-us" className="nav-link">
// //                   About Us
// //                 </Link>
// //               </li>
// //               <li className="nav-item">
// //                 <form className="d-flex" onSubmit={handleSearchSubmit}>
// //                   <input
// //                     className="form-control me-2 searchFont"
// //                     type="search"
// //                     placeholder="Search movies"
// //                     aria-label="Search"
// //                     value={search}
// //                     onChange={handleSearchChange}
// //                   />
// //                   <button className="btn btn-info" type="submit">Search</button>
// //                 </form>
// //                 {searchResults.length > 0 && (
// //                   <ul ref={searchResultsRef} className="list-group position-absolute search-results" style={{ zIndex: 1000 }}>
// //                     {searchResults.map(result => (
// //                       <li key={result.movieId} className="list-group-item">
// //                         <Link to={`/customerDashboard`} onClick={() => setSearchResults([])}>
// //                           {result.movieTitle}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './navbar.css';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const mystate = useSelector((state) => state.logged);
//   const [dropdown, setDropdown] = useState(false);
//   const [search, setSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const searchResultsRef = useRef(null); 
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleDropdown = () => {
//     setDropdown(!dropdown);
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:8080/searchmovie?title=${search}`)
//       .then((resp) => {
//         if (!resp.ok) {
//           throw new Error(`HTTP error! status: ${resp.status}`);
//         }
//         return resp.json();
//       })
//       .then((movies) => {
//         setSearchResults(movies);
//         console.log(movies);
//       })
//       .catch((error) => console.error("Failed to fetch movie title:", error));
//   };

//   const handleClickOutside = (event) => {
//     if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
//       setSearchResults([]);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const handleResultClick = (movie) => {
//     navigate('/customerDashboard', { state: { movie } }); // Navigate to customerDashboard with movie object
//     setSearchResults([]); // Clear the search results
//   };

//   return (
//     <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">
//             Box Office Buddy
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
//                 <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={dropdown}>
//                   Register
//                 </div>
//                 <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
//                   <li>
//                     <Link to="/register/customer" className="dropdown-item">
//                       Customer Registration
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/register/theatre-owner" className="dropdown-item">
//                       Theatre Owner Registration
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about-us" className="nav-link">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <form className="d-flex" onSubmit={handleSearchSubmit}>
//                   <input
//                     className="form-control me-2 searchFont"
//                     type="search"
//                     placeholder="Search movies"
//                     aria-label="Search"
//                     value={search}
//                     onChange={handleSearchChange}
//                   />
//                   <button className="btn btn-info" type="submit">Search</button>
//                 </form>
//                 {searchResults.length > 0 && (
//                   <ul ref={searchResultsRef} className="list-group position-absolute search-results" style={{ zIndex: 1000 }}>
//                     {searchResults.map(result => (
//                       <li key={result.movieId} className="list-group-item">
//                         <span 
//                           onClick={() => handleResultClick(result)} // Handle the click event
//                           style={{ cursor: 'pointer', color: 'black' }}>
//                           {result.movieTitle}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../loggedSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { loggedIn, userRole } = useSelector((state) => state.logged);
    const [dropdown, setDropdown] = useState(false);
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:8080/getallmovie');
                const data = await response.json();
                console.log(data);
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);

        const results = movies.filter(movie =>
            movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(results);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("LoggedUser");
    };

    return (
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
                        {!loggedIn ? (
                            <>
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
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </li>
                        )}
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
                                    placeholder="Search movies"
                                    aria-label="Search"
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                                <button className="btn btn-info" type="submit">Search</button>
                            </form>
                            {searchResults.length > 0 && (
                                <ul className="list-group position-absolute" style={{ zIndex: 1000 }}>
                                    {searchResults.map(result => (
                                        <li key={result.movieId} className="list-group-item searchList">
                                            <Link to={`/movies/${result.movieId}`}>{result.movieTitle}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

