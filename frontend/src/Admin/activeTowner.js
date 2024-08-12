
// // export default function ActivateTheatreOwner(){
// //   return (
// //     <div>
// //       <h1>Hello Activate Theatre Owner</h1>
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// // import './ActivateTheaterOwner.css'; // Assume you have some custom CSS for styling

// const theatersData = [
//   { id: 1, name: 'City Pride', address: 'Pune', contactNo: '1234567890', isActive: false },
//   { id: 2, name: 'Laxminarayan', address: 'Pune', contactNo: '1234567890', isActive: true },
//   { id: 3, name: 'Rahul', address: 'Pune', contactNo: '1234567890', isActive: false },
// ];

// const ActivateTheatreOwner = () => {
//   const [theaters, setTheaters] = useState(theatersData);

//   const handleToggleActivation = (id) => {
//     const updatedTheaters = theaters.map((theater) =>
//       theater.id === id ? { ...theater, isActive: !theater.isActive } : theater
//     );
//     setTheaters(updatedTheaters);
//   };

//   return (
//     <div className="activate-theater-owner">
//       <h2>Activate Theater Owner</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>Contact No</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {theaters.map((theater) => (
//             <tr key={theater.id}>
//               <td>{theater.id}</td>
//               <td>{theater.name}</td>
//               <td>{theater.address}</td>
//               <td>{theater.contactNo}</td>
//               <td>
//                 <button
//                   className={`btn ${theater.isActive ? 'btn-danger' : 'btn-primary'}`}
//                   onClick={() => handleToggleActivation(theater.id)}
//                 >
//                   {theater.isActive ? 'De-Activate' : 'Activate'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ActivateTheatreOwner;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TheaterActivation.css';

const ActivateTheatreOwner = () => {
  const [theaters, setTheaters] = useState([]);

  // Define fetchTheaters function outside useEffect to make it accessible throughout the component
  const fetchTheaters = () => {
    fetch('https://localhost:7066/api/Admin/GetTheater')
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
      const response = await fetch(`https://localhost:7066/api/Admin/ActivateUser?userId=${userId}`, {
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
      const response = await fetch(`https://localhost:7066/api/Admin/InactivateUser?userId=${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('User inactivated successfully');
        fetchTheaters(); // Re-fetch theaters to update the list
      } else {
        console.error('Failed to inactivate user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Active Theater Login</h2>
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Theater ID</th>
            <th scope="col">Name</th>
            <th scope="col">Contact No</th>
            <th scope="col">User Id</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Activate</th>
            <th scope="col">Inactivate</th>
          </tr>
        </thead>
        <tbody>
          {theaters.map((theater, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{theater.theater_id}</td>
              <td>{theater.name}</td>
              <td>{theater.mobile}</td>
              <td>{theater.userId}</td>
              <td>{theater.userName}</td>
              <td>
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => activateTheater(theater.userId)}
                >
                  Activate
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => deactivateTheater(theater.userId)}
                >
                  Inactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivateTheatreOwner;
