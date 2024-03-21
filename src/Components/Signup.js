import React, { useState } from 'react';
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
  const [password, setPassword] = useState('');
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // Update validation criteria
    setIsValidLength(newPassword.length >= 8);
    setHasUppercase(/[A-Z]/.test(newPassword));
    setHasSpecialChar(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword));
    
  };

  return (
    <div className="login-container">
      <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" />
      <h1>Sign Up</h1>
      <br />
      {/* Your login form */}
      <input 
        type="text" 
        placeholder="Username" 
        className="text-input" 
      />
      <input 
        type="text" 
        placeholder="Email address" 
        className="text-input" 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="text-input password-input" 
        value={password} 
        onChange={handleChange} 
      />
      {/* Visual indicators for password validation */}
      <div className="checkbox-container">
        <input type="checkbox" checked={isValidLength} disabled /> Must be 8 characters long<br />
        <input type="checkbox" checked={hasUppercase} disabled /> Must contain 1 uppercase letter<br />
        <input type="checkbox" checked={hasSpecialChar} disabled /> Must contain 1 special character<br />
      </div>
      <br />
      <input 
        type="text" 
        placeholder="Confirm Password" 
        className="text-input password-input" 
      />
      <p className="dob-label">Date of Birth:</p>
      <div className="dob-container">
        <input 
          type="text" 
          name="dobYear"
          placeholder="YYYY" 
          className="text-input dob-input"
        />
        <span className="dob-separator">/</span>
        <input 
          type="text" 
          name="dobMonth"
          placeholder="MM" 
          className="text-input dob-input"
        />
        <span className="dob-separator">/</span>
        <input 
          type="text" 
          name="dobDay"
          placeholder="DD" 
          className="text-input dob-input"
        />
      </div>
      <div className="button-container"> 
        <button>Sign up</button>
      </div>
      <p style={{ color: 'black' }}>Already have an account? <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Login</a></p>
    </div>
  );
}

export default SignUp;