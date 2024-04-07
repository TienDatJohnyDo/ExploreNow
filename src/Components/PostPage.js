// Discover.js
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './styles/postPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faStar, faXmark, faCaretLeft, faCaretRight, faArrowLeft, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import collabIcon from './images/collabIcon.png'


export const UserProfile = ({ post }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="profile-box" >
            <Link to={post.profileLink}>
                <div className="user">
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <img className="ellipse" alt="Ellipse" src={post.profilePic} />
                        <div className="text-wrapper">{post.username}</div>
                    </div>
                </div>
            </Link>
            <div className="collab" onClick={() => setOpen(true)}>
                <div className="collab-group">
                    <div className="rectangle2" />
                    <img className="ellipse2" alt="Ellipse2" src={collabIcon} />
                    <div className="text-wrapper2">Collaborators</div>
                </div>
            </div>
            {open ? <Popup post ={post} closePopup={() => setOpen(false)} /> : null}
        </div>
    );
};

const HomePage = ({ post }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className='home-page'>
            <div className='photos-box'>
                <div className="h-column h-column-1">
                    <div className="h-rows-wrapper">
                        <img className="h-row h-row-1" alt='first' src={post.images[0]} onClick={() => setOpen(true)}/>   
                        <img className="h-row h-row-2" alt='second' src={post.images[1]} onClick={() => setOpen(true)}/>
                    </div>
                </div>
                <div className="h-column h-column-2">
                    <img className="more-image" alt='more' src={post.images[2]} />  
                    <div className="more-image-filter" />
                    <span>+{post.images.length-2}</span>
                    <div className='empty' onClick={() => setOpen(true)}/>   
                </div>
            </div>
            <div className='description-tag'>
                {post.date}
                {post.description}
            </div>
            {open ? <ImagePopup images={post.images} closePopup={() => setOpen(false)} /> : null}
        </div>
    );
};
  
const Comments = ({pic, user, msg}) => {
    return (
        <div className="C-box">
            <div className="C-column C-column-1">
                <img src={pic} alt="C-Profile" className="C-profile-picture"/>
            </div>
            <div className="C-column C-column-2">
                <div className="C-rows-wrapper">
                    <div className="C-row C-row-1">{user}</div>
                    <div className="C-row C-row-2">{msg}</div>
                </div>
            </div>
        </div>
    );
};

const CommentsGrid = ({post}) => {
    
    return (
        <Grid container justify="center" 
            spacing={1} 
            direction="row"
            marginBlockStart="20px"
            style={{ maxHeight: '320px',
                    overflow: 'auto'}}>
            {post.commentPic.map((pic, index) => (
                <Grid item key={index}><Comments 
                    pic={pic} 
                    user={post.commentUser[index]} 
                    msg={post.commentMsg[index]}
                /></Grid>
            ))}
        </Grid>
    );
};

const CommentsPage = ({post}) => {
    return (
        <div className='comments-page'>
            <CommentsGrid post={post}/>
            <div className='comment-text-box'>
                <input 
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input"
                />
                <FontAwesomeIcon icon={faArrowCircleUp} className="enter-icon" color="#1D4061" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
            </div>
        </div>
    );
};

const CollabUsers = ({user, pic}) => {
    return (
        <div className="Cbox">
            <div className="Ccolumn Ccolumn-1">
                <img src={pic} alt="CProfile" className="Cprofile-picture"/>
            </div>
            <div className="Ccolumn Ccolumn-2">
                <div className="Crow Crow-1">{user}</div>
            </div>
        </div>
    );
};

const CollabsGrid = ({post}) => {
    
    return (
        <Grid container 
            justify="center" 
            spacing={0.5} 
            direction="row"
            style={{ maxHeight: '180px',
                    overflowY: 'auto'}}>
            {post.collabs.map((user, index) => (
                <Grid item key={index}><CollabUsers 
                    pic={post.collabPics[index]} 
                    user={user}
                /></Grid>
            ))}
        </Grid>
    );
};

export const Popup = ({ post, closePopup }) => {
    return (
        <div className="popup-container">
            <div className="popup-body">
                <div className="close" onClick={closePopup}>
                    <FontAwesomeIcon icon={faXmark} className="X-icon" style={{color: "#1D4061",}} />
                </div>
                <div className='collabTitle'>Collaborators</div>
                <div className='collabList'>
                    <CollabsGrid post={post} />
                </div>
            </div>
        </div>
    );
};

const ImagePopup = ({ images, closePopup }) => {
    return (
        <div className="i-popup-container">
            <div className="i-popup-body">
                <div className="i-close" onClick={closePopup}>
                    <FontAwesomeIcon icon={faXmark} className="i-X-icon" style={{color: "#1D4061",}} />
                </div>
                <div className='top-gap'/>
                <ImageGallery images={images} />
            </div>
        </div>
    );
};

const ImageGallery = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const onNext = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };
    
    const onPrev = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };
  
    return (
        <div className="image-gallery">
            <div className='image-container'>
                <img src={images[currentImage]} alt="" className="image-gallery-image" />
            </div>
            <ImageCounter
                currentImage={currentImage}
                totalImages={images.length}
                onNext={onNext}
                onPrev={onPrev}
            />
        </div>
    );
};

const ImageCounter = ({ currentImage, totalImages, onNext, onPrev }) => {
    return (
        <div className="image-counter">
            <button className="nav-btn" onClick={onPrev}>
                <FontAwesomeIcon icon={faCaretLeft} className="left-arrow" />
            </button>
            <div className="image-counter-text">
                {currentImage + 1}/{totalImages}
            </div>
            <button className="nav-btn" onClick={onNext}>
                <FontAwesomeIcon icon={faCaretRight} className="right-arrow" /> 
            </button>
        </div>
    );
};

function PostPage({post}) {

    const [isBookmarkSelected, setBookmarkSelected] = useState(false);
    const [isLikeSelected, setLikeSelected] = useState(false);
    const [selectedPage, setSelectedPage] = useState('HomePage');
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="postpage-container">
            <div className='top'>
                <div className='main-img-box'>
                    <img className="main-image" alt='main' src={post.images[0]} />   
                    <div className="image-filter" />
                </div>
                <div className="overimage-container">
                    <div className="bookmark-tag">
                        <FontAwesomeIcon icon={faArrowLeft} className="back-button" style={{color: "#FFFFFF",}} 
                        onClick={goBack}/>
                        <FontAwesomeIcon icon={faBookmark} className={`bookmark-icon ${isBookmarkSelected ? 'selected' : ''}`}
                        style={{ color: isBookmarkSelected ? '#F4BA23' : '#FFFFFF' }}
                        onClick={() => setBookmarkSelected(!isBookmarkSelected)}
                        />
                    </div>
                    <div className="location">
                        <span>{post.location}</span>
                    </div>
                    <div className="rating-tag">
                        <div className="rating-box">
                            <div className="rectangle">
                                <span>{post.rating}</span>
                                <FontAwesomeIcon icon={faStar} className="star-icon" style={{color: "#F4BA23",}} />
                            </div>
                        </div>
                    </div>
                    <div className="like-tag">
                        <FontAwesomeIcon icon={faHeart} className={`like-icon ${isLikeSelected ? 'selected' : ''}`}
                        style={{ color: isLikeSelected ? '#DB5C5C' : '#FFFFFF' }}
                        onClick={() => setLikeSelected(!isLikeSelected)}
                        />
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className="user-overlay" style={{zIndex: 10}}>
                    <UserProfile post={post}/>
                </div>
                <div className="bottom-main" style={{zIndex: 10}}>
                    <div className="row-1 column-1">
                        <div className={`b ${selectedPage === 'HomePage' ? 'b-selected' : ''}`}
                            onClick={() => setSelectedPage(selectedPage === 'CommentsPage' ? 'HomePage' : 'CommentsPage')}>
                            Home
                        </div>
                    </div>
                    <div className="row-1 column-2">
                        <div className={`b ${selectedPage === 'CommentsPage' ? 'b-selected' : ''}`}
                            onClick={() => setSelectedPage(selectedPage === 'HomePage' ? 'CommentsPage' : 'HomePage')}>
                            Comments
                        </div>
                    </div>
                    <div className='contents'>
                        {selectedPage === 'HomePage' && <HomePage post={post}/>}
                        {selectedPage === 'CommentsPage' && <CommentsPage post={post} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;