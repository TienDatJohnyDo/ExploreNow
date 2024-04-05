import React from 'react';

import SearchCategory from '../SearchCategory';

import laurenPic from '../images/lauren.jpg'
import charlesPic from '../images/charles.jpg'
import lisaPic from '../images/Lisa.jpg'
import nancyPic from '../images/nancy.jpg'
import danielPic from '../images/daniel.jpg'

import mainImg from '../images/nyc.jpg'
import banff1 from '../images/banff1.jpg'
import jasper from '../images/jasper.jpg'
import santorini from '../images/santorini.jpg'
import toronto from '../images/toronto.jpg'
import paris from '../images/paris.jpg'


function Trending() {

  const title = {
    category: "TRENDING",
    mainPic: mainImg,
    notShowRating: true,
  };

  const posts = [
    {
      profilePic: laurenPic,
      username: "Lauren",
      image: banff1,
      location: "Banff",
      heartCount: "92",
      commentCount: 7,
      link: "/laurenPost",
      profileLink: "/profile",
    },
    {
      profilePic: charlesPic,
      username: "Charles",
      image: jasper,
      location: "Jasper",
      heartCount: "374",
      commentCount: 55,
      link: "/charlesPost",
      profileLink: "/charlesProfile",
    },
    {
      profilePic: lisaPic,
      username: "Lisa",
      image: santorini,
      location: "Santorini",
      heartCount: "1,302",
      commentCount: 422,
      link: "/lisaPost",
      profileLink: "/lisaProfile",
    },
    {
      profilePic: nancyPic,
      username: "Nancy",
      image: toronto,
      location: "Toronto",
      heartCount: "600",
      commentCount: 123,
      link: "/nancyPost",
      profileLink: "/nancyProfile",
    },
    {
      profilePic: danielPic,
      username: "Daniel",
      image: paris,
      location: "Paris",
      heartCount: "403",
      commentCount: 192,
      link: "/danielPost",
      profileLink: "/danielProfile",
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Trending;