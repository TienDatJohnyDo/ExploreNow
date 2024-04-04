import React from 'react';
import ProfileOthers from '../ProfileOthers';

import danielPic from '../images/daniel.jpg'

import paris from '../images/paris.jpg'
import jasper from '../images/jasper.jpg'
import banff from '../images/banff1.jpg'
import lakeLouise from '../images/lakeLouise.jpg'

function DanielProfile() {

  const profile = {
    pic: danielPic,
    name: "Daniel Morgan",
    bio: "Travel Blogger Collaborations open!",
    postCount: 2,
    followerCount: "1.1 k",
    followingCount: "500",
  };

  const posts = [
    {
      image: paris,
      location: "Paris",
      heartCount: 403,
      commentCount: 192,
      link: '/danielPost',
    },
    {
      image: jasper,
      location: "Jasper",
      heartCount: "1.5 k",
      commentCount: 300,
    }
  ];

  return (
    <ProfileOthers profile={profile} posts={posts}/>
  );
}

export default DanielProfile;