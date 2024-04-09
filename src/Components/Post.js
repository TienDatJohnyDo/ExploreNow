// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './styles/post.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faMinus } from '@fortawesome/free-solid-svg-icons';
// import SearchBar from './SearchBar'; // Import the SearchBar component

// function Post() {
//   const [selectedCollaborator, setSelectedCollaborator] = useState('');
//   const [activeTab, setActiveTab] = useState('/post');

//   const handleNext = (tab) => {
//     setActiveTab(tab);
//   }

//   const handleCollaboratorChange = (event) => {
//     setSelectedCollaborator(event.target.value);
//   };

//   const handleCollaboratorRemove = () => {
//     setSelectedCollaborator("");
//   };

//   return (
//     <div className="discover-container">
//       <div class="banner">
//         <div class="banner-content">
//           <span>Hey Lauren! <br></br></span>
//           <span>Share your journey</span>
//         </div>
//       </div>

//       <div className="location-text">
//         <p>Where did you go?</p>
//       </div>
      
//       {/* Replace the input with the SearchBar component */}
//       <SearchBar />
//       <br></br>
//       <br></br>

//       <div className="location-text">
//         <p>Who did you go with?</p>
//       </div>
      
//       <div className="text-input-container">
//         <select className="text-input" value={selectedCollaborator} onChange={handleCollaboratorChange}>
//           <option value="">Select Collaborators</option>
//           <option value="Charles Smith">Charles Smith</option>
//           <option value="Nancy Brown">Nacy Brown </option>
//           <option value="Lisa Williams">Lisa Williams </option>
//           <option value="Alone">Alone </option>
//           {/* Add more options as needed */}
//         </select>
//       </div>

//       <div className="selected-collaborator-container">
//         {selectedCollaborator && (
//           <div className="selected-collaborator">
//             <FontAwesomeIcon icon={faUser} color="black" size="lg" className="profile-icon" />
//             <span className="collaborator-name">{selectedCollaborator}</span>
//             <FontAwesomeIcon icon={faMinus} color="black" size="lg" className="remove-icon" onClick={handleCollaboratorRemove} />
//           </div>
//         )}
//       </div>
      
//       <Link to="/postTwo" onClick={() => handleNext('/postTwo')}>
//         <div className="next-button-container">
//           <button className="next-button">Next</button>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Post;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMinus } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar'; // Import the SearchBar component

function Post() {
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [activeTab, setActiveTab] = useState('/post');
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = (tab) => {
    setActiveTab(tab);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleCollaboratorSelect = (collaborator) => {
    if (selectedCollaborators.includes(collaborator)) {
      setSelectedCollaborators(selectedCollaborators.filter(item => item !== collaborator));
    } else {
      setSelectedCollaborators([...selectedCollaborators, collaborator]);
    }
  };

  const handleCollaboratorRemove = (collaborator) => {
    setSelectedCollaborators(selectedCollaborators.filter(item => item !== collaborator));
  };

  return (
    <div className="discover-container">
      <div className="banner">
        <div className="banner-content">
          <span className='heyLauren'>Hey Lauren! <br /></span>
          <span className='shareJourney'>Share your journey</span>
        </div>
      </div>

      <div className="location-text">
        <span>Where did you go?</span>
      </div>

      {/* Replace the input with the SearchBar component */}
      <SearchBar />
      <br />
      <br />

      <div className="who-with-text">
        <p>Who did you go with?</p>
      </div>

      <div className="dropdown">
        <div className="text-input" onClick={toggleDropdown}>
          Select Collaborators ...
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <ul>
              <li onClick={() => handleCollaboratorSelect("Charles Smith")}>Charles Smith</li>
              <li onClick={() => handleCollaboratorSelect("Nancy Brown")}>Nancy Brown</li>
              <li onClick={() => handleCollaboratorSelect("Lisa Williams")}>Lisa Williams</li>
              <li onClick={() => handleCollaboratorSelect("Alone")}>Alone</li>
              {/* Add more options as needed */}
            </ul>
          </div>
        )}
      </div>

      <div className="selected-collaborator-container">
        {selectedCollaborators.map(collaborator => (
          <div key={collaborator} className="selected-collaborator">
            <br></br>
            <FontAwesomeIcon icon={faUser} color="black" size="lg" className="profile-icon" />
            
            <span className="collaborator-name">{collaborator}</span>
            
            <FontAwesomeIcon icon={faMinus} color="red" size="lg" className="remove-icon" onClick={() => handleCollaboratorRemove(collaborator)} />
            <br></br>
            
          </div>
        ))}
      </div>

      <Link to="/postTwo" onClick={() => handleNext('/postTwo')}>
        <div className="next-button-container">
          <button className="next-button">Next</button>
        </div>
      </Link>
    </div>
  );
}

export default Post;