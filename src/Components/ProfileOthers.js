import React, {useState} from 'react';
import { Grid } from '@mui/material';
import './styles/profileOthers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; // Importing the "more" icon
import Postcard from './ProfilePosts';
import laurenPic from './images/lauren.jpg'
import jasper from './images/jasper.jpg'
import banff from './images/banff1.jpg'
import lakeLouise from './images/lakeLouise.jpg'


const MyComponent = () => {

  const post1 = {
    image: banff,
    location: "Banff",
    heartCount: "92",
    commentCount: 7,
  };

  const post2 = {
    image: jasper,
    location: "Jasper",
    heartCount: "1.5 k",
    commentCount: 300,
  };

  const post3 = {
    image: lakeLouise,
    location: "Lake Louise",
    heartCount: "2.2 k",
    commentCount: 500,
  };

  return (
    <Grid container justify="center" 
          margin='auto'
          rowSpacing={7}
          direction="row"
          paddingBlockEnd="50px"
          marginBlockStart="10px"
          style={{ maxHeight: '470px',
                   overflow: 'auto'}}>

      <Grid item><Postcard key={1} post={post1} /></Grid>
      <Grid item><Postcard key={2} post={post2} /></Grid>
      <Grid item><Postcard key={3} post={post3} /></Grid>
    </Grid>
  );
};



function ProfileOthers({profile}) {

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="discover-container">
      <FontAwesomeIcon icon={faEllipsisV} className="o-more-icon" />
      <div className="o-profile-info">
        <div className="o-profile-picture-container">
          <img className="o-profile-picture" alt="profilePic" src={profile.pic} />

        </div>
        <div className="o-profile-text">
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
        </div>
      </div>
      <div className="o-profile-stats-container">
        <div className="o-profile-stat">
          <p className="o-stat-number">{profile.postCount}</p>
          <p className="o-stat-category">Posts</p>
        </div>
        <div className="o-profile-stat">
          <p className="o-stat-number">{profile.followerCount}</p>
          <p className="o-stat-category">Followers</p>
        </div>
        <div className="o-profile-stat">
          <p className="o-stat-number">{profile.followingCount}</p>
          <p className="o-stat-category">Following</p>
        </div>
      </div>
      <div className='o-follow-buttons'>
        <div className="o-fcolumn o-fcolumn-1" onClick={handleClick}>
          {toggle ? 
            <div className="o-fbutton o-follow-button">Follow</div> :
            <div className="o-fbutton o-unfollow-button">Unfollow</div> }
        </div>
        <div className="o-fcolumn o-fcolumn-2">
          <div className="o-fbutton o-msg-button">Message</div>
        </div>
      </div>
      {/* Add in at least 2 Post */}
      <div className='o-posts-container'>
        <MyComponent />
      </div>

      <br></br>
      
    </div>
  );
}

export default ProfileOthers;