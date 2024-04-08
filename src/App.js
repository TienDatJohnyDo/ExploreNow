// import React from 'react'; 
// import './App.css';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Login from "./Components/Login"; 
// import Signup from "./Components/Signup"; 
// import Discover from "./Components/Discover"; 
// import SearchPage from './Components/SearchPage';
// import Post from './Components/Post'; 
// import Profile from './Components/Profile'; 
// import GuestDiscover from './Components/GuestDiscover'; 
// import Guestsearch from './Components/Guestsearch';
// import GuestPost from './Components/GuestPost';
// import GuestProfile from './Components/GuestProfile';
// import NavigationBar from './Components/NavigationBar';
// import Guestnavigation from './Components/Guestnavigation';
// import EntryPage from './Components/EntryPage';

// function App() {
//   const location = useLocation();
//   const isNotLoginOrSignupPage = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/";

//   // Check if the user is on the GuestDiscover page
//   const isGuest = location.pathname === "/Guest";

//   return (
//     <div className='main'>
//       {isNotLoginOrSignupPage && (isGuest ? <Guestnavigation /> : <NavigationBar />)}
     

//       <Routes>
//         <Route path="/" element={<EntryPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/discover" element={<Discover />} />
//         <Route path="/searchPage" element={<SearchPage />} />
//         <Route path="/post" element={<Post />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/GuestDiscover" element={<GuestDiscover />} />
//         <Route path="/GuestSearch" element={<Guestsearch />} />
//         <Route path="/GuestPost" element={<GuestPost />} />
//         <Route path="/GuestProfile" element={<GuestProfile />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Login from "./Components/Login"; 
// import Signup from "./Components/Signup"; 
// import Discover from "./Components/Discover"; 
// import SearchPage from './Components/SearchPage';
// import Post from './Components/Post'; 
// import Profile from './Components/Profile'; 
// import GuestDiscover from './Components/GuestDiscover'; 
// import Guestsearch from './Components/Guestsearch';
// import GuestPost from './Components/GuestPost';
// import GuestProfile from './Components/GuestProfile';
// import NavigationBar from './Components/NavigationBar';
// import Guestnavigation from './Components/Guestnavigation';
// import EntryPage from './Components/EntryPage';

// function App() {
//   const location = useLocation();
//   const isGuestPage = location.pathname.startsWith("/Guest");
//   const isNotLoginOrSignupPage = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/";

//   return (
//     <div className='main'>
//       {isNotLoginOrSignupPage ? <NavigationBar /> : null}
//       {isGuestPage ? <Guestnavigation /> : null} {/* Render Guestnavigation only on guest pages */}
      
//       <Routes>
//         <Route path="/" element={<EntryPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/discover" element={<Discover />} />
//         <Route path="/searchPage" element={<SearchPage />} />
//         <Route path="/post" element={<Post />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/GuestDiscover" element={<GuestDiscover />} />
//         <Route path="/GuestSearch" element={<Guestsearch />} />
//         <Route path="/GuestPost" element={<GuestPost />} />
//         <Route path="/GuestProfile" element={<GuestProfile />} />
//         {/* Define routes for other components as needed */}
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from "./Components/Login"; 
import Signup from "./Components/Signup"; 
import Discover from "./Components/Discover"; 
import SearchPage from './Components/SearchPage';
import Post from './Components/Post'; 
import GuestDiscover from './Components/GuestDiscover'; 
import Guestsearch from './Components/Guestsearch';
import GuestPost from './Components/GuestPost';
import GuestProfile from './Components/GuestProfile';
import NavigationBar from './Components/NavigationBar';
import Guestnavigation from './Components/Guestnavigation';
import EntryPage from './Components/EntryPage';
import NotifcationPage from './Components/NotificationPage';
import PostTwo from './Components/PostTwo';
import PostThree from './Components/PostThree';
import SignOutModal from './Components/SignOutModal';

/* Profile pages imports here */
import Profile from './Components/Profile'; 
import MyProfile from './Components/profilePages/MyProfile'
import ProfileOthers from './Components/ProfileOthers'; 
import CharlesProfile from './Components/profilePages/CharlesProfile'
import LisaProfile from './Components/profilePages/LisaProfile'
import NancyProfile from './Components/profilePages/NancyProfile'
import DanielProfile from './Components/profilePages/DanielProfile'

/* Postpages imports here */
import PostPage from './Components/PostPage';
import LaurenPost from './Components/postPages/laurenPost';
import CharlesPost from './Components/postPages/charlesPost';
import LisaPost from './Components/postPages/lisaPost';
import NancyPost from './Components/postPages/nancyPost';
import DanielPost from './Components/postPages/danielPost';

/* Seachpage categories imports here*/
import Trending from './Components/searchCategories/Trending';
import Food from './Components/searchCategories/Food';
import Banff from './Components/searchCategories/Banff';
import Jasper from './Components/searchCategories/Jasper';
import Seoul from './Components/searchCategories/Seoul';
import Paris from './Components/searchCategories/Paris';
import Santorini from './Components/searchCategories/Santorini';
import Tokyo from './Components/searchCategories/Tokyo';

function App() {
  const location = useLocation();
  const isGuestPage = location.pathname.startsWith("/Guest");
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const isStart = location.pathname === "/";

  return (
    <div className='main'>
      {/* Render NavigationBar only on non-guest, non-login, and non-signup pages */}
      {!isGuestPage && !isLoginPage && !isSignupPage && !isStart && <NavigationBar />}
      
      {/* Render Guestnavigation only on guest pages */}
      {isGuestPage && <Guestnavigation />}
      
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/GuestDiscover" element={<GuestDiscover />} />
        <Route path="/GuestSearch" element={<Guestsearch />} />
        <Route path="/GuestPost" element={<GuestPost />} />
        <Route path="/GuestProfile" element={<GuestProfile />} />
        <Route path="/notificationPage" element={<NotifcationPage />} />
        <Route path="/post" element={<Post />} />

        {/* Profile pages routes here */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/myProfile" element={<MyProfile />} />    // Still working on it not complete
        <Route path="/profileOthers" element={<ProfileOthers />} />
        <Route path="/charlesProfile" element={<CharlesProfile />} />
        <Route path="/lisaProfile" element={<LisaProfile />} />
        <Route path="/nancyProfile" element={<NancyProfile />} />
        <Route path="/danielProfile" element={<DanielProfile />} />
        <Route path="/entrypage" element ={<EntryPage />}/>


        {/* Postpages routes here */}
        <Route path="/postPage" element={<PostPage />} />
        <Route path="/laurenPost" element={<LaurenPost />} />
        <Route path="/charlesPost" element={<CharlesPost />} />
        <Route path="/lisaPost" element={<LisaPost />} />
        <Route path="/nancyPost" element={<NancyPost />} />
        <Route path="/danielPost" element={<DanielPost />} />

        {/* Seachpage categories routes here */}
        <Route path="/trending" element={<Trending />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/banff" element={<Banff />} />
        <Route path="/jasper" element={<Jasper />} />
        <Route path="/seoul" element={<Seoul />} />
        <Route path="/paris" element={<Paris />} />
        <Route path="/santorini" element={<Santorini />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="/postTwo" element={<PostTwo />}></Route>
        <Route path="/postThree" element={<PostThree />}></Route>
        

        {/* Define routes for other components as needed */}
      </Routes>
    </div>
  );
}

export default App;