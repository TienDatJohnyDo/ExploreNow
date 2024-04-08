import React from 'react';
import './styles/search.css';
import SearchBar from "./SearchBar";

import { Grid } from '@mui/material';
import SearchCard from './SearchCard';
import postImage from './images/jasper.jpg';

import jasper from './images/jasper.jpg';
import banff from './images/banff.jpg';
import santorini from './images/santorini.jpg';
import tokyo from './images/Tokyo.jpg';
import paris from './images/paris.jpg';
import seoul from './images/seoul.jpg';

import foodImg from './images/food.jpg'
import trendImg from './images/nyc.jpg'


function SearchPage() {
  return (
    <div className="search-container">
      <h1 className="search-header">Where to?</h1>
      <div className='search-bar'> 
            <SearchBar />
        </div>
      <div className='search-body'>
        <Grid container justify="center" 
          spacing={3} 
          direction="column"
          paddingBlockEnd="0px"
          marginBlockStart="0px"
          style={{ maxHeight: '400px',
                   overflow: 'auto'}}>

            <Grid item> <SearchCard image={trendImg} labelText={'Trending Destinations'} link={"/trending"}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={foodImg} labelText={'Food Destinations'} link={"/foods"}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'???'}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'???'}> </SearchCard> </Grid>
            <Grid item> <SearchCard image={postImage} labelText={'???'}> </SearchCard> </Grid>


        </Grid>

      </div>
      <h1 className="yml-header">You Might Like</h1>
      <div>
      <Grid container justify="center" 
          spacing={3} 
          direction='row'
          paddingBlockEnd="0px"
          marginBlockStart="400px"
          style={{ maxHeight: '380px',
                   overflow: 'auto'}}>

            <Grid item xs={6}> <SearchCard image={jasper} labelText={'Jasper, Canada'} link={"/jasper"}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={banff} labelText={'Banff, Canada'} link={"/banff"}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={seoul} labelText={'Seoul, Korea'} link={"/seoul"}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={paris} labelText={'Paris, France'} link={"/paris"}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={santorini} labelText={'Santorini, Greece'} link={"/santorini"}> </SearchCard> </Grid>
            <Grid item xs={6}> <SearchCard image={tokyo} labelText={'Tokyo, Japan'} link={"/tokyo"}> </SearchCard> </Grid>

        </Grid>

      </div>
    </div>
  );
}

export default SearchPage;