// Discover.js
import React, { useState } from 'react';
import { Grid, colors } from '@mui/material';
import {Link} from 'react-router-dom';
import './styles/postPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faStar, faXmark} from '@fortawesome/free-solid-svg-icons';

import laurenPic from './images/lauren.jpg'
import michaelPic from './images/michael.jpg'
import maryPic from './images/mary.jpg'
import jamesPic from './images/james.jpg'
import robertPic from './images/robert.jpg'
import lindaPic from './images/linda.jpg'
import sarahPic from './images/sarah.jpg'
import zacPic from './images/zac.jpg'

import collabIcon from './images/collabIcon.png'
import postImage from './images/jasper.jpg'
import topImg from './images/banff1.jpg'
import img1 from './images/banff1.jpg'
import img2 from './images/banff.jpg'



export const UserProfile = ({ post }) => {

    const [open, setOpen] = useState(false);

    return (
      <div className="profile-box" onClick={() => console.log("User clicked")}>
        <div className="user">
          <div className="overlap-group">
            <div className="rectangle" />
            <img className="ellipse" alt="Ellipse" src={post.profilePic} />
            <div className="text-wrapper">{post.username}</div>
          </div>
        </div>
        <div className="collab" onClick={() => setOpen(true)}>
          <div className="collab-group">
            <div className="rectangle2" />
            <img className="ellipse2" alt="Ellipse2" src={collabIcon} />
            <div className="text-wrapper2">Collaborators</div>
          </div>
        </div>
        {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
      </div>
    );
};


const HomePage = () => {

    return (
        <div className='home-page'>
            <div className='photos-box'>
                <div className="h-column h-column-1">
                    <div className="h-rows-wrapper">
                        <img className="h-row h-row-1" alt='first' src={img1} />   
                        <img className="h-row h-row-2" alt='second' src={img2} />
                    </div>
                </div>
                <div className="h-column h-column-2">
                    <img className="more-image" alt='more' src={img1} />  
                    <div className="more-image-filter" />
                    <span>8+</span>
                    <div className='empty'/>   
                </div>
            </div>
            <div className='description-tag'>
                <h4>16/07/2023</h4>
                <p>During my unforgettable trip to Banff National Park, 
                    I reveled in the glassy turquoise lakes, marveled at 
                    abundant wildlife, and stood in awe of the majestic 
                    Canadian Rockies—nature’s pristine masterpiece!  </p>
            </div>
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

const CommentsGrid = () => {
  return (
    <Grid container justify="center" 
          spacing={1} 
          direction="row"
          marginBlockStart="20px"
          style={{ maxHeight: '320px',
                  overflow: 'auto'}}>
      <Grid item><Comments key={1} pic={maryPic} user={"Mary"} msg={"This place was wonderful!"}/></Grid>
      <Grid item><Comments key={2} pic={jamesPic} user={"James"} msg={"Nicee"}/></Grid>
      <Grid item><Comments key={3} pic={michaelPic} user={"Michael"} msg={"Photos turned out great"}/></Grid>
      <Grid item><Comments key={4} pic={robertPic} user={"Robert"} msg={"Can't wait to go there!"}/></Grid>
      <Grid item><Comments key={5} pic={lindaPic} user={"Linda"} msg={"So pretty"}/></Grid>
      <Grid item><Comments key={6} pic={sarahPic} user={"Sarah"} msg={"Added to my bucket list!"}/></Grid>
      <Grid item><Comments key={7} pic={zacPic} user={"Zac"} msg={"Hehahah"}/></Grid>
    </Grid>
  );
};

const CommentsPage = () => {
    return (
        <div className='comments-page'>
            <CommentsGrid />
            <div className='comment-text-box'>
                <input 
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input"
                />
            </div>
        </div>
    );
};

export const Popup = ({ text, closePopup }) => {
    return (
      <div className="popup-container">
       <div className="popup-body">
        <div className="close" onClick={closePopup}>
            <FontAwesomeIcon icon={faXmark} className="X-icon" style={{color: "#1D4061",}} />
        </div>
        <div className='collabTitle'>Collaborators</div>
        <div className='collabList'>
            <CollabUsers pic={jamesPic} user={"James"}/>
            <CollabUsers pic={maryPic} user={"Mary"}/>
            <CollabUsers pic={michaelPic} user={"Michael"}/>
        </div>
       </div>
      </div>
    );
};

const CollabUsers = ({pic, user}) => {
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

function PostPage() {

    const post = {
        profilePic: laurenPic,
        username: "Lauren",
        image: postImage,
        location: "Banff",
        heartCount: "1.2 k",
        commentCount: 600,
    };

    const [isBookmarkSelected, setBookmarkSelected] = useState(false);
    const [isLikeSelected, setLikeSelected] = useState(false);
    const [selectedPage, setSelectedPage] = useState('HomePage');

    return (
        <div className="postpage-container">
            <div className='top'>
                <div className='main-img-box'>
                    <img className="main-image" alt='main' src={topImg} />   
                    <div className="image-filter" />
                </div>
                <div className="overimage-container">
                    <div className="bookmark-tag">
                        <FontAwesomeIcon icon={faBookmark} className={`bookmark-icon ${isBookmarkSelected ? 'selected' : ''}`}
                        style={{ color: isBookmarkSelected ? '#F4BA23' : '#FFFFFF' }}
                        onClick={() => setBookmarkSelected(!isBookmarkSelected)}
                        />
                    </div>
                    <div className="location">
                        <span>BANFF</span>
                    </div>
                    <div className="rating-tag">
                        <div className="rating-box">
                            <div className="rectangle">
                                <span>4.5</span>
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
                <div className="bottom-main" style={{zIndex: 5}}>
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
                        {selectedPage === 'HomePage' && <HomePage />}
                        {selectedPage === 'CommentsPage' && <CommentsPage />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;