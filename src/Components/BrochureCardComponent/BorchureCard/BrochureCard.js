import React from "react";
import "./BrochureCard.css";

function BrochureCard({ title, details, imageUrl }) {
  return (
    <div className="box">
      <div className="white">
        <p>{title}</p>
        <p className="details">{details}</p>
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default BrochureCard;
