import React from "react";
import BrochureCard from "./BorchureCard/BrochureCard.js";
import Data from "../../Data/BrochureCardData";
import "./BrochureCardComponent.css";

function BrochureCardComponent() {
  return (
    <section className="sec-1">
      {Data.map((item, index) => (
        <BrochureCard
          key={item.id}
          title={item.title}
          details={item.details}
          imageUrl={item.imageUrl}
        />
      ))}
    </section>
  );
}

export default BrochureCardComponent;
