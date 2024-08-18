import React, { useState, useEffect } from 'react';
import './addscreen.css';
import { useNavigate } from "react-router-dom";

const ManageScreen = () => {
  const [screens, setScreens] = useState([]);
  const [theaterName, setTheaterName] = useState('');
  const [screenName, setScreenName] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [theaterList, setTheaterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch theater list from the API
    const loggedUser = JSON.parse(localStorage.getItem('LoggedUser'));
    const userid = loggedUser.userId;

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
        return response.json(); // Parse JSON data
      })
      .then((data) => {
        setTheaterList(data); // Set the fetched theater list
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!theaterName) errors.theaterName = 'Theater Name is required';
    if (!screenName) errors.screenName = 'Screen Name is required';
    if (!seatCapacity) {
      errors.seatCapacity = 'Seat Capacity is required';
    } else if (parseInt(seatCapacity, 10) <= 0) {
      errors.seatCapacity = 'Seat Capacity must be a positive number';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const selectedTheater = theaterList.find((theater) => theater.theatreName === theaterName);
    if (!selectedTheater) {
      alert("Please select a valid theater");
      return;
    }

    const newScreen = {
      screenName,
      totalSeats: parseInt(seatCapacity, 10),
      theatreid: selectedTheater.theatreId,
    };

    // Send POST request to save the screen
    fetch('http://localhost:8080/savetheatrescreen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScreen),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save the screen');
        }
        return response.json();
      })
      .then((data) => {
        setSuccessMessage('Screen saved successfully!');
        setScreens([...screens, data]); // Add the newly saved screen to the list
        setScreenName('');
        setSeatCapacity('');
        setTheaterName('');
        setValidationErrors({}); // Clear validation errors on success
      })
      .catch((error) => {
        setError(error);
        alert('Error: ' + error.message);
        navigate('/theaterOwner/addscreens');
        setScreenName('');
        setSeatCapacity('');
        setTheaterName('');
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  // Check if all fields are filled to enable the Save button
  const isSaveDisabled = !theaterName || !screenName || !seatCapacity || parseInt(seatCapacity, 10) <= 0;

  return (
    <div className="manage-screen-container" style={{ padding: '70px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Manage Screen</h2>

      <div>
        <label>
          Enter Theater Name:
          <select
            value={theaterName}
            onChange={(e) => setTheaterName(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="">Select Theater</option>
            {theaterList.map((theater) => (
              <option key={theater.theatreId} value={theater.theatreName}>
                {theater.theatreName}
              </option>
            ))}
          </select>
        </label>
        {validationErrors.theaterName && <div className="error-message">{validationErrors.theaterName}</div>}
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
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </label>
        {validationErrors.screenName && <div className="error-message">{validationErrors.screenName}</div>}
      </div>
      <div>
        <label>
          Seat Capacity:
          <input
            type="number"
            value={seatCapacity}
            onChange={(e) => setSeatCapacity(e.target.value)}
            style={{ marginLeft: '10px' }}

          />
        </label>
        {validationErrors.seatCapacity && <div className="error-message">{validationErrors.seatCapacity}</div>}
      </div>
      <button onClick={handleSave} disabled={isSaveDisabled}>Save</button>
      
      {/* Display success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default ManageScreen;


