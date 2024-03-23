// GuestProfile.js
import React from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router
import Guestsearch from "./Guestsearch"; 
import Post from "./Post"; 
import Profile from "./Profile";


function GuestProfile() {
  return (
    
    <div className="discover-container">
      <h1 className="discover-label">Profile guest</h1>
      
    </div>
    
    
  );
}

export default GuestProfile;