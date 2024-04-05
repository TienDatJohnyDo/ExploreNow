import React from 'react';
import ProfileOthers from '../ProfileOthers';

import nancyPic from '../images/nancy.jpg'

import jasper from '../images/jasper.jpg'
import toronto from '../images/toronto.jpg'
import lakeLouise from '../images/lakeLouise.jpg'

function NancyProfile() {

  const profile = {
    pic: nancyPic,
    name: "Nancy Brown",
    bio: "Travel Blogger Collaborations open!",
    postCount: 3,
    followerCount: "1.1 k",
    followingCount: "500",
  };

  const posts = [
    {
      image: toronto,
      location: "Toronto",
      heartCount: 600,
      commentCount: 123,
      link: '/nancyPost',
      notShowProfile: true,
    },
    {
      image: jasper,
      location: "Jasper",
      heartCount: "1.5 k",
      commentCount: 300,
      notShowProfile: true,
    },
    {
      image: lakeLouise,
      location: "Lake Louise",
      heartCount: "2.2 k",
      commentCount: 500,
      notShowProfile: true,
    }
  ];

  return (
    <ProfileOthers profile={profile} posts={posts} />
  );
}

export default NancyProfile;