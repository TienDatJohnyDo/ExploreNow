// import React, { useState } from 'react';
// import './styles/navigationBar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faUser, faSearch, faHome} from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom'; // Importing Routes and Route instead of BrowserRouter as Router


// function NavigationBar() {

//     // Define the state to hold the active tab
//     const [activeTab, setActiveTab] = useState('/discover');

//     // Function to handle the click event
//     const handleClick = (tab) => {
//         setActiveTab(tab);
//     }

//     // Define the style for the active tab
//     const activeTabStyle = {
//         color: 'aqua',
//         fontWeight: 'bold',
//     };

//     // Define the style for the inactive tab
//     const inactiveTabStyle = {
//         color: 'white',
//         fontWeight: 'normal',
//     };

//     return (
//         <div className='main'>
//             <div className="navigation-bar">
//                 <Link to="/discover" className='nav-button' onClick={() => handleClick('/discover')}>
//                     <FontAwesomeIcon icon={faHome} color="white" size="lg" style={activeTab === '/discover' ? activeTabStyle : inactiveTabStyle}/>
//                 </Link>
//                 <Link to="/searchpage" className='nav-button' onClick={() => handleClick('/searchpage')}>
//                     <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={activeTab === '/searchpage' ? activeTabStyle : inactiveTabStyle}/>
//                 </Link>
//                 <Link to="/post" className='nav-button' onClick={() => handleClick('/post')}>
//                     <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={activeTab === '/post' ? activeTabStyle : inactiveTabStyle} />
//                 </Link>
//                 <Link to="/profile" className='nav-button' onClick={() => handleClick('/profile')}>
//                     <FontAwesomeIcon icon={faUser} color="white" size="lg" style={activeTab === '/profile' ? activeTabStyle : inactiveTabStyle} />
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default NavigationBar;
import React, { useState } from 'react';
import './styles/navigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom'; // Importing useLocation to get the current path

function NavigationBar() {
    // Get the current path using useLocation
    const location = useLocation();

    // Define the state to hold the active tab
    const [activeTab, setActiveTab] = useState('/discover');

    // Function to handle the click event
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    // Define the style for the active tab
    const activeTabStyle = {
        color: 'aqua',
        fontWeight: 'bold',
    };

    // Define the style for the inactive tab
    const inactiveTabStyle = {
        color: 'gray', // Change color to indicate it's inactive
        fontWeight: 'normal',
    };

    // Hide the navigation bar when on the EntryPage
    if (location.pathname === '/entrypage') {
        return null;
    }

    return (
        <div className='main'>
            <div className="navigation-bar">
                <Link to="/discover" className='nav-button' onClick={() => handleClick('/discover')}>
                    <FontAwesomeIcon icon={faHome} color="white" size="lg" style={activeTab === '/discover' ? activeTabStyle : inactiveTabStyle}/>
                </Link>
                <Link to="/searchpage" className='nav-button' onClick={() => handleClick('/searchpage')}>
                    <FontAwesomeIcon icon={faSearch} color="white" size="lg" style={activeTab === '/searchpage' ? activeTabStyle : inactiveTabStyle}/>
                </Link>
                <Link to="/post" className='nav-button' onClick={() => handleClick('/post')}>
                    <FontAwesomeIcon icon={faPlus} color="white" size="lg" style={activeTab === '/post' ? activeTabStyle : inactiveTabStyle} />
                </Link>
                <Link to="/profile" className='nav-button' onClick={() => handleClick('/profile')}>
                    <FontAwesomeIcon icon={faUser} color="white" size="lg" style={activeTab === '/profile' ? activeTabStyle : inactiveTabStyle} />
                </Link>
            </div>
        </div>
    );
}

export default NavigationBar;