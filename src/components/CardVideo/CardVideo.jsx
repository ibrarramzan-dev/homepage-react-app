import React from "react";
import playIcon from "./images/play-icon.png";

function CardVideo({ image, title, price }) {
  return (
    <div className="CardVideo-container">
      <img src={image} alt="Video thumbnail" />

      <img src={playIcon} alt="Play icon" />

      <p className="CardVideo-title">{title}</p>

      <div className="CardVideo-price-wrapper">
        <p className="CardVideo-price">ORDER - $ {price}</p>
      </div>
    </div>
  );
}

export default CardVideo;
