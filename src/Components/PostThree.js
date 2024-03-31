import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/postThree.css';

function PostThree() {
    const [acitveTab, setActiveTab] = useState('/postThree');

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
        <h1 className='discover-label'>POST</h1>

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
        change when routed back to the discover page afer posting*/}
       </div>
    );
}

export default PostThree;