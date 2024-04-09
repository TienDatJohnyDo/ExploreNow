import React from 'react';

import SearchCategory from '../SearchCategory';

import dalton from '../images/dalton.jpg'
import aden from '../images/aden.jpg'
import hayley from '../images/hayley.jpg'
import brody from '../images/brody.jpg'
import yasmine from '../images/yasmine.jpg'

import mainImg from '../images/seoul.jpg';
import hanRiver from '../images/hanRiver.jpg'
import myeongdong from '../images/myeongdong.jpg'
import itaewon from '../images/itaewon.jpg'
import hongdae from '../images/hongdae.jpg'
import bukhansan from '../images/bukhansan.jpg'

function Seoul() {

  const title = {
    category: "SEOUL",
    rating: "4.0",
    mainPic: mainImg,
  };

  const posts = [
    {
      profilePic: dalton,
      username: "Dalton",
      image: hanRiver,
      location: "Han River",
      heartCount: "92",
      commentCount: 7,
      link: "/daltonPost",
      profileLink: "/profile",
    },
    {
      profilePic: aden,
      username: "Aden",
      image: myeongdong,
      location: "Myeongdong",
      heartCount: "374",
      commentCount: 55,
    },
    {
      profilePic: hayley,
      username: "Hayley",
      image: itaewon,
      location: "Itaewon",
      heartCount: "1,302",
      commentCount: 422,
    },
    {
      profilePic: brody,
      username: "Brody",
      image: hongdae,
      location: "Hongdae",
      heartCount: "600",
      commentCount: 123,
    },
    {
      profilePic: yasmine,
      username: "Yasmine",
      image: bukhansan,
      location: "Bukhansan",
      heartCount: "403",
      commentCount: 192,
    },
  ];


  return (
    <SearchCategory title={title} posts={posts}/>
  );
}

export default Seoul;