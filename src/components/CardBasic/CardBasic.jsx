import React from "react";
import cardOverlayImg from "./images/card-overlay.png";

export default function CardBasic({ bgImage, heading, category }) {
  return (
    <div className="CardBasic-container">
      <img src={bgImage} alt="athelete" />
      <img
        className="CardBasic-overlay-img"
        src={cardOverlayImg}
        alt="Card overlay"
      />

      <p className="CardBasic-heading">
        {heading.split(" ")[0]}
        <span className="text-blue-color"> {heading.split(" ")[1]}</span>
      </p>
      <p className="CardBasic-category">{category}</p>
      <p className="CardBasic-view-profile-text">View Profile</p>
    </div>
  );
}
