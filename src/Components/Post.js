import React from 'react';
import './styles/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Post() {
  return (
    <div className="discover-container">
      <div className="top-section">
        <h1 className="discover-label">POST</h1> 
        
      </div>

      <div className="text-input-container">
          <input 
            type="text"
            placeholder="Add Location"
            className="text-input"
          />
          <FontAwesomeIcon icon={faSearch} color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
        </div>
      {/* Other content of your component */}
    </div>
  );
}

export default Post;