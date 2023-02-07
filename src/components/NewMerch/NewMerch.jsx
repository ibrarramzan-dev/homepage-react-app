import React from "react";
import newMerchOverlay from "./images/new-merch-overlay.png";
import newMerch from "./images/new-merch.png";
import shopNowBtn from "./images/shop-now-btn.png";

function NewMerch() {
  return (
    <section className="NewMerch-container">
      <img
        className="NewMerch-image-overlay"
        src={newMerchOverlay}
        alt="New Merch overlay"
      />

      <img className="NewMerch-image" src={newMerch} alt="New Merch" />

      <div className="NewMerch-content-wrapper">
        <div className="NewMerch-content-heading-wrapper">
          <div className="NewMerch-content-heading-vertical-line" />

          <div className="NewMerch-content-heading">
            <p>New Merch Drops</p>
            <p>Every Week</p>
          </div>
        </div>

        <div className="NewMerch-content-subheading">
          <p>
            Don’t miss out on the new merch drops every week from the thousands{" "}
          </p>
          <p>of professional athelets on Millions</p>
        </div>

        <div className="NewMerch-content-button-wrapper">
          <img src={shopNowBtn} alt="Shop Now" />
        </div>
      </div>
    </section>
  );
}

export default NewMerch;
