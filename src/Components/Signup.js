import React, { useState } from 'react';
import './styles/signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Discover from './Discover';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(''); 
    if (name === 'username') setUsername(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'password') {
      setPassword(value);
      // Update validation criteria
      setIsValidLength(value.length >= 8);
      setHasUppercase(/[A-Z]/.test(value));
      setHasSpecialChar(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value));
    }
    // Check if passwords match
    else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      setPasswordsMatch(value === password);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields.');
    } else if (!isValidLength || !hasUppercase || !hasSpecialChar) {
      setError('Password must meet the criteria.');
    } else if (!passwordsMatch) {
      setError('Passwords do not match.');
    } else {
      navigate('/discover');
    }
  };

  const goBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="login-container" style={{ textAlign: 'center' }}>
      <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={goBack} />
      <h1>Sign Up</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          className="text-input" 
          name="username"
          value={username}
          onChange={handleChange}
        />
        <br></br><br></br>
        <input 
          type="text" 
          placeholder="Email address" 
          className="text-input" 
          name="email"
          value={email}
          onChange={handleChange}
        />
        <br></br><br></br>

        <input 
          type="password" 
          placeholder="Password" 
          className="text-input password-input" 
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br></br><br></br>
        {/* Visual indicators for password validation */}
        <div className="checkbox-container">
          <label>
            <input type="checkbox" checked={isValidLength} disabled /> 
            <span>Must be 8 characters long</span>
          </label>
          <br />
          <label>
            <input type="checkbox" checked={hasUppercase} disabled /> 
            <span>Must contain 1 uppercase letter</span>
          </label>
          <br />
          <label>
            <input type="checkbox" checked={hasSpecialChar} disabled /> 
            <span>Must contain 1 special character</span>
          </label>
          <br />
        </div>
        <br />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          className="text-input password-input" 
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="button-container"> 
          <button type="submit">Sign up</button>
        </div>
      </form>
      <p style={{ color: 'black' }}>Already have an account? <Link to="/login">Login</Link></p>
      
      <Routes>
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </div>
  );
}

export default SignUp;