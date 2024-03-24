import React from "react";
import './styles/postcard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} />

// Image component
const ImageBox = ({ post }) => {
  return (
    <div className="img-box" onClick={() => console.log("Post clicked")}>
        <img className="box-image" alt='postcard' src={post.image} />
        <div className="image-overlay" />
        <div className="location-tag-container">
            <div className="location-tag">
                <FontAwesomeIcon icon={faLocationDot} className="location-icon" style={{color: "#FFD43B",}} />
                <span>{post.location}</span>
            </div>
        </div>
    </div>
    
  );
};

// Bottom Bar component
export const BottomBar = ({ heartCount, commentCount }) => {
    return (
      <div className="bottom-box">
        <div className="bar">
          <div className="bottom-overlap">
            <FontAwesomeIcon icon={faHeart} className='heart-icon' style={{color: "#d34a4a",}} />
            <span>{heartCount}</span>
            <FontAwesomeIcon icon={faComment} className="comment-icon" style={{color: "#74C0FC",}} />
            <span>{commentCount}</span>
          </div>
        </div>
      </div>
    );
};

// Postcard component
const Postcard = ({post}) => {
  
    return (
        <div className="postcard">
            <div className="img-bar" style={{zIndex: 5}}>
                <ImageBox post={post} />
            </div>
            <div className="bar-overlay" style={{zIndex: 10}}>
                <BottomBar heartCount={post.heartCount} commentCount={post.commentCount} />
            </div>
        </div>
    );
  };
  
  // Export the Postcard component
  export default Postcard;