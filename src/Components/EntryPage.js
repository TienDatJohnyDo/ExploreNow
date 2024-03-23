import React from 'react';
import './styles/entryPage.css';
import logoImage from '../appLogo.png'
import {Link} from 'react-router-dom';


function EntryPage() {
  return (
    <div className="App">
        <header className="App-header">
          {/* Centered rectangle container */}
          {/* Looking at routes  */}
          <div className="top-rectangle">
            <img src={logoImage} className="App-logo" alt="logo" />
          </div>
          <div className="bottom-blue-rectangle">
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
              <br /><br />
            </p>
            {/* Two Buttons for Login and New guest */}
            <div className="button-container">
              <Link to="/login"> {/* Use "to" prop to specify the path */}
                <button>Login</button>
              </Link>
              {/* Assuming you have a route for "New Guest" as well */}
              <Link to="/signup"> {/* You need to define this route */}
                <button>I'm New</button>
              </Link>
            </div>
            <p> Or</p>
            <div className="button-container">
              <Link to ="/GuestDiscover">
                <button>Guest User</button>
              </Link>
            </div>
          </div>
        </header>
      </div>
  );
}

export default EntryPage;