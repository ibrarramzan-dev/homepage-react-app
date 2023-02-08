import React from "react";
import sliderImg1 from "./images/homepage-top-slider-img-1.png";

function MainSlider() {
  return (
    <section className="MainSlider-container">
      <img src={sliderImg1} alt="Slider img 1" />

      <div className="MainSlider-content-wrapper">
        <div className="MainSlider-content-vertical-line"></div>

        <div className="MainSlider-content-text">
          <p>Lorem ipsum</p>
          <p>dolor sit</p>
          <p>amet, consec</p>
        </div>
      </div>
    </section>
  );
}

export default MainSlider;
