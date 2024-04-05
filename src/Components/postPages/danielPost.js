// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import danielPic from '../images/daniel.jpg'
import michaelPic from '../images/michael.jpg'
import maryPic from '../images/mary.jpg'
import jamesPic from '../images/james.jpg'
import robertPic from '../images/robert.jpg'
import lindaPic from '../images/linda.jpg'
import sarahPic from '../images/sarah.jpg'
import zacPic from '../images/zac.jpg'


import img1 from '../images/paris.jpg'
import img2 from '../images/paris1.jpg'
import img3 from '../images/paris2.jpg'
import img4 from '../images/paris3.jpg'
import img5 from '../images/paris4.jpg'

function charlesPost() {

    const post = {
        profileLink: "/danielProfile",
        profilePic: danielPic,
        username: "Daniel",
        images: [img1, img2, img3, img4, img5],
        location: "PARIS",
        rating: "4.0",
        date: <h4>16/07/2023</h4>,
        description: <p>During my enchanting trip to Paris, I marveled at the Eiffel Tower, 
                        wandered through the historic streets, 
                        and reveled in the city’s timeless charm</p>,
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

export default charlesPost;