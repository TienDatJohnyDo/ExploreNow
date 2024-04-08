// Discover.js
import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './styles/discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import Postcard from './Postcard';

import laurenPic from './images/lauren.jpg';
import charlesPic from './images/charles.jpg';
import lisaPic from './images/Lisa.jpg';
import nancyPic from './images/nancy.jpg';
import danielPic from './images/daniel.jpg';

import banff1 from './images/banff1.jpg';
import jasper from './images/jasper.jpg';
import santorini from './images/santorini.jpg';
import toronto from './images/toronto.jpg';
import paris from './images/paris.jpg';

const MyComponent = () => {
  const post1 = {
    profilePic: laurenPic,
    username: "Lauren",
    image: banff1,
    location: "Banff",
    heartCount: "92",
    commentCount: 7,
    link: "/laurenPost",
    profileLink: "/profile",
  };

  const post2 = {
    profilePic: charlesPic,
    username: "Charles",
    image: jasper,
    location: "Jasper",
    heartCount: "374",
    commentCount: 55,
    link: "/charlesPost",
    profileLink: "/charlesProfile",
  };

  const post3 = {
    profilePic: lisaPic,
    username: "Lisa",
    image: santorini,
    location: "Santorini",
    heartCount: "1,302",
    commentCount: 422,
    link: "/lisaPost",
    profileLink: "/lisaProfile",
  };

  const post4 = {
    profilePic: nancyPic,
    username: "Nancy",
    image: toronto,
    location: "Toronto",
    heartCount: "600",
    commentCount: 123,
    link: "/nancyPost",
    profileLink: "/nancyProfile",
  };

  const post5 = {
    profilePic: danielPic,
    username: "Daniel",
    image: paris,
    location: "Paris",
    heartCount: "403",
    commentCount: 192,
    link: "/danielPost",
    profileLink: "/danielProfile",
  };

  return (
    <Grid container justify="center"
      spacing={10}
      direction="row"
      paddingBlockEnd="50px"
      marginBlockStart="20px"
      style={{ maxHeight: '750px', overflow: 'auto' }}>

      <Grid item><Postcard key={1} post={post1} /></Grid>
      <Grid item><Postcard key={2} post={post2} /></Grid>
      <Grid item><Postcard key={3} post={post3} /></Grid>
      <Grid item><Postcard key={4} post={post4} /></Grid>
      <Grid item><Postcard key={5} post={post5} /></Grid>
    </Grid>
  );
};

function Discover() {
  return (
    <div className="discover-container">
      <h1 className="discover-label">Discover</h1>
      <div className='noti-button' onClick={(e) => e.stopPropagation()}> {/* Prevent click event propagation */}
        <FontAwesomeIcon icon={faBell} className="notification-icon" size='lg' />
      </div>
      <div className='posts-container'>
        <MyComponent />
      </div>
    </div>
  );
}

export default Discover;