import React, { useState, useEffect } from 'react';
import './addShows.css';

export default function AddShows() {
  const [theaterList, setTheatreList] = useState([]);
  const [screenList, setScreenList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [theaterName, setTheaterName] = useState('');
  const [selectedTheatreId, setSelectedTheatreId] = useState('');
  const [screenName, setScreenName] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [nineAmSlot, setNineAmSlot] = useState('No');
  const [twelveAmSlot, setTwelveAmSlot] = useState('No');
  const [threePmSlot, setThreePmSlot] = useState('No');
  const [sixPmSlot, setSixPmSlot] = useState('No');
  const [ninePmSlot, setNinePmSlot] = useState('No');
  const [showStartDate, setShowStartDate] = useState('');
  const [showEndDate, setShowEndDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('LoggedUser'));
    const userid = loggedUser.userId;

    // Fetch theatres
    fetch('http://localhost:8080/getTheatrebyuserid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTheatreList(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

    // Fetch movies
    fetch('http://localhost:8080/getallmovie')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        return response.json();
      })
      .then((data) => {
        setMovieList(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleTheatreChange = (e) => {
    const selectedTheatreName = e.target.value;
    setTheaterName(selectedTheatreName);

    const selectedTheatre = theaterList.find(theatre => theatre.theatreName === selectedTheatreName);
    if (selectedTheatre) {
      setSelectedTheatreId(selectedTheatre.theatreId);

      fetch('http://localhost:8080/getscreenbytheatreid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theatreid: selectedTheatre.theatreId }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setScreenList(data);
          setScreenName(''); // Reset screenName when a new theatre is selected
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!theaterName) errors.theaterName = 'Theatre is required';
    if (!screenName) errors.screenName = 'Screen Name is required';
    if (!selectedMovie) errors.selectedMovie = 'Movie is required';
    if (!showStartDate) errors.showStartDate = 'Show Start Date is required';
    if (!showEndDate) errors.showEndDate = 'Show End Date is required';
    if (new Date(showStartDate) > new Date(showEndDate)) errors.dateRange = 'Show End Date must be after Show Start Date';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const selectedTheatreData = theaterList.find(theatre => theatre.theatreName === theaterName);
    const selectedScreenData = screenList.find(screen => screen.screenName === screenName);

    const data = {
      screenid: selectedScreenData ? selectedScreenData.screenId : null,
      moveid: selectedMovie ? +selectedMovie : null,
      showStartDate: showStartDate,
      showEndDate: showEndDate,
      nineAmSlot: nineAmSlot,
      twelveAmSlot: twelveAmSlot,
      threePmSlot: threePmSlot,
      sixPmSlot: sixPmSlot,
      ninePmSlot: ninePmSlot,
    };

    fetch('http://localhost:8080/saveshows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error saving show data');
        }
        return response.json();
      })
      .then(() => {
        setSuccessMessage('Show data saved successfully!');
        // Reset form fields
        setTheaterName('');
        setSelectedTheatreId('');
        setScreenName('');
        setSelectedMovie('');
        setNineAmSlot('No');
        setTwelveAmSlot('No');
        setThreePmSlot('No');
        setSixPmSlot('No');
        setNinePmSlot('No');
        setShowStartDate('');
        setShowEndDate('');
        setFormErrors({});
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) {
    return <div>Loading theatres...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="shows-container">
      <h2>Add a Show</h2>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {Object.keys(formErrors).length > 0 && (
        <div className="error-messages">
          {Object.values(formErrors).map((error, index) => (
            <div key={index} className="error">{error}</div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Theatre:</label>
          <select
            value={theaterName}
            onChange={handleTheatreChange}
            style={{ marginLeft: '10px' }}
          >
            <option value="">Select Theatre</option>
            {theaterList.map((theatre) => (
              <option key={theatre.theatreId} value={theatre.theatreName}>
                {theatre.theatreName}
              </option>
            ))}
          </select>
          {formErrors.theaterName && <div className="error">{formErrors.theaterName}</div>}
        </div>

        <div>
          <label>
            Screen Name:
            <select
              value={screenName}
              onChange={(e) => setScreenName(e.target.value)}
              style={{ marginLeft: '10px' }}
            >
              <option value="">Select Screen</option>
              {screenList.map((screen) => (
                <option key={screen.screenId} value={screen.screenName}>
                  {screen.screenName}
                </option>
              ))}
            </select>
            {formErrors.screenName && <div className="error">{formErrors.screenName}</div>}
          </label>
        </div>

        <div>
          <label>
            Movie:
            <select
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
              style={{ marginLeft: '10px' }}
            >
              <option value="">Select Movie</option>
              {movieList.map((movie) => (
                <option key={movie.movieId} value={movie.movieId}>
                  {movie.movieTitle}
                </option>
              ))}
            </select>
            {formErrors.selectedMovie && <div className="error">{formErrors.selectedMovie}</div>}
          </label>
        </div>

        <div>
          <label>
            Show Start Date:
            <input
              type="date"
              value={showStartDate}
              onChange={(e) => setShowStartDate(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
            {formErrors.showStartDate && <div className="error">{formErrors.showStartDate}</div>}
          </label>
        </div>

        <div>
          <label>
            Show End Date:
            <input
              type="date"
              value={showEndDate}
              onChange={(e) => setShowEndDate(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
            {formErrors.showEndDate && <div className="error">{formErrors.showEndDate}</div>}
          </label>
        </div>

        <div className="form-group">
          <label>Show Times:</label>
          <div>
            <label>
              9 AM:
              <input
                type="checkbox"
                checked={nineAmSlot === 'Yes'}
                onChange={() => setNineAmSlot(nineAmSlot === 'Yes' ? 'No' : 'Yes')}
              />
            </label>
            <label>
              12 PM:
              <input
                type="checkbox"
                checked={twelveAmSlot === 'Yes'}
                onChange={() => setTwelveAmSlot(twelveAmSlot === 'Yes' ? 'No' : 'Yes')}
              />
            </label>
            <label>
              3 PM:
              <input
                type="checkbox"
                checked={threePmSlot === 'Yes'}
                onChange={() => setThreePmSlot(threePmSlot === 'Yes' ? 'No' : 'Yes')}
              />
            </label>
            <label>
              6 PM:
              <input
                type="checkbox"
                checked={sixPmSlot === 'Yes'}
                onChange={() => setSixPmSlot(sixPmSlot === 'Yes' ? 'No' : 'Yes')}
              />
            </label>
            <label>
              9 PM:
              <input
                type="checkbox"
                checked={ninePmSlot === 'Yes'}
                onChange={() => setNinePmSlot(ninePmSlot === 'Yes' ? 'No' : 'Yes')}
              />
            </label>
          </div>
        </div>

        <button type="submit">Save Show</button>
      </form>
    </div>
  );
}
