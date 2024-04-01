// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import charlesPic from '../images/charles.jpg'
import michaelPic from '../images/michael.jpg'
import maryPic from '../images/mary.jpg'
import jamesPic from '../images/james.jpg'
import robertPic from '../images/robert.jpg'
import lindaPic from '../images/linda.jpg'
import sarahPic from '../images/sarah.jpg'
import zacPic from '../images/zac.jpg'


import img1 from '../images/jasper.jpg'
import img2 from '../images/banff.jpg'
import img3 from '../images/banff2.jpg'
import img4 from '../images/banff3.jpg'
import img5 from '../images/banff4.jpg'

function charlesPost() {

    const post = {
        profileLink: "/charlesProfile",
        profilePic: charlesPic,
        username: "Charles",
        images: [img1, img2, img3, img4, img5],
        location: "JASPER",
        rating: "4.0",
        date: <h4>05/07/2022</h4>,
        description: <p>As I stepped into the heart of Jasper National Park, 
                        the crisp mountain air enveloped me, carrying whispers of ancient 
                        pines and the promise of adventure. </p>,
        collabs: ["James", "Mary", "Michael"],
        collabPics: [jamesPic, maryPic, michaelPic],
        commentPic: [maryPic, jamesPic, michaelPic, robertPic, lindaPic, sarahPic, zacPic],
        commentUser: ["Mary", "James", "Michael", "Robert", "Linda", "Sarah", "Zac"],
        commentMsg: ["This place was wonderful!",
                    "Niceee!",
                    "Photos turned out great",
                    "Can't wait to go there!",
                    "So pretty",
                    "Added to my bucket list!",
                    "Hehahah"],
    };

    return (
        <PostPage post={post}/>
    );
}

export default charlesPost;