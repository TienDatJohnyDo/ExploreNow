import React from "react";
import './styles/searchCard.css'


const SearchCard = ({image, labelText}) => {
    return (
        <div className="square-card">
          <img src={image} alt="Card" className="card-image" />
          <div className="label">{labelText}</div>
        </div>
      );
}

export default SearchCard;