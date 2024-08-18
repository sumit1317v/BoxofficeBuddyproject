
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TheaterActivation.css';

const ActivateTheatreOwner = () => {
  const [theaters, setTheaters] = useState([]);

  // Define fetchTheaters function outside useEffect to make it accessible throughout the component
  const fetchTheaters = () => {
    fetch('http://localhost:8080/getuserbyrole')
      .then(response => response.json())
      .then(data => {
        setTheaters(data);
      })
      .catch(error => {
        console.error('Error fetching theaters:', error);
      });
  };

  useEffect(() => {
    fetchTheaters(); // Call fetchTheaters when the component mounts
  }, []);

  const activateTheater = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/approveuser/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('User activated successfully');
        fetchTheaters(); // Re-fetch theaters to update the list
      } else {
        console.error('Failed to activate user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deactivateTheater = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/deleteuser/${userId}`, {
        method: 'Delete',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('User deny successfully');
        fetchTheaters(); // Re-fetch theaters to update the list
      } else {
        console.error('Failed to deny user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container" >
      <h2>Activate Theatre Owner</h2>
      {theaters.length===0?(<p>No Theater Owner For Approve</p>):(
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Contact No</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Approve</th>
            <th scope="col">Deny</th>
          </tr>
        </thead>
        <tbody>
          {theaters.map((theater, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{theater.fullName}</td>
              <td>{theater.mobileNo}</td>
              <td>{theater.emailId}</td>
              <td>{theater.city.cityName}</td>
              <td>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => activateTheater(theater.userId)}
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => deactivateTheater(theater.userId)}
                >
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default ActivateTheatreOwner;