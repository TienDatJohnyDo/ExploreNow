import React from 'react';
import ProfileOthers from '../ProfileOthers';

import charlesPic from '../images/charles.jpg'


function CharlesProfile() {

  const profile = {
    pic: charlesPic,
    name: "Charles Smith",
    bio: "Travel Blogger Collaborations open!",
    postCount: "1",
    followerCount: "1.1 k",
    followingCount: "500",
  };

  return (
    <ProfileOthers profile={profile} />
  );
}

export default CharlesProfile;