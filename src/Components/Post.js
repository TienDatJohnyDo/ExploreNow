import React from 'react';
import './styles/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Post() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">POST</h1>

      <h2> Hey Lauren! </h2> 
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
    </div>
  );
}

export default Post;