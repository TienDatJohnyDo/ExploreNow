import React from 'react';

import SearchCategory from '../SearchCategory';

import emilia from '../images/emilia.jpg'
import valeria from '../images/valeria.jpg'
import linda from '../images/linda.jpg'
import jamie from '../images/jamie.jpg'
import beatrice from '../images/beatrice.jpg'

import mainImg from '../images/food.jpg'
import centralLima from '../images/centralLima.jpg'
import quintonil from '../images/quintonil.jpg'
import leDu from '../images/leDu.jpg'
import florilege from '../images/florilege.jpg'
import timRaue from '../images/timRaue.jpg'


function Food() {

  const title = {
    category: "FOODS",
    mainPic: mainImg,
    notShowRating: true,
  };

  const posts = [
    {
      profilePic: emilia,
      username: "Emilia",
      image: centralLima,
      location: "Central Lima",
      heartCount: "92",
      commentCount: 7,
    },
    {
      profilePic: valeria,
      username: "Valeria",
      image: quintonil,
      location: "Quintonil",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: linda,
      username: "Linda",
      image: leDu,
      location: "Le Du",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: jamie,
      username: "Jamie",
      image: florilege,
      location: "Florilège",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: beatrice,
      username: "Beatrice",
      image: timRaue,
      location: "Tim Raue",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Food;