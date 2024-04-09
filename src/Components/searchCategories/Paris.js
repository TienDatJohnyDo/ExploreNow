import React from 'react';

import SearchCategory from '../SearchCategory';

import leslie from '../images/leslie.jpg'
import joe from '../images/joe.jpg'
import kymani from '../images/kymani.jpg'
import laney from '../images/laney.jpg'
import summer from '../images/summer.jpg'

import mainImg from '../images/paris.jpg';
import catacombs from '../images/catacombs.jpg'
import eiffelTower from '../images/eiffelTower.jpg'
import laPagode from '../images/laPagode.jpg'
import louvre from '../images/louvre.jpg'
import sacreCoeur from '../images/sacreCoeur.jpg'


function Paris() {

  const title = {
    category: "PARIS",
    rating: "4.0",
    mainPic: mainImg,
  };

  const posts = [
    {
      profilePic: leslie,
      username: "Leslie",
      image: catacombs,
      location: "Catacombs",
      heartCount: "92",
      commentCount: 7,
    },
    {
      profilePic: joe,
      username: "Joe",
      image: eiffelTower,
      location: "Eiffel Tower",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: kymani,
      username: "Kymani",
      image: laPagode,
      location: "La Pagode",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: laney,
      username: "Laney",
      image: louvre,
      location: "Louvre",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: summer,
      username: "Summer",
      image: sacreCoeur,
      location: "Sacre Coeur",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Paris;