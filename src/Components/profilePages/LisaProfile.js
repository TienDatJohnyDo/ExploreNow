import React from 'react';
import ProfileOthers from '../ProfileOthers';

import lisaPic from '../images/Lisa.jpg'

import jasper from '../images/jasper.jpg'
import santorini from '../images/santorini.jpg'
import lakeLouise from '../images/lakeLouise.jpg'

function LisaProfile() {

  const profile = {
    pic: lisaPic,
    name: "Lisa Williams",
    bio: "Travel Blogger Collaborations open!",
    postCount: 4,
    followerCount: "1.1 k",
    followingCount: "500",
  };

  const posts = [
    {
      image: santorini,
      location: "Santorini",
      heartCount: "1.2 k",
      commentCount: 422,
      link: '/lisaPost',
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

export default LisaProfile;