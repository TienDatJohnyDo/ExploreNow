// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import laurenPic from '../images/lauren.jpg'
import michaelPic from '../images/michael.jpg'
import maryPic from '../images/mary.jpg'
import jamesPic from '../images/james.jpg'
import robertPic from '../images/robert.jpg'
import lindaPic from '../images/linda.jpg'
import sarahPic from '../images/sarah.jpg'
import zacPic from '../images/zac.jpg'


import img1 from '../images/banff1.jpg'
import img2 from '../images/banff.jpg'
import img3 from '../images/banff2.jpg'
import img4 from '../images/banff3.jpg'
import img5 from '../images/banff4.jpg'

function laurenPost() {

    const post = {
        profileLink: "/laurenProfile",
        profilePic: laurenPic,
        username: "Lauren",
        images: [img1, img2, img3, img4, img5],
        location: "BANFF",
        rating: "4.5",
        date: <h4>16/07/2023</h4>,
        description: <p>During my unforgettable trip to Banff National Park, 
                        I reveled in the glassy turquoise lakes, marveled at 
                        abundant wildlife, and stood in awe of the majestic 
                        Canadian Rockies—nature’s pristine masterpiece! </p>,
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

export default laurenPost;