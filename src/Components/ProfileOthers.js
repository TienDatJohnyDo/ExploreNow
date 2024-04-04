import React, {useState} from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles/profileOthers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faArrowLeft} from '@fortawesome/free-solid-svg-icons'; // Importing the "more" icon
import Postcard from './Postcard';


const Posts = ({posts}) => {

  return (
    <Grid container justify="center" 
          margin='auto'
          rowSpacing={6}
          direction="row"
          paddingBlockEnd="50px"
          marginBlockStart="10px"
          style={{ maxHeight: '470px', minHeight: '470px', overflow: 'auto'}}>
        {posts.map((post, index) => (
          <Grid item key={index}>
            <Postcard key={index} post={post} />
          </Grid>
        ))}
    </Grid>
  );
};


function ProfileOthers({profile, posts}) {

  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setToggle(!toggle);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="discover-container">
      <div className='o-top-half fixed-top'>
        <div className='top-tag'>
          <FontAwesomeIcon icon={faArrowLeft} className="o-back-button" style={{color: "#1D4061",}} 
          onClick={goBack}/>
          <FontAwesomeIcon icon={faEllipsisV} className="o-more-icon" />
        </div>
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
        <div className="follow-msg-div">
          {!profile.notShowButtons &&
            <div className='o-follow-buttons'>
              <div className="o-fcolumn o-fcolumn-1" onClick={handleClick}>
                {toggle ? 
                  <div className="o-fbutton o-follow-button">Follow</div> :
                  <div className="o-fbutton o-unfollow-button">Unfollow</div> }
              </div>
              <div className="o-fcolumn o-fcolumn-2">
                <div className="o-fbutton o-msg-button">Message</div>
              </div>
            </div>}
        </div>
      </div>
      {/* Add in at least 2 Post */}
      <div className='o-bottom-half fixed-bottom'>
        <div className='o-posts-container'>
          <Posts posts={posts}/>
        </div>
      </div>
      
    </div>
  );
}

export default ProfileOthers;