import React from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; // Importing the "more" icon
import lauren from '../lauren.jpeg'

function Profile() {
  return (
    <div className="discover-container">
      <div className="profile-info">
        <div className="profile-picture-container">
          <img src={lauren} alt="Profile" className="profile-picture" />
        </div>
        <div className="profile-text">
          <h2>Lauren Cromwell</h2>
          <p>Travel Blogger <br />Collaborations open!</p>
        </div>
      </div>
      <div className="profile-stats-container">
        <div className="profile-stat">
          <p className="stat-number">2</p>
          <p className="stat-category">Posts</p>
        </div>
        <div className="profile-stat">
          <p className="stat-number">1.1 k</p>
          <p className="stat-category">Followers</p>
        </div>
        <div className="profile-stat">
          <p className="stat-number">500</p>
          <p className="stat-category">Following</p>
        </div>
      </div>


      {/* Add in at least 2 Post  */}
            
      <FontAwesomeIcon icon={faEllipsisV} className="more-icon" />
    </div>
  );
}

export default Profile;