// Guestaccess.js
import React from 'react';
import './styles/discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router
import Guestsearch from "./Guestsearch"; 
import Post from "./Post"; 
import Profile from "./Profile";


function GuestDiscover() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Guess Discover<br></br>(placeholder)</h1>
      <FontAwesomeIcon icon={faBell} className="notification-icon" />
      <div className="navigation-bar">
        <Link to ="/GuestDiscover" className="nav-button">
          <FontAwesomeIcon icon={faHome} color="#6DDDE4" size="lg" />
        </Link>
        <Link to = "/GuestSearchPage" className="nav-button"> 
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
        <Route path= "/GuestSearchPage" element={<Guestsearch />} /> {/* Route for the Search component */}
        <Route path="/post" element={<Post />} />
        <Route path = "/profile" element ={<Profile />} />
      </Routes>
    </div>
  );
}

export default GuestDiscover;