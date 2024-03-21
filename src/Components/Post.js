import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom';
import Discover from "./Discover"; // Import the Search component
import SearchPage from './SearchPage';
import Profile from './Profile'; 

function Post() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">POST </h1>

      <h2> Hi [Name] </h2> 
      <br></br>
      <h2> Share Your Journey</h2>
      <h3> Where did you go? </h3>
      
      <div className="text-input-container">
        
        <input 
          type="text"
          placeholder="Add Location"
          className="text-input"
        />
        <FontAwesomeIcon icon={faSearch} color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
      </div>
      
      <div className="navigation-bar">
        <Link to ="/discover" className="nav-button">
          <FontAwesomeIcon icon={faHome} color="white" size="lg" />
        </Link>
        <Link to="/searchpage" className="nav-button">
          <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={{ fontWeight: 'bold' }} />
        </Link>
        <button className="nav-button">
          <FontAwesomeIcon icon={faPlus} color="#6DDDE4" size="lg" style={{ fontWeight: 'bold' }} />
        </button>
        <Link to ="/profile" className="nav-button">
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
        </Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path = "/discover" element = {<Discover />} />
        <Route path = "/profile " element = {<Profile />} /> 
      </Routes>
    </div>
  );
}

export default Post;