import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// Login.js

function Login() {
    const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    
    <div className="login-container">
    <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" />
      <h1>Welcome Back!</h1>
    <br></br>
    <br></br>
    <br></br>
    {/* Your login form */}
      <input 
        type="text" 
        placeholder="Username" 
        className="text-input " 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="text-input password-input" 
        value={password} 
        onChange={handleChange} 
      />
    <div className="button-container"> 
        <button>Login</button>
    </div>
    <p style ={{color:'black'}}>Don't have an account ? <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a></p>

    </div>
  );
}

export default Login;