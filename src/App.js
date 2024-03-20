import React from 'react'; 
import './App.css';
import logoImage from './logo.png'
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'; 
import Login from "./Components/Login"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Centered rectangle container */}
        {/* Looking at routes  */}
    
        <div className="centered-rectangle">
          <img src={logoImage} className="App-logo" alt="logo" />
          <p> Travel. Explore Hello. Make Memories </p>
        </div>
        <div className = "blue-centered-rectangle">
          <h1> Welcome!</h1>
          <p> Let's get Started!</p>
          <p>
            I agree to Explore Now's{' '}
            <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
              Term of Service <br />
            </a>{' '}
            and confirm that I have read Explore Now's{' '} <br />
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
            <br />
            <br />
          </p>
          {/* Two Buttons for Login and New guest */}
          <div className="button-container">
            
            <button>Login</button>
          
         
            <button>I'm New</button>
            
          </div>
          <p> Or</p>
          <div className="button-container">
            <button>Guest User</button>
          </div>
        </div>

      </header>
    </div>

  );
}
export default App;
