import React from 'react';

import SearchCategory from '../SearchCategory';

import brady from '../images/brady.jpg'
import caitlin from '../images/caitlin.jpg'
import gianna from '../images/gianna.jpg'
import luz from '../images/luz.jpg'
import messiah from '../images/messiah.jpg'

import mainImg from '../images/santorini.jpg';
import oia from '../images/oia.jpg'
import redBeach from '../images/redBeach.jpg'
import ammoudiBay from '../images/ammoudiBay.jpg'
import theCaldera from '../images/theCaldera.jpg'
import santoWines from '../images/santoWines.jpg'

function Santorini() {

  const title = {
    category: "SANTORINI",
    rating: "4.0",
    mainPic: mainImg,
  };

  const posts = [
    {
      profilePic: brady,
      username: "Brady",
      image: oia,
      location: "Oia",
      heartCount: "92",
      commentCount: 7,
    },
    {
      profilePic: caitlin,
      username: "Caitlin",
      image: redBeach,
      location: "Red Beach",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: gianna,
      username: "Gianna",
      image: ammoudiBay ,
      location: "Ammoudi Bay",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: luz,
      username: "Luz",
      image: theCaldera,
      location: "The Caldera",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: messiah,
      username: "Messiah",
      image: santoWines,
      location: "Santo Wines",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Santorini;