// Discover.js
import React from 'react';

import PostPage from '../PostPage';

import daltonPic from '../images/dalton.jpg'
import michaelPic from '../images/michael.jpg'
import maryPic from '../images/mary.jpg'
import jamesPic from '../images/james.jpg'
import robertPic from '../images/robert.jpg'
import lindaPic from '../images/linda.jpg'
import sarahPic from '../images/sarah.jpg'
import zacPic from '../images/zac.jpg'


import img1 from '../images/hanRiver.jpg'
import img2 from '../images/hanRiver1.jpg'
import img3 from '../images/hanRiver2.jpg'
import img4 from '../images/hanRiver3.jpg'

function daltonPost() {

    const post = {
        profilePic: daltonPic,
        username: "Dalton",
        images: [img1, img2, img3, img4],
        location: "HAN RIVER",
        rating: "4.0",
        date: <h4>23/05/2022</h4>,
        description: <p>As I sat by the tranquil Han River, its waters reflecting the 
                        city lights, I felt a sense of calm and connection to Seoul’s rich 
                        history that has flowed through its currents for thousands of years.</p>,
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

export default daltonPost;