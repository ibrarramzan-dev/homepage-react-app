import React from "react";
import readMoreIcon from "./images/read-more-icon.png";

function CardNews({ image, date, title }) {
  return (
    <section className="CardNews-container">
      <img src={image} alt={title} />

      <p className="CardNews-date">{date}</p>

      <div className="CardNews-title-wrapper">
        <p className="CardNews-title">
          {title.split(" ")[0]} {title.split(" ")[1]}
        </p>

        <p className="CardNews-title">
          {title.split(" ")[2]} {title.split(" ")[3]} ......
        </p>
      </div>

      <div className="CardNews-read-more-wrapper">
        <img src={readMoreIcon} alt="Read More icon" />

        <p className="CardNews-read-more-text">Read More</p>
      </div>
    </section>
  );
}

export default CardNews;
