import React, {useState} from 'react';
import { Grid } from '@mui/material';
import './styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; 
import Postcard from './Postcard';
import CharlesPic from './images/charles.jpg'
import SignOutModal from './SignOutModal';
import paris from './images/paris2.jpg'


const MyComponent = () => {


  const post1 = {
    profilePic: CharlesPic,
    username: "Charles",
    image: paris,
    location: "Paris",
    heartCount: "0",
    commentCount: 0,
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
    </Grid>
  );
};



function JamesProfile() {
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const handleOpenSignOutModal = () => {
    setIsSignOutModalOpen(true);
  };

  const handleCloseSignOutModal = () => {
    setIsSignOutModalOpen(false);
  };
  return (
    <div className="discover-container">
      <FontAwesomeIcon icon={faEllipsisV} className="more-icon" onClick={handleOpenSignOutModal} />
      <div className="profile-info">
        <div className="profile-picture-container">
          <img className="profile-picture" alt="profilePic" src={CharlesPic} />

        </div>
        <div className="profile-text">
          <h2>Charles</h2>
          <p>In Paris right now! <br /></p>
        </div>
      </div>
      <div className="profile-stats-container">
        <div className="profile-stat">
          <p className="stat-number">1</p>
          <p className="stat-category">Posts</p>
        </div>
        <div className="profile-stat">
          <p className="stat-number">1.0 k</p>
          <p className="stat-category">Followers</p>
        </div>
        <div className="profile-stat">
          <p className="stat-number">50</p>
          <p className="stat-category">Following</p>
        </div>
      </div>

      {/* Add in at least 2 Post */}
      <div className='posts-container'>
        <MyComponent />
      </div>

      <br></br>
      <SignOutModal isOpen={isSignOutModalOpen} onClose={handleCloseSignOutModal} />
    </div>
  );
}

export default JamesProfile;