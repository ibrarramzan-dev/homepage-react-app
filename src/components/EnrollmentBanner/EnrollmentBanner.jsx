import React from "react";
import enrollmentBannerOverlay from "./images/enrollment-banner-overlay.png";
import manSpeaker from "./images/man-speaker.png";
import enrollmentBannerVerticalLine from "./images/enrollment-banner-vertical-line.png";
import enrollAsAnAtheleteBtn from "./images/enroll-as-an-athelete-btn.png";

function EnrollmentBanner() {
  return (
    <section className="EnrollmentBanner-container">
      <img src={enrollmentBannerOverlay} alt="Enrollment Banner overlay" />

      <img src={manSpeaker} alt="Man speaker" />

      <div className="EnrollmentBanner-content-wrapper">
        <div className="EnrollmentBanner-content-heading-wrapper">
          <img src={enrollmentBannerVerticalLine} alt="Vertical line" />

          <p className="EnrollmentBanner-content-heading">
            Lorem ipsum dolor sit amet
          </p>
        </div>

        <div className="EnrollmentBanner-content-subheading">
          <p>
            WE Belive every athelete is also an intrepreneur . Lets build your
            brand
          </p>

          <p>on MILLIONS</p>
        </div>

        <div className="EnrollmentBanner-content-btn">
          <img src={enrollAsAnAtheleteBtn} alt="Enroll As An Athelete" />
        </div>
      </div>
    </section>
  );
}

export default EnrollmentBanner;
