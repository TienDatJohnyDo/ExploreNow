import React from 'react';

import SearchCategory from '../SearchCategory';

import denisse from '../images/denisse.jpg'
import charlotte from '../images/charlotte.jpg'
import audrina from '../images/audrina.jpg'
import marshall from '../images/marshall.jpg'
import conner from '../images/conner.jpg'


import columbiaIceField from '../images/columbiaIceField.jpg'
import maligneLake from '../images/maligneLake.jpg'
import athabascaFalls from '../images/athabascaFalls.jpg'
import pyramidLake from '../images/pyramidLake.jpg'
import jasperSkyTram from '../images/jasperSkyTram.jpg'

import mainImg from '../images/jasper.jpg';



function Jasper() {

  const title = {
    category: "JASPER",
    rating: "4.0",
    mainPic: mainImg,
  };

  const posts = [
    {
      profilePic: denisse,
      username: "Denisse",
      image: columbiaIceField,
      location: "Columbia Icefield",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: charlotte,
      username: "Charlotte",
      image: maligneLake,
      location: "Maligne Lake",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: audrina,
      username: "Audrina",
      image: athabascaFalls,
      location: "Athabasca Falls",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: marshall,
      username: "Marshall",
      image: pyramidLake,
      location: "Pyramid Lake",
      heartCount: "403",
      commentCount: 192,
    },
    {
      profilePic: conner,
      username: "Conner",
      image: jasperSkyTram,
      location: "Jasper SkyTram",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Jasper;