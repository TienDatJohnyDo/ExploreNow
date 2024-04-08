import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './styles/signoutmodal.css';

const SignOutModal = ({ isOpen, onClose }) => {
  const handleSignOut = () => {
    // Add your sign out logic here
    // For example, call a sign out function from your authentication context
    // Then close the modal
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="signout-modal-overlay">
          <div className="signout-modal">
            <h2>Sign Out</h2>
            <p style={{ color: 'black' }}>Are you sure you want to sign out?</p>
            <div className="button-container">
              {/* Link the Sign Out button to the /entry page */}
              <Link to="/EntryPage">
                <button style={{ color: 'red' }} className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
              </Link>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignOutModal;