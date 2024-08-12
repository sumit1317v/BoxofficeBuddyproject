// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import RegisterComponents from './components/RegUser';
import RegisterTheatreOwner from './components/RegTheatrOwner';
import AboutUs from './components/aboutus';
import Admin from './Admin/admin';
import TheaterOwner from './components/theaterOwner';
import LogoutComponent from './components/logout';
import AddMoviesComponent from './TheatreOwner/addmovies';
import AddTheatreComponent from './TheatreOwner/addtheatre';
import BookingComponent from './TheatreOwner/booking';
import OwnerDashboardComponent from './TheatreOwner/ownerDashboard';
import ActivateTheatreOwner from './Admin/activeTowner';
import AddMovieAdmin from './Admin/addmovies';
import AdminDashboard from './Admin/adminDashboard';
import ManageMovies from './Admin/manageMovies';
function App() {
  
  return (
    <div>
      <Navbar  />
      <br/>
      <br/>
      {/* 
       */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/theaterOwner" element={<TheaterOwner />} /> */}
        <Route path="/register/customer" element={<RegisterComponents />} />
        <Route path="/register/theatre-owner" element={<RegisterTheatreOwner />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/logout" element={<LogoutComponent />} />
        
        {/* Admin  routes */}
        <Route path="/admin" element={<Admin />} >
            <Route index element={<AdminDashboard />} />
            <Route path='manageMovies' element={<ManageMovies />} />
            <Route path='activeOwner' element={<ActivateTheatreOwner/>} />
            
        </Route>

         {/* Theatre Owner routes */}
         <Route path="/theaterOwner" element={<TheaterOwner />} >
            <Route index element={<OwnerDashboardComponent />} />
            <Route path='/theaterOwner/addmovies' element={<AddMoviesComponent/>}    />
            <Route path='/theaterOwner/addtheatre' element={<AddTheatreComponent />}  />
            <Route path='/theaterOwner/booking' element={<BookingComponent />}  />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
