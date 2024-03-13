import React from "react";
import Card from "./Card/Card.js";
import CardData from "../../Data/CardData.js";
import "./CardContainer.css";
import PlaceList from "../Place/PlaceList.js";

const CardContainer = () => {
  return (
    <section className="middle">
      <div className="sec-2">
        <h1>Collections</h1>
        <div>
          <h5>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </h5>
          <span>
            All collections in Pune &nbsp; <i className="fas fa-caret-right" />
          </span>
        </div>
      </div>

      <div className="sec-3">
        {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            places={card.places}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
      <h2>
        Popular Localities in and around <strong>Pune</strong>
      </h2>
      <PlaceList />
    </section>
  );
};

export default CardContainer;
