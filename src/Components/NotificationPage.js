// Discover.js
import React from 'react';
import { Grid } from '@mui/material';
import './styles/notificationPage.css';
import laurenPic from './images/lauren.jpg'


const CollabBox = ({pic, user, msg}) => {
    return (
      <div className="box">
        <div className="column column-1">
          <img src={pic} alt="Profile" className="profile-picture"/>
        </div>
        <div className="column column-2">
            <div className="rows-wrapper">
                <div className="row row-1">{user}</div>
                <div className="row row-2">{msg}</div>
            </div>
        </div>
        <div className="column column-3">
          <button className="button button-1">Decline</button>
        </div>
        <div className="column column-4">
          <button className="button button-2">Accept</button>
        </div>
      </div>
    );
};

const FollowBox = ({pic, user}) => {
    return (
      <div className="Fbox">
        <div className="Fcolumn Fcolumn-1">
          <img src={pic} alt="FProfile" className="Fprofile-picture"/>
        </div>
        <div className="Fcolumn Fcolumn-2">
            <div className="Frow Frow-1" style={{ marginLeft: '-20px'}}>{user}</div>
        </div>
        <div className="Fcolumn Fcolumn-3">
          <button className="Fbutton Fbutton-1">Decline</button>
        </div>
        <div className="Fcolumn Fcolumn-4">
          <button className="Fbutton Fbutton-2">Accept</button>
        </div>
      </div>
    );
};

const RecentActivity = ({pic, user, msg}) => {
    return (
        <div className="RAbox">
        <div className="RAcolumn RAcolumn-1">
          <img src={pic} alt="Profile" className="RAprofile-picture"/>
        </div>
        <div className="RAcolumn RAcolumn-2">
            <div className="RArows-wrapper">
                <div className="RArow RArow-1">{user}</div>
                <div className="RArow RArow-2">{msg}</div>
            </div>
        </div>
      </div>
    );
};

const RecentActivityGrid = () => {
  return (
    <Grid container justify="center" 
          spacing={1} 
          direction="row"
          marginBlockStart="20px"
          style={{ maxHeight: '170px',
                  overflow: 'auto'}}>
      <Grid item><RecentActivity key={1} pic={laurenPic} user={"User 5"} msg={"Created a new post."}/></Grid>
      <Grid item><RecentActivity key={2} pic={laurenPic} user={"User 7"} msg={"Liked a post."}/></Grid>
      <Grid item><RecentActivity key={3} pic={laurenPic} user={"User 9"} msg={"Commented on a post."}/></Grid>
    </Grid>
  );
};

function NotifcationPage() {

  return (
    <div className="discover-container">
      <div className='collab-container'>
        <h1 className="title">Collab Requests</h1>
        <div className='box1'>
            <CollabBox pic={laurenPic} user={"User 1"} msg={"Jasper Trip"} />
            <CollabBox pic={laurenPic} user={"User 2"} msg={"Banff Trip"} />
        </div>
        <div className="more">More (2)</div>
      </div>
      <div className='follow-container'>
        <h1 className="title">Follow Requests</h1>
        <div className='box1'>
            <FollowBox pic={laurenPic} user={"User 5"} />
            <FollowBox pic={laurenPic} user={"User 9"} />
        </div>
        <div className="more">More (10)</div>
      </div>
      <div className='recent-act-container'>
        <h1 className="title">Recent Activity</h1>
        <RecentActivityGrid />
      </div>
    </div>
  );
}

export default NotifcationPage;