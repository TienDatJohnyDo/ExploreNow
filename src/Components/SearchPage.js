import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, faBell } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom';

function SearchPage() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Where to? </h1>
      
      <div className="text-input-container">
        <input 
          type="text"
          placeholder="Places, hotels, restaurants..."
          className="text-input"
        />
        <FontAwesomeIcon icon={faSearch} color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
      </div>
      
      <div className="navigation-bar">
        <button className="nav-button">
          <FontAwesomeIcon icon={faHome} color="white" size="lg" />
        </button>
        <Link to="/searchpage" className="nav-button">
          <FontAwesomeIcon icon={faSearch} color="#6DDDE4" size="lg" style={{ fontWeight: 'bold' }} />
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
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default SearchPage;