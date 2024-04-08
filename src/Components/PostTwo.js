import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/postTwo.css'; // Import your CSS file
import postImage from './images/jasper.jpg'; // Import your image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the back arrow icon

function PostTwo() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeTab, setActiveTab] = useState('/postTwo');
  const MAX_IMAGES = 3;

  const handleAddImage = () => {
    if (selectedImages.length < MAX_IMAGES) {
      setSelectedImages([...selectedImages, postImage]); // Update with spread syntax
    }
  };

  const handleNext = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="discover-container">
      <div className="banner">
        <div className="banner-content">
          <span>Hey Lauren! <br></br></span>
          <span>Share your journey</span>
        </div>
      </div>

      {/* Back arrow */}
      <Link to="/post" className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>

      <div className='test'>
        <p>What pictures did you take?</p>
      </div>

      <div className="image-upload-container">
        {selectedImages.map((imageUrl, index) => (
          <div key={index} className="rounded-square">
            {/* Add image element with object-fit */}
            <img src={imageUrl} alt="Uploaded" width="125" height="125" style={{ borderRadius: '10%' }} />
          </div>
        ))}

        {/* Empty squares for remaining slots */}
        {Array(MAX_IMAGES - selectedImages.length).fill(null).map((_, index) => (
          <div key={index + selectedImages.length} className="rounded-square"></div>
        ))}
      </div>

      <div className="next-button-container">
        <button className="next-button" onClick={handleAddImage}>
          Add Photos
        </button>
      </div>
      <Link to="/postThree" onClick={() => handleNext('/postThree')}>
        <div className="next-button-container">
          <button className="next-button">Next</button>
        </div>
      </Link>
    </div>
  );
}

export default PostTwo;