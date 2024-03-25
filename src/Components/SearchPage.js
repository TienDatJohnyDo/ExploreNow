import React from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

import { Grid } from '@mui/material';
import SearchCard from './SearchCard';
import postImage from './images/jasper.jpg';


function SearchPage() {
  return (
    <div className="search-container">
      <h1 className="search-header">Where to? </h1>
      {/* <FontAwesomeIcon icon={faBell} className='notification-bell' /> */}
      <div className='search-bar'> 
            <input 
            type="text"
            placeholder="Places, hotels, restaurants..."
            className="text-input"
            />
            <FontAwesomeIcon icon={faSearch} color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
        </div>
      <div className='search-body'>
        <Grid container justify="center" 
          spacing={3} 
          direction="column"
          paddingBlockEnd="0px"
          marginBlockStart="0px"
          style={{ maxHeight: '400px',
                   overflow: 'auto'}}>

            <Grid item> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>


        </Grid>

      </div>
      <h1 style={{position: 'absolute',top: '350px', left:'30px'}}> Locations </h1>
      <div>
      <Grid container justify="center" 
          spacing={3} 
          direction='row'
          paddingBlockEnd="0px"
          marginBlockStart="400px"
          style={{ maxHeight: '400px',
                   overflow: 'auto'}}>

            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={postImage} labelText={'Jasper'}> </SearchCard> </Grid>


        </Grid>

      </div>
    </div>
  );
}

export default SearchPage;