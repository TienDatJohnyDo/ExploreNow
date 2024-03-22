import React from 'react'; 
import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Login from "./Components/Login"; 
import Signup from "./Components/Signup"; 
import Discover from "./Components/Discover"; 
import SearchPage from './Components/SearchPage';
import Post from './Components/Post'; 
import Profile from './Components/Profile'; 

import NavigationBar from './Components/NavigationBar';
import EntryPage from './Components/EntryPage';

function App() {
  
  const location = useLocation();
  const isNotLoginOrSignupPage = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/";

  return (
    <Router>
      <EntryPage />
      {isNotLoginOrSignupPage && <NavigationBar />}
      
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Define the route for Login component */}
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/discover" element = {<Discover />}/>
        <Route path = "/searchPage" element = {<SearchPage />} />
        <Route path = "/post" element = {<Post />} />
        <Route path = "/profile" element = {<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;