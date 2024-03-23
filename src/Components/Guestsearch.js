import React from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome, } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom';


function Guestsearch() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Where to? (guest) </h1>
      
      <div className="text-input-container">
        <input 
          type="text"
          placeholder="Places, hotels, restaurants..."
          className="text-input"
        />
        <FontAwesomeIcon icon={faSearch} color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
      </div>
      

    </div>
  );
}

export default Guestsearch;