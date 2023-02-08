import React from "react";
import { Row, Col } from "antd";
import SliderArrows from "../SliderArrows";
import CardVideo from "../CardVideo";
import personalVideosThumbnail1 from "./images/personal-videos-thumbnail-1.png";
import personalVideosThumbnail2 from "./images/personal-videos-thumbnail-2.png";
import personalVideosThumbnail3 from "./images/personal-videos-thumbnail-3.png";

function PersonalVideos() {
  return (
    <section className="PersonalVideos-container">
      <div className="PersonalVideos-heading-and-slider-arrows">
        <p className="PersonalVideos-heading">Personal Videos</p>

        <div className="PersonalVideos-slider-arrows">
          <SliderArrows />
        </div>
      </div>

      <Row className="PersonalVideos-row">
        <Col>
          <CardVideo
            image={personalVideosThumbnail1}
            title="Lorem ipsum"
            price={93.75}
          />
        </Col>

        <Col>
          <CardVideo
            image={personalVideosThumbnail2}
            title="Lorem ipsum"
            price={37.5}
          />
        </Col>

        <Col>
          <CardVideo
            image={personalVideosThumbnail3}
            title="Lorem ipsum"
            price={22.5}
          />
        </Col>
      </Row>
    </section>
  );
}

export default PersonalVideos;
