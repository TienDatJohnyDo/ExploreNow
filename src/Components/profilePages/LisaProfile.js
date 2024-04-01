import React from 'react';
import ProfileOthers from '../ProfileOthers';

import lisaPic from '../images/Lisa.jpg'

function LisaProfile() {

  const profile = {
    pic: lisaPic,
    name: "Lisa Williams",
    bio: "Travel Blogger Collaborations open!",
    postCount: "7",
    followerCount: "1.1 k",
    followingCount: "500",
  };

  return (
    <ProfileOthers profile={profile} />
  );
}

export default LisaProfile;