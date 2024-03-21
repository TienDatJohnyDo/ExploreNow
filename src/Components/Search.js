import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons'; // Import the plus, user, search, home, and bell icons

function Search() {
  return (
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
        <Link to="/search">
          <button className="nav-button">
            <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={{ fontWeight: 'bold' }} />
          </button>
        </Link>
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
  );
}

export default Search;