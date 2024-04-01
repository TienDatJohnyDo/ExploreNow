// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import nancyPic from '../images/nancy.jpg'
import michaelPic from '../images/michael.jpg'
import maryPic from '../images/mary.jpg'
import jamesPic from '../images/james.jpg'
import robertPic from '../images/robert.jpg'
import lindaPic from '../images/linda.jpg'
import sarahPic from '../images/sarah.jpg'
import zacPic from '../images/zac.jpg'


import img1 from '../images/toronto.jpg'
import img2 from '../images/toronto1.jpg'
import img3 from '../images/toronto2.jpg'

function nancyPost() {

    const post = {
        profileLink: "/nancyProfile",
        profilePic: nancyPic,
        username: "Nancy",
        images: [img1, img2, img3],
        location: "TORONTO",
        rating: "4.0",
        date: <h4>16/07/2023</h4>,
        description: <p>During my recent trip to Toronto, I stood atop the CN Tower, 
                        heart racing, as the city sprawled out beneath me,
                        a dizzying mosaic of lights and life </p>,
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
        <div>
            <PostPage post={post}/>
        </div>
    );
}

export default nancyPost;