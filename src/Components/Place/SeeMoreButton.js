import React from "react";

function SeeMoreButton({ text, onClick, isExpanded }) {
  return (
    <div className="box-2" onClick={onClick}>
      <div>
        <span>{text}</span>
        {isExpanded ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </div>
    </div>
  );
}

export default SeeMoreButton;
