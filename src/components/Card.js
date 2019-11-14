import React from "react";

import "../assets/css/Card.css";

const Card = ({ text, imgPath }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imgPath})`
      }}
    >
      <p style={{ zIndex: "10" }}>{text}</p>
    </div>
  );
};

export default Card;
