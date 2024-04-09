import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faMinus } from '@fortawesome/free-solid-svg-icons';

function Post() {
  const [selectedCollaborator, setSelectedCollaborator] = useState('');
  const [activeTab, setActiveTab] = useState('/post');

  const handleNext = (tab) => {
    setActiveTab(tab);
  }

  const handleCollaboratorChange = (event) => {
    setSelectedCollaborator(event.target.value);
  };

  const handleCollaboratorRemove = () => {
    setSelectedCollaborator("");
  };

  return (
    <div className="discover-container">
      <div class="banner">
        <div class="banner-content">
          <span>Hey Lauren! <br></br></span>
          <span>Share your journey</span>
        </div>
      </div>

    

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
          <option value="Charles Smith">Charles Smith </option>
          <option value="Lisa Williams ">Lisa Williams </option>
          <option value="Nancy Brown">Nancy Brown </option>
          <option value="Alone">Alone </option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="selected-collaborator-container">
        {selectedCollaborator && (
          <div className="selected-collaborator">
            <FontAwesomeIcon icon={faUser} color="black" size="lg" className="profile-icon" />
            <span className="collaborator-name">{selectedCollaborator}</span>
            <FontAwesomeIcon icon={faMinus} color="black" size="lg" className="remove-icon" onClick={handleCollaboratorRemove} />
          </div>
        )}
      </div>
      
      <Link to="/postTwo" onClick={() => handleNext('/postTwo')}>
        <div className="next-button-container">
          <button className="next-button">Next</button>
        </div>
      </Link>
    </div>
  );
}

export default Post;