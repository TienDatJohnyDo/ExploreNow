import React, { useState } from 'react';
// import './styles/navigationBar.css';
import './styles/guestnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function GuestNavigationBar() {
    // Define the state to hold the active tab
    const [activeTab, setActiveTab] = useState('/GuestDiscover');

    // Function to handle the click event
    const handleClick = (tab) => {
        setActiveTab(tab);
    }
    // Define the style for the active tab
    const activeTabStyle = {
        color: 'aqua',
        fontWeight: 'bold',
    };

    // Define the style for the inactive tab
    const inactiveTabStyle = {
        color: 'white',
        fontWeight: 'normal',
    };

    return (
        <div className='main'>
            <div className="navigation-bar">
                <Link to="/GuestDiscover" className='nav-button' onClick={() => handleClick('/GuestDiscover')}>
                    <FontAwesomeIcon icon={faHome} color="white" size="lg" style={activeTab === '/GuestDiscover' ? activeTabStyle : inactiveTabStyle}/>
                </Link>
                <Link to="/GuestSearch" className='nav-button' onClick={() => handleClick('/GuestSearch')}>
                    <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={activeTab === '/GuestSearch' ? activeTabStyle : inactiveTabStyle}/>
                </Link>
                <Link to="/GuestPost" className='nav-button' onClick={() => handleClick('/GuestPost')}>
                    <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={activeTab === '/GuestPost' ? activeTabStyle : inactiveTabStyle}/>
                </Link>
                <Link to="/GuestProfile" className='nav-button' onClick={() => handleClick('/GuestProfile')}>
                    <FontAwesomeIcon icon={faUser} color="white" size="lg" style={activeTab === '/GuestProfile' ? activeTabStyle : inactiveTabStyle}/>
                </Link>
            </div>
        </div>
    );
}

export default GuestNavigationBar;