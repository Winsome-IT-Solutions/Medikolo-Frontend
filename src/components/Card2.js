import React from "react";

import "../assets/css/Card.css";

const Card2 = ({ text, imgPath, location }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imgPath})`
      }}
    >
      <p style={{ zIndex: "10" }}>{text}</p>
      <p style={{ zIndex: "9" }}>{location}</p>
      <button style={{ zIndex: "9" }} className="primary">
        Book Now
      </button>
    </div>
  );
};

export default Card2;
