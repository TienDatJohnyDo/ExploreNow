// Discover.js

import React from 'react';
import './discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router
import SearchPage from "./SearchPage"; // Import the Search component

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
        <button className="nav-button">
          <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={{ fontWeight: 'bold' }} />
        </button>
        <button className="nav-button">
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
        </button>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/searchpage" element={<SearchPage />} /> {/* Route for the Search component */}
      </Routes>
    </div>
  );
}

export default Discover;