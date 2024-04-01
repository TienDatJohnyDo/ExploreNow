import React from 'react';
import ProfileOthers from '../ProfileOthers';

import nancyPic from '../images/nancy.jpg'

function NancyProfile() {

  const profile = {
    pic: nancyPic,
    name: "Nancy Brown",
    bio: "Travel Blogger Collaborations open!",
    postCount: "7",
    followerCount: "1.1 k",
    followingCount: "500",
  };

  return (
    <ProfileOthers profile={profile} />
  );
}

export default NancyProfile;