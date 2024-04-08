import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/postThree.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the back arrow icon

function PostThree() {
    const [activeTab, setActiveTab] = useState('/postThree');

    const handleNext = (tab) => {
        setActiveTab(tab);
    }

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const [rating, setRating] = useState(0);

    const handleStarClick = (selectedRating) => {
      setRating(selectedRating);
    };

    return (
        <div className='discover-container'>
            {/* Back Arrow */}
            <Link to="/PostTwo" className="back-arrow">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>

            {/* Banner */}
            <div className='banner'>
                <div className='banner-content'>
                    <span>Hey Lauren! <br></br></span>
                    <span>Share your journey</span>
                </div>
            </div>
            
           

            <div className='desc-header'>
                <p>What did you think of the trip?</p>
            </div>

            <div className="desc-input-container">
                <textarea
                    className="desc-input"
                    value={text}
                    onChange={handleChange}
                    placeholder="Give us a brief description of the trip..."
                />
            </div>
            <div className="star-rating-container">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                    key={star}
                    className={star <= rating ? 'star-filled' : 'star-empty'}
                    onClick={() => handleStarClick(star)}
                    >
                    &#9733;
                    </span>
                ))}
            </div>

            <Link to="/discover" onClick={() => handleNext('/discover')}>
                <div className="next-button-container">
                    <button className="next-button">Post</button>
                </div>
            </Link>
            {/* Potential issue: the outline of the nav bar does not 
            change when routed back to the discover page after posting*/}
        </div>
    );
}

export default PostThree;