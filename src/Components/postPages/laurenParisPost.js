// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import laurenPic from '../images/lauren.jpg'
import charlesPic from '../images/charles.jpg'
import img1 from '../images/paris2.jpg'
import img2 from '../images/paris.jpg'; // Import your image
import img3 from '../images/paris3.jpg'; // Import your image

function laurenParisPost() {

    const post = {
        profileLink: "/profile",
        profilePic: laurenPic,
        username: "Lauren",
        images: [img1, img2, img3],
        location: "PARIS",
        rating: "4.0",
        date: <h4>09/04/2024</h4>,
        description: <p>Paris was fun!</p>,
        collabs: ["Charles"],
        collabPics: [charlesPic],
        commentPic: [],
        commentUser: [],
        commentMsg: [],
    };

    return (
        <div>
            <PostPage post={post}/>
        </div>
    );
}

export default laurenParisPost;