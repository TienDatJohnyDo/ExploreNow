import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const goBack = () => {
        window.location.href = '/'; // Navigate to the home page
    };

    return (
        <div className="login-container">
            <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={goBack} /> {/* Add onClick event to go back */}
            <h1>Welcome Back!</h1>
            <br />
            <br />
            <br />
            <div className="login-label" style={{ fontSize: '20px', fontWeight: 'bold' }}> {/* Adjust the font-size and alignment as needed */}
                <label htmlFor="username">Login</label>
            </div>
            <br />
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
            <p style={{ color: 'black' }}>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
}

export default Login;