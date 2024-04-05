import React from 'react';
import ProfileOthers from '../ProfileOthers';

import myPic from '../images/lauren.jpg'

import jasper from '../images/jasper.jpg'
import banff from '../images/banff1.jpg'
import lakeLouise from '../images/lakeLouise.jpg'


function MyProfile() {

    const profile = {
        pic: myPic,
        name: "Lauren Cromwell",
        bio: "Travel Blogger Collaborations open!",
        postCount: 4,
        followerCount: "1.1 k",
        followingCount: "500",
        notShowButtons: true,
    };

    const posts = [
        {
            image: banff,
            location: "Banff",
            heartCount: "92",
            commentCount: 7,
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
    <ProfileOthers profile={profile} posts={posts}/>
  );
}

export default MyProfile;