// Discover.js
import React from 'react';
import { Grid } from '@mui/material';
import './styles/discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import Postcard from './Postcard';

import laurenPic from '../profilePic1.jpg'
import postImage from '../jasper.jpg'

const MyComponent = () => {
  // Define your components' array
  // const components = Array(5) // Change this to the number of components you want
  //   .fill(null)
  //   .map((_, index) => <Grid item><Postcard key={index} /></Grid>);

  const user1 = {
    profilePic: laurenPic,
    username: "Lauren",
  };

  const post1 = {
    image: postImage,
    location: "Banff",
    heartCount: "1.2 k",
    commentCount: 600,
  };

  const user2 = {
    profilePic: laurenPic,
    username: "User 2",
  };

  const post2 = {
    image: postImage,
    location: "Banff",
    heartCount: "1.2 k",
    commentCount: 600,
  };

  const user3 = {
    profilePic: laurenPic,
    username: "User 3",
  };

  const post3 = {
    image: postImage,
    location: "Banff",
    heartCount: "1.2 k",
    commentCount: 600,
  };

  const user4 = {
    profilePic: laurenPic,
    username: "User 4",
  };

  const post4 = {
    image: postImage,
    location: "Banff",
    heartCount: "1.2 k",
    commentCount: 600,
  };

  const user5 = {
    profilePic: laurenPic,
    username: "User 5",
  };

  const post5 = {
    image: postImage,
    location: "Banff",
    heartCount: "1.2 k",
    commentCount: 600,
  };

  return (
    <Grid container justify="center" 
          spacing={10} 
          direction="row"
          paddingBlockEnd="50px"
          marginBlockStart="20px"
          style={{ maxHeight: '750px',
                   overflow: 'auto'}}>

      <Grid item><Postcard key={1} user={user1} post={post1} /></Grid>
      <Grid item><Postcard key={2} user={user2} post={post2} /></Grid>
      <Grid item><Postcard key={3} user={user3} post={post3} /></Grid>
      <Grid item><Postcard key={4} user={user4} post={post4} /></Grid>
      <Grid item><Postcard key={5} user={user5} post={post5} /></Grid>
      {/* {components} */}
    </Grid>
  );
};

function Discover() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Discover</h1>
      <FontAwesomeIcon icon={faBell} className="notification-icon" />
      <div className='posts-container'>
        <MyComponent />
      </div>
    </div>
  );
}

export default Discover;