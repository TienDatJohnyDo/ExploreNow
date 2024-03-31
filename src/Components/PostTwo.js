import React, { useState } from 'react';
import './styles/postTwo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faMinus } from '@fortawesome/free-solid-svg-icons';


function PostTwo() {

    const [selectedCollaborator, setSelectedCollaborator] = useState('');

  const handleCollaboratorChange = (event) => {
    setSelectedCollaborator(event.target.value);
  };

  const handleCollaboratorRemove = () => {
    setSelectedCollaborator("");
  }

  return (
    <div className="discover-container">
      <h1 className="discover-label">POST</h1>

      <div className='test'>
        <p>Add some photos</p>
      </div>

      <div className="next-button-container">
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}

export default PostTwo;