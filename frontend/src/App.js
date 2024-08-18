// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import RegisterUserComponents from './components/RegUser';
import RegisterTheatreOwner from './components/RegTheatrOwner';
import AboutUs from './components/aboutus';
import Admin from './Admin/admin';
import TheaterOwner from './components/theaterOwner';
import LogoutComponent from './components/logout';
import AddTheatreComponent from './TheatreOwner/addtheatre';
import BookingComponent from './TheatreOwner/booking';
import OwnerDashboardComponent from './TheatreOwner/ownerDashboard';
import ActivateTheatreOwner from './Admin/activeTowner';
import AdminDashboard from './Admin/adminDashboard';
import ManageMovies from './Admin/manageMovies';
import ManageScreen from './TheatreOwner/addScreen';
import SeatingArrangement from './TicketBooking/seatsarrangement';
import PageNotFoundComponent from './components/pagenotfound';
import BookingTicket from './TicketBooking/Booking';
import Confirmation from './TicketBooking/confirm';
import MovieShowDetails from './components/MovieShowDetails';
import AddShows from './TheatreOwner/addShows';
import CustomerDashboard from './components/customerDashboard';
import UserNavbar from './UserComponent/userNavbar';

function App() {
  // const sampleShowtimes = [
  //   {
  //     name: 'CinePRO: Vasant Cinema, Pune',
  //     info: 'Non-cancellable',
  //     showtimes: ['03:30 PM', '06:30 PM']
  //   },
  //   {
  //     name: 'Vishal Cinemaas: Pimpri',
  //     info: 'Cancellation Available',
  //     showtimes: ['01:45 PM', '04:30 PM', '05:45 PM', '07:15 PM', '10:00 PM', '11:00 PM']
  //   },
  //   {
  //     name: 'INOX: Elpro City Square, Chinchwad',
  //     info: 'Cancellation Available',
  //     showtimes: ['12:45 PM', '03:00 PM', '04:00 PM', '05:00 PM', '08:15 PM', '09:30 PM', '10:30 PM', '11:55 PM']
  //   }
  // ];
  
  return (
    <div>
      <Navbar  />
      <br/>
      <br/>  
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register/customer" element={<RegisterUserComponents />} />
        <Route path="/register/theatre-owner" element={<RegisterTheatreOwner />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/logout" element={< LogoutComponent />} />
        

        
        {/* User  routes */}
        <Route path="/user" element={<UserNavbar />}/>
        <Route  path="/customerDashboard" element={< CustomerDashboard/>} />
        <Route path="/seating" element={<SeatingArrangement />}/>
        <Route path="/booking" element={<BookingTicket />} />
        <Route path="/confirmation" element={<Confirmation />} />
        
        <Route path='/movies/:id' element={<MovieShowDetails/>} />
        

        {/* Admin  routes */}
        <Route path="/admin" element={<Admin />} >
            <Route index element={<AdminDashboard />} />
            <Route path='manageMovies' element={<ManageMovies />} />
            <Route path='activeOwner' element={<ActivateTheatreOwner/>} />
        </Route>

         {/* Theatre Owner routes */}
         <Route path="/theaterOwner" element={<TheaterOwner />} >
            <Route index element={<OwnerDashboardComponent />} />
            <Route path='/theaterOwner/addscreens' element={<ManageScreen/>}    />
            <Route path='/theaterOwner/addShowes' element={<AddShows />}    />
            <Route path='/theaterOwner/booking' element={<BookingComponent />}  />
            <Route path='/theaterOwner/addtheatre' element={<AddTheatreComponent />}  />
            <Route path='/theaterOwner/booking' element={<BookingComponent />}  />       
        </Route>
        
        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>
      </div>
  );
}

export default App;
