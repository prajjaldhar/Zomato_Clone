import React, { useState } from "react";
import PlaceCard from "./Card/PlaceCard.js";
import placeData from "../../Data/PlaceData.js";
import "./PlaceList.css";
import SeeMoreButton from "./SeeMoreButton.js";

function PlaceList() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visiblePlaceData = showAll ? placeData : placeData.slice(0, 8);

  return (
    <div className="sec-4">
      {visiblePlaceData.map((place, index) => (
        <PlaceCard key={index} name={place.name} places={place.places} />
      ))}
      {placeData.length > 8 && (
        <SeeMoreButton
          text={showAll ? "See Less" : "See More"}
          onClick={toggleShowAll}
          isExpanded={showAll}
        />
      )}
    </div>
  );
}
export default PlaceList;
