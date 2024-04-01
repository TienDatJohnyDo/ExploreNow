import React from 'react';
import ProfileOthers from '../ProfileOthers';

import danielPic from '../images/daniel.jpg'

function DanielProfile() {

  const profile = {
    pic: danielPic,
    name: "Daniel Morgan",
    bio: "Travel Blogger Collaborations open!",
    postCount: "7",
    followerCount: "1.1 k",
    followingCount: "500",
  };

  return (
    <ProfileOthers profile={profile} />
  );
}

export default DanielProfile;