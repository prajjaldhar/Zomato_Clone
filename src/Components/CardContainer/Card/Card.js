import React from "react";
import "./Card.css";

const Card = ({ title, places, imageSrc }) => {
  return (
    <div className="box-1">
      <div>
        <span>
          {title} <br /> {places}
        </span>
        <i className="fas fa-caret-right"></i>
      </div>
      <img src={imageSrc} alt={title} />
    </div>
  );
};

export default Card;
