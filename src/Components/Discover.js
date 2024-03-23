// Discover.js
import React from 'react';
import './styles/discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Discover() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Discover</h1>
      <FontAwesomeIcon icon={faBell} className="notification-icon" />
    </div>
  );
}

export default Discover;