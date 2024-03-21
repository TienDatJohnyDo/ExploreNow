import React from 'react';
import './discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons'; // Import the plus, user, search, home, and bell icons
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Search from "./Components/Search"; 

function Discover() {
  return (
    <Router>
        <div className="discover-container">
            <h1 className="discover-label">Discover</h1>
            {/* Add content for Discover page here */}
            <FontAwesomeIcon icon={faBell} className="notification-icon" />
                <div className="navigation-bar">
                    {/* Replace "Discover" link with white house icon */}
                    <button className="nav-button active">
                    <FontAwesomeIcon icon={faHome} color="#6DDDE4" size="lg" />
                    </button>
                    {/* Route the "Search" button to the search page */}
                    
                    <button className="nav-button">
                        <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={{ fontWeight: 'bold' }} />
                    </button>
                    
                    {/* Replace "Post" link with plus button icon */}
                    <button className="nav-button">
                    <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={{ fontWeight: 'bold' }} />
                    </button>
                    {/* Replace "Profile" link with the user icon */}
                    <button className="nav-button">
                    <FontAwesomeIcon icon={faUser} color="white" size="lg" />
                    </button>
                </div>
        </div>


        {/* Routes */}
        <Routes >
            <Route path ="/search" element = {<Search />} />

            
        </Routes>


    </Router>
  );
  
}

export default Discover;