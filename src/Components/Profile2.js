import React, {useState} from 'react';
import { Grid, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'; // Importing the "more" icon
import Postcard from './Postcard';
import laurenPic from './images/lauren.jpg'
import jasper from './images/jasper.jpg'
import banff from './images/banff1.jpg'
import lakeLouise from './images/lakeLouise.jpg'
import SignOutModal from './SignOutModal';
import paris2 from './images/paris2.jpg'


const MyComponent = () => {

  const post0 = {
    profilePic: laurenPic,
    username: "Lauren",
    image: paris2,
    location: "Paris",
    heartCount: "0",
    commentCount: 0,
    notShowProfile: true,
  };

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

      <Grid item><Postcard key={0} post={post0} /></Grid>
      <Grid item><Postcard key={1} post={post1} /></Grid>
      <Grid item><Postcard key={2} post={post2} /></Grid>
      <Grid item><Postcard key={3} post={post3} /></Grid>
    </Grid>
  );
};



function Profile() {
  const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of the menu
  const [openDialog, setOpenDialog] = useState(false); // State for dialog open/close

  // Open menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Open dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
    handleMenuClose(); // Close menu when dialog opens
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Logout function
  const handleSignOut = () => {
    // Perform sign-out here
    localStorage.removeItem('userData');
    // Redirect the user to the sign-in page
    window.location.href = '/login';
  };

  // View saved posts function
  const handleViewSavedPosts = () => {
    console.log("View saved posts");
    window.location.href = '/savedPost';
  };

  return (
    <div className="discover-container">
      <div className="profile-actions">
        <FontAwesomeIcon icon={faEllipsisV} className="more-icon" onClick={handleMenuOpen} />
        {/* Dropdown menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleViewSavedPosts}>View Saved Posts</MenuItem>
          <MenuItem onClick={handleOpenDialog}>Log out</MenuItem>
        </Menu>
      </div>
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
          <p className="stat-number">4</p>
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

      {/* Confirmation dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to log out?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSignOut}>Logout</Button>
        </DialogActions>
      </Dialog>

      <br></br>
      
    </div>
  );
}

export default Profile;