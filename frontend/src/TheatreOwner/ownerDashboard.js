// import React, { useState, useEffect } from 'react';
// import './ownerdashboard.css';
// import ShowsTable from './ShowsTable';

// const OwnerDashboardComponent = () => {
//     const [theatreData, setTheatreData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Define the userid to send in the request body
//         const loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));
//         const userid = loggedUser.userId;

//         // Fetch data from the API using POST method
//         fetch('http://localhost:8080/getTheatrebyuserid', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ userid }),
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setTheatreData(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error.message}</p>;
//     }

//     return (
//         <>
//         <div className="table-container ">
//             <h2>Theatre List</h2>
//             {theatreData.length === 0 ? (
//                 <p>No theatres have been added</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Theatre Name</th>
//                             <th>No of Screens</th>
//                             <th>GST No</th>
//                             <th>Address Line 1</th>
//                             <th>Address Line 2</th>
//                             <th>Pincode</th>
//                             <th>Phone</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {theatreData.map(theatre => (
//                             <tr key={theatre.theatreId}>
//                                 <td>{theatre.theatreName}</td>
//                                 <td>{theatre.noOfScreens}</td>
//                                 <td>{theatre.gstNo}</td>
//                                 <td>{theatre.addressLine1}</td>
//                                 <td>{theatre.addressLine2}</td>
//                                 <td>{theatre.pincode}</td>
//                                 <td>{theatre.phone}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//         <ShowsTable />
//         </>
//     );
    
// };

// export default OwnerDashboardComponent;
import React, { useState, useEffect } from 'react';
import './ownerdashboard.css';
import ShowsTable from './ShowsTable';

const OwnerDashboardComponent = () => {
    const [theatreData, setTheatreData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the userid to send in the request body
        const loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));
        const userid = loggedUser.userId;

        // Fetch data from the API using POST method
        fetch('http://localhost:8080/getTheatrebyuserid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userid }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTheatreData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="owner-dashboard">
            {/* Theatre Data Table */}
            <div className="table-container">
                <h2>Theatre List</h2>
                {theatreData.length === 0 ? (
                    <p>No theatres have been added</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Theatre Name</th>
                                <th>No of Screens</th>
                                <th>GST No</th>
                                <th>Address Line 1</th>
                                <th>Address Line 2</th>
                                <th>Pincode</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {theatreData.map(theatre => (
                                <tr key={theatre.theatreId}>
                                    <td>{theatre.theatreName}</td>
                                    <td>{theatre.noOfScreens}</td>
                                    <td>{theatre.gstNo}</td>
                                    <td>{theatre.addressLine1}</td>
                                    <td>{theatre.addressLine2}</td>
                                    <td>{theatre.pincode}</td>
                                    <td>{theatre.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Shows Table Component */}
            {/* <ShowsTable /> */}
        </div>
    );
};

export default OwnerDashboardComponent;
