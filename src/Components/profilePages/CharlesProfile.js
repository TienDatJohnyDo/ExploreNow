import React from 'react';
import {Link} from 'react-router-dom';

import ProfileOthers from '../ProfileOthers';

import charlesPic from '../images/charles.jpg'

import jasper from '../images/jasper.jpg'
import banff from '../images/banff1.jpg'
import lakeLouise from '../images/lakeLouise.jpg'


function CharlesProfile() {

  const profile = {
    pic: charlesPic,
    name: "Charles Smith",
    bio: "Travel Blogger Collaborations open!",
    postCount: "1",
    followerCount: "350",
    followingCount: "250",
  };

  const posts = [
    {
      image: jasper,
      location: "Jasper",
      heartCount: "374",
      commentCount: 55,
      link: "/charlesPost",
      notShowProfile: true,
    }
  ];


  return (
    <ProfileOthers profile={profile} posts={posts}/>
  );
}

export default CharlesProfile;