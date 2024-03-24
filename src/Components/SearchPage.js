import React from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


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
      <h1 className="Suggestions">Suggestions </h1>
      <h1 className="Category 1">Category 1 </h1>

    </div>
  );
}

export default SearchPage;