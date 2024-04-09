import React, { useState } from 'react';
import './styles/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Discover from './Discover';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
        // Clear error message when the user starts typing
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            setError('Please fill in all fields.');
        } else {
            // Add your login logic here
            // For now, just navigate to Discover
            if (username === 'Lauren') {
                navigate('/discover'); // Navigate to Lauren's profile page
            } else if (username === 'Charles') {
                navigate('/discover2'); // Navigate to Charles's profile page
            } else {
                setError('Invalid username.'); // Show error for unknown username
            }
        }
    };

    const goBack = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="login-container">
            <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" onClick={goBack} />
            <h1>Welcome Back!</h1>
            <br />
            <br />
            <br />
            <div className="login-label" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                <label htmlFor="username">Login</label>
            </div>
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
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="text-input password-input" 
                    name="password"
                    value={password} 
                    onChange={handleChange} 
                />
                
                {error && (
                    <div className="error-container">
                        <p className="error-message">{error}</p>
                    </div>
                )}
                
                <div className="button-container"> 
                    <button type="submit">Login</button>
                </div>
            </form>
            <p style={{ color: 'black' }}>Don't have an account? <Link to="/signup">Sign Up</Link></p>

            <Routes>
                <Route path="/discover" element={<Discover />} />
            </Routes>
        </div>
    );
}

export default Login;