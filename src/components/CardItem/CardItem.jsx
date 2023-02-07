import React from "react";

function CardItem({ image, title, text, price }) {
  return (
    <div className="CardItem-container">
      <img src={image} alt="Item" />

      <p className="CardItem-title">{title}</p>
      <p className="CardItem-text">{text}</p>

      <div className="CardItem-view-price-wrapper">
        <p className="CardItem-view-price">View - ${price} USD</p>
      </div>
    </div>
  );
}

export default CardItem;
