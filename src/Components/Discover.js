// Discover.js

import React from 'react';
import './discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router
import SearchPage from "./SearchPage"; // Import the Search component
import Post from "./Post"; 
import Profile from "./Profile"; 

function Discover() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Discover</h1>
      <FontAwesomeIcon icon={faBell} className="notification-icon" />
      <div className="navigation-bar">
        <button className="nav-button">
          <FontAwesomeIcon icon={faHome} color="#6DDDE4" size="lg" />
        </button>
        <Link to="/searchpage" className="nav-button"> {/* Link to the Search page */}
          <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={{ fontWeight: 'bold' }} />
        </Link>
        <Link to ="/post" className="nav-button">
          <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={{ fontWeight: 'bold' }} />
        </Link>
        <Link to="/profile" className="nav-button">
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
        </Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/searchpage" element={<SearchPage />} /> {/* Route for the Search component */}
        <Route path="/post" element={<Post />} />
        <Route path = "/profile" element ={<Profile />} />
      </Routes>
    </div>
  );
}

export default Discover;