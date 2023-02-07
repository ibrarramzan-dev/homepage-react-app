import React from "react";
import arrowLeftIcon from "./images/back-arrow-left-icon.png";
import arrowRightIcon from "./images/next-arrow-right-icon.png";

export default function SliderArrows() {
  return (
    <div className="SliderArrows-container">
      <img src={arrowLeftIcon} alt="Back" />
      <img src={arrowRightIcon} alt="Next" />
    </div>
  );
}
