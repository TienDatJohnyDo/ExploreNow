import React from 'react';
import { Grid } from '@mui/material';
import './styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; // Importing the "more" icon
import Postcard from './Postcard';
import laurenPic from './images/lauren.jpg'
import jasper from './images/jasper.jpg'
import banff from './images/banff1.jpg'
import lakeLouise from './images/lakeLouise.jpg'


const MyComponent = () => {

  const post1 = {
    profilePic: laurenPic,
    username: "Lauren",
    image: banff,
    location: "Banff",
    heartCount: "92",
    commentCount: 7,
    notShowProfile: true,
  };

  const post2 = {
    profilePic: laurenPic,
    username: "User 2",
    image: jasper,
    location: "Jasper",
    heartCount: "1.5 k",
    commentCount: 300,
    notShowProfile: true,
  };

  const post3 = {
    profilePic: laurenPic,
    username: "User 3",
    image: lakeLouise,
    location: "Lake Louise",
    heartCount: "2.2 k",
    commentCount: 500,
    notShowProfile: true,
  };

  return (
    <Grid container justify="center" 
          margin='auto'
          rowSpacing={7}
          direction="row"
          paddingBlockEnd="50px"
          marginBlockStart="10px"
          style={{ maxHeight: '500px',
                   overflow: 'auto'}}>

      <Grid item><Postcard key={1} post={post1} /></Grid>
      <Grid item><Postcard key={2} post={post2} /></Grid>
      <Grid item><Postcard key={3} post={post3} /></Grid>
    </Grid>
  );
};



function Profile() {
  return (
    <div className="discover-container">
      <FontAwesomeIcon icon={faEllipsisV} className="more-icon" />
      <div className="profile-info">
        <div className="profile-picture-container">
          <img className="profile-picture" alt="profilePic" src={laurenPic} />

        </div>
        <div className="profile-text">
          <h2>Lauren Cromwell</h2>
          <p>Travel Blogger <br />Collaborations open!</p>
        </div>
      </div>
      <div className="profile-stats-container">
        <div className="profile-stat">
          <p className="stat-number">3</p>
          <p className="stat-category">Posts</p>
        </div>
        <div className="profile-stat">
          <p className="stat-number">1.1 k</p>
          <p className="stat-category">Followers</p>
        </div>
        <div className="profile-stat">
          <p className="stat-number">500</p>
          <p className="stat-category">Following</p>
        </div>
      </div>

      {/* Add in at least 2 Post */}
      <div className='posts-container'>
        <MyComponent />
      </div>

      <br></br>
      
    </div>
  );
}

export default Profile;