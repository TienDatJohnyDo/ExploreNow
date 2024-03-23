// Guestaccess.js
import React from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router



function GuestDiscover() {
  return (
    
    <div className="discover-container">
      <h1 className="discover-label">Discover (guest)</h1>
      <FontAwesomeIcon icon={faBell} className="notification-icon" />
    </div>
    
    
  );
}

export default GuestDiscover;