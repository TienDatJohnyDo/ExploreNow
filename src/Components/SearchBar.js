import React, { useState } from "react";
import './styles/searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
var data = require("./SEARCH_DATA.json");

const SearchBar = () => {

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log('search', searchTerm);
  }

  return (
    <div className="searchbar-container">
        <div className="search-inner">
            <input type="text" 
                   className="input" 
                   placeholder="Places, country, restaurants..."
                   value={value} onChange={onChange} />
            <FontAwesomeIcon icon={faSearch}
                             className="icon"
                             onClick={()=>onSearch(value)}
                             color="grey" size="lg" style={{ marginLeft: '-30px', zIndex: '1' }} />
        </div>
        <div className="dropdown">
            {data.filter(item => {
                const searchTerm = value.toLowerCase();
                const location = item.location_item.toLowerCase();

                return searchTerm && location.startsWith(searchTerm) && location != searchTerm
            })
            .slice(0,10)
            .map((item)=>(
                <div className="dropdown-row" 
                     onClick={()=>onSearch(item.location_item)}
                     key={item.location_item}>
                    {item.location_item}
                </div>))}
        </div>
    </div>

  );
}

export default SearchBar;