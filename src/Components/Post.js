import React, { useState } from 'react';
import './styles/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faMinus } from '@fortawesome/free-solid-svg-icons';

function Post() {
  const [selectedCollaborator, setSelectedCollaborator] = useState('');

  const handleCollaboratorChange = (event) => {
    setSelectedCollaborator(event.target.value);
  };

  return (
    <div className="discover-container">
      <h1 className="discover-label">POST</h1>

      <div className="location-text">
        <p>Where did you go?</p>
      </div>
      
      <div className="text-input-container">
        <input 
          type="text"
          placeholder="Add Location"
          className="text-input"
        />
        <FontAwesomeIcon icon={faSearch} color="grey" size="lg" className="search-icon" />
      </div>

      <div className="location-text">
        <p>Who did you go with?</p>
      </div>
      
      <div className="text-input-container">
        <select className="text-input" value={selectedCollaborator} onChange={handleCollaboratorChange}>
          <option value="">Select Collaborators</option>
          <option value="Nathan Nguyen">Nathan Nguyen</option>
          <option value="David Bruce">David Bruce</option>
          <option value="Stephen Boyer">Stephen Boyer</option>
          <option value="Alone">Alone</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="selected-collaborator-container">
        {selectedCollaborator && (
          <div className="selected-collaborator">
            <FontAwesomeIcon icon={faUser} color="black" size="lg" className="profile-icon" />
            <span className="collaborator-name">{selectedCollaborator}</span>
            <FontAwesomeIcon icon={faMinus} color="black" size="lg" className="remove-icon" />
          </div>
        )}
      </div>

      <div className="next-button-container">
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}

export default Post;