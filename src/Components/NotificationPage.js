// Discover.js
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './styles/notificationPage.css';

import laurenPic from './images/lauren.jpg'
import maryPic from './images/mary.jpg'
import jamesPic from './images/james.jpg'
import charlesPic from './images/charles.jpg'
import sarahPic from './images/sarah.jpg'
import zacPic from './images/zac.jpg'
import aden from './images/aden.jpg'
import laney from './images/laney.jpg'
import emilia from './images/emilia.jpg'

const CollabBox = ({pic, user, msg, onClick, boxKey}) => {
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
          <button className="button button-1" onClick={() => onClick(boxKey)}>Decline</button>
        </div>
        <div className="column column-4">
          <button className="button button-2" onClick={() => onClick(boxKey)}>Accept</button>
        </div>
      </div>
    );
};

const FollowBox = ({pic, user, onClick, boxKey}) => {
    return (
      <div className="Fbox">
        <div className="Fcolumn Fcolumn-1">
          <img src={pic} alt="FProfile" className="Fprofile-picture"/>
        </div>
        <div className="Fcolumn Fcolumn-2">
            <div className="Frow Frow-1" style={{ marginLeft: '-20px'}}>{user}</div>
        </div>
        <div className="Fcolumn Fcolumn-3">
          <button className="Fbutton Fbutton-1" onClick={() => onClick(boxKey)}>Decline</button>
        </div>
        <div className="Fcolumn Fcolumn-4">
          <button className="Fbutton Fbutton-2" onClick={() => onClick(boxKey)}>Accept</button>
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
          style={{ maxHeight: '200px',
                  overflow: 'auto'}}>
      <Grid item><RecentActivity key={1} pic={charlesPic} user={"Charles"} msg={"Created a new post."}/></Grid>
      <Grid item><RecentActivity key={2} pic={jamesPic} user={"James"} msg={"Liked your post."}/></Grid>
      <Grid item><RecentActivity key={3} pic={maryPic} user={"Mary"} msg={"Commented on your post."}/></Grid>
    </Grid>
  );
};

function NotifcationPage() {

  const [followBoxes, setFollowBoxes] = useState([
    <FollowBox key={1} pic={sarahPic} user={"Sarah"} />,
    <FollowBox key={2} pic={zacPic} user={"Zac"} />,
    <FollowBox key={3} pic={emilia} user={"Emilia"} />,
    // Add more FollowBox components here
  ]);
 
  const [collabBoxes, setCollabBoxes] = useState([
    <CollabBox key={1} pic={maryPic} user={"Mary"} msg={"Jasper Trip"} />,
    <CollabBox key={2} pic={aden} user={"Aden"} msg={"Banff Trip"} />,
    <CollabBox key={3} pic={laney} user={"Laney"} msg={"Louvre Trip"} />
    // Add more FollowBox components here
  ]);

  const handleFollowClick = (key) => {
    setFollowBoxes((prevBoxes) => prevBoxes.filter((box) => box.key!== key));
  };

  const handleCollabClick = (key) => {
    setCollabBoxes((prevBoxes) => prevBoxes.filter((box) => box.key!== key));
  };

  return (
    <div className="discover-container">
      <div className='collab-container'>
        <h1 className="title">Collab Requests</h1>
        <div className='box1'>
            {/* <CollabBox pic={laurenPic} user={"User 1"} msg={"Jasper Trip"} />
            <CollabBox pic={laurenPic} user={"User 2"} msg={"Banff Trip"} /> */}
            {collabBoxes.map((box) => (
            <CollabBox
              key={box.key}
              pic={box.props.pic}
              user={box.props.user}
              msg={box.props.msg}
              onClick={handleCollabClick}
              boxKey={box.key}
            />
          ))}
        </div>
      </div>
      {collabBoxes.length > 2 && <div className="more">More ({collabBoxes.length-2})</div>}
      {collabBoxes.length == 0 && <div className="no-collab">You have no collab requests.</div>}
      <div className='follow-container'>
        <h1 className="title">Follow Requests</h1>
        <div className='box1'>
            {/* <FollowBox pic={sarahPic} user={"Sarah"} />
            <FollowBox pic={zacPic} user={"Zac"} /> */}
            {followBoxes.map((box) => (
            <FollowBox
              key={box.key}
              pic={box.props.pic}
              user={box.props.user}
              onClick={handleFollowClick}
              boxKey={box.key}
            />
          ))}
        </div>
      </div>
      {followBoxes.length > 2 && <div className="FRmore">More ({followBoxes.length-2})</div>}
      {followBoxes.length == 0 && <div className="no-follow">You have no follow requests.</div>}
      <div className='recent-act-container'>
        <h1 className="title">Recent Activity</h1>
        <RecentActivityGrid />
      </div>
    </div>
  );
}

export default NotifcationPage;