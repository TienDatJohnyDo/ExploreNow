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

    

    return (
       <div className='discover-container'>
        <h1 className='discover-label'>POST</h1>

        <div className="text-input-container">
            <textarea
                className="text-input"
                value={text}
                onChange={handleChange}
                placeholder="Type here..."
            />
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