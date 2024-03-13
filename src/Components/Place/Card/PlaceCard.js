// PlaceCard.js
import React from "react";
import "./PlaceCard.css";

function PlaceCard({ name, places }) {
  return (
    <div className="box-2">
      <div>
        <span>{name}</span>
        <i className="fas fa-chevron-right"></i>
      </div>
      <p>{places} places</p>
    </div>
  );
}

export default PlaceCard;
