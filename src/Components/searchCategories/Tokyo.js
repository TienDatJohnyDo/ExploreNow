import React from 'react';

import SearchCategory from '../SearchCategory';

import aydin from '../images/aydin.jpg'
import rafael from '../images/rafael.jpg'
import lindsey from '../images/lindsey.jpg'
import breanna from '../images/breanna.jpg'
import phillip from '../images/phillip.jpg'

import mainImg from '../images/Tokyo.jpg';
import mejiShrine from '../images/mejiShrine.jpg'
import imperialPalace from '../images/imperialPalace.jpg'
import ghibliMuseum from '../images/ghibliMuseum.jpg'
import shibuyaCrossing from '../images/shibuyaCrossing.jpg'
import yoyogiPark from '../images/yoyogiPark.jpg'



function Tokyo() {

  const title = {
    category: "TOKYO",
    rating: "4.0",
    mainPic: mainImg,
  };

  const posts = [
    {
      profilePic: aydin,
      username: "Aydin",
      image: mejiShrine,
      location: "Meji Shrine",
      heartCount: "92",
      commentCount: 7,
    },
    {
      profilePic: rafael,
      username: "Rafael",
      image: imperialPalace,
      location: "Imperial Palace",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: lindsey,
      username: "Lindsey",
      image: ghibliMuseum,
      location: "Ghibli Museum",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: breanna,
      username: "Breanna",
      image: shibuyaCrossing,
      location: "Shibuya Crossing",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: phillip,
      username: "Phillip",
      image: yoyogiPark,
      location: "Yoyogi Park",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Tokyo;