// Discover.js
import React from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles/searchCategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Postcard from './Postcard';

const Posts = ({posts}) => {

    return (
      <Grid container justify="center" 
            spacing={10} 
            direction="row"
            paddingBlockEnd="200px"
            marginBlockStart="20px"
            style={{ maxHeight: '650px', overflow: 'auto'}}>
        {posts.map((post, index) => (
          <Grid item key={index}>
            <Postcard key={index} post={post} />
          </Grid>
        ))}
      </Grid>
    );
  };


function SearchCategory({title, posts}) {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="searchC-container">
            <div className='SC-top'>
                <div className='SC-main-img-box'>
                    <img className="SC-main-image" alt='main' src={title.mainPic} />   
                    <div className="SC-image-filter" />
                </div>
                <div className="SC-overimage-container">
                    <div className="SC-bookmark-tag">
                        <FontAwesomeIcon icon={faArrowLeft} className="SC-back-button" style={{color: "#FFFFFF",}} 
                        onClick={goBack}/>
                    </div>
                    <div className="SC-location">
                        <span>{title.category}</span>
                    </div>
                    {!title.notShowRating &&
                    <div className="SC-rating-tag">
                        <div className="SC-rating-box">
                            <div className="SC-rectangle">
                                <span>{title.rating}</span>
                                <FontAwesomeIcon icon={faStar} className="SC-star-icon" style={{color: "#F4BA23",}} />
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='SC-bottom'>
                <div className='SC-posts-container'>
                    <Posts posts={posts}/>
                </div>
            </div>
        </div>
    );
}

export default SearchCategory;