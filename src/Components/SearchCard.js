import React from "react";
import './styles/searchCard.css'
import {Link} from 'react-router-dom';


const SearchCard = ({image, labelText, link}) => {
  return (
    <Link to={link}>
      <div className="square-card">
        <img src={image} alt="Card" className="card-image" />
        <div className="image-filter" />
        <div className="label">{labelText}</div>
      </div>
    </Link>

  );
}

export default SearchCard;