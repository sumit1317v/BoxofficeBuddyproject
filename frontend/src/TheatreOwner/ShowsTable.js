import React, { useState, useEffect } from 'react';
import './ShowsTable.css'; // Make sure to create a CSS file for styling

const ShowsTable = () => {
  const [showsList, setShowsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch shows data from API
    fetch('http://localhost:8080/getallshows')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching shows data');
        }
        return response.json();
      })
      .then((data) => {
        setShowsList(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading shows...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="shows-table-container">
      <h2>Movie Shows List</h2>
      <table>
        <thead>
          <tr>
            <th>Show ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>9 AM Slot</th>
            <th>12 PM Slot</th>
            <th>3 PM Slot</th>
            <th>6 PM Slot</th>
            <th>9 PM Slot</th>
          </tr>
        </thead>
        <tbody>
          {showsList.map((show) => (
            <tr key={show.showId}>
              <td>{show.showId}</td>
              <td>{show.showStartDate}</td>
              <td>{show.showEndDate}</td>
              <td>{show.nineAmSlot}</td>
              <td>{show.twelveAmSlot}</td>
              <td>{show.threePmSlot}</td>
              <td>{show.sixPmSlot}</td>
              <td>{show.ninePmSlot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowsTable;
