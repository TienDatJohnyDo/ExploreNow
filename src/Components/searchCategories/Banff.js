import React from 'react';

import SearchCategory from '../SearchCategory';

import kaden from '../images/kaden.jpg'
import amira from '../images/amira.jpg'
import cullen from '../images/cullen.jpg'
import maggie from '../images/maggie.jpg'
import kelvin from '../images/kelvin.jpg'

import mainImg from '../images/banff.jpg';
import moraineLake from '../images/moraineLake.jpg'
import littleBeehiveHike from '../images/littleBeehiveHike.jpg'
import bowLake from '../images/bowLake.jpg'
import athabascaGlacier from '../images/athabascaGlacier.jpg'
import upperHotSprings from '../images/upperHotSprings.jpg'

import trendImg from '../images/nyc.jpg'

function Banff() {

  const title = {
    category: "BANFF",
    rating: "4.0",
    mainPic: mainImg,
  };

  const posts = [
    {
      profilePic: kaden,
      username: "Kaden",
      image: moraineLake,
      location: "Moraine Lake",
      heartCount: "92",
      commentCount: 7,
    },
    {
      profilePic: amira,
      username: "Amira",
      image: littleBeehiveHike,
      location: "Little Beehive Hike",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: cullen,
      username: "Cullen",
      image: bowLake,
      location: "Bow Lake",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: maggie,
      username: "Maggie",
      image: athabascaGlacier,
      location: "Athabasca Glacier",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: kelvin,
      username: "Kelvin",
      image: upperHotSprings,
      location: "Upper Hot Springs",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Banff;