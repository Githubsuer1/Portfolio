import React from "react";
import "./Flipcard.css"; // Make sure to create this CSS file

const FlipCard = ({domen,technology}) => {
  return (
    <div className="flip-card w-full max-w-md">
      <div className="flip-card-inner rounded shadow-2xl">
        <div className="flip-card-front">
          <h2>{domen}</h2>
        </div>
        <div className="flip-card-back">
          <h2>{technology}</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCard