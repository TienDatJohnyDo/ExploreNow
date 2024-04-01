// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import lisaPic from '../images/Lisa.jpg'
import michaelPic from '../images/michael.jpg'
import maryPic from '../images/mary.jpg'
import jamesPic from '../images/james.jpg'
import robertPic from '../images/robert.jpg'
import lindaPic from '../images/linda.jpg'
import sarahPic from '../images/sarah.jpg'
import zacPic from '../images/zac.jpg'


import img1 from '../images/santorini.jpg'
import img2 from '../images/santorini1.jpg'
import img3 from '../images/santorini2.jpg'
import img4 from '../images/santorini3.jpg'

function lisaPost() {

    const post = {
        profileLink: "/lisaProfile",
        profilePic: lisaPic,
        username: "Lisa",
        images: [img1, img2, img3, img4],
        location: "SANTORINI",
        rating: "5.0",
        date: <h4>16/07/2023</h4>,
        description: <p> During my unforgettable trip to Santorini, 
                        I reveled in the azure waters, explored ancient ruins, 
                        and marveled at the breathtaking sunsets over the caldera </p>,
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

export default lisaPost;