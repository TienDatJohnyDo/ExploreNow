// SavedPosts.js
import React from 'react';
import { Grid } from '@mui/material';
import './styles/discover.css';


import Postcard from './Postcard';

import laurenPic from './images/lauren.jpg'
import amiraPic from './images/amira.jpg'
import maryPic from './images/mary.jpg'
import jamesPic from './images/james.jpg'
import phillipPic from './images/phillip.jpg'
import banffImage from './images/jasper.jpg'
import torontoImage from './images/toronto.jpg'
import nyImage from './images/nyc.jpg'
import tokyoImage from './images/Tokyo.jpg'
import parisImage from './images/paris.jpg'

const MyComponent = () => {

  const post1 = {
    profilePic: laurenPic,
    username: "Lauren",
    image: banffImage,
    location: "Banff",
    heartCount: "1.2 k",
    commentCount: 600,
  };

  const post2 = {
    profilePic: amiraPic,
    username: "Amira",
    image: torontoImage,
    location: "Toronto",
    heartCount: "1.5 k",
    commentCount: 250,
  };

  const post3 = {
    profilePic: jamesPic,
    username: "James",
    image: tokyoImage,
    location: "Tokyo",
    heartCount: "1.7 k",
    commentCount: 100,
  };

  const post4 = {
    profilePic: maryPic,
    username: "Mary",
    image: nyImage,
    location: "New York",
    heartCount: "2.5 k",
    commentCount: 800,
  };

  const post5 = {
    profilePic: phillipPic,
    username: "Phillip",
    image: parisImage,
    location: "Paris",
    heartCount: "5.5 k",
    commentCount: 300,
  };

  return (
    <Grid container justify="center" 
          spacing={10} 
          direction="row"
          paddingBlockEnd="50px"
          marginBlockStart="20px"
          style={{ maxHeight: '750px',
                   overflow: 'auto'}}>

      <Grid item><Postcard key={1} post={post5} /></Grid>
      <Grid item><Postcard key={2} post={post2} /></Grid>
      <Grid item><Postcard key={3} post={post3} /></Grid>
      <Grid item><Postcard key={4} post={post4} /></Grid>
      <Grid item><Postcard key={5} post={post1} /></Grid>
      {/* {components} */}
    </Grid>
  );
};

function Discover() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Saved Posts</h1>
      <div className='posts-container'>
        <MyComponent />
      </div>
    </div>
  );
}

export default Discover;