import React from "react";
import { Row, Col } from "antd";
import SliderArrows from "../SliderArrows";
import CardBasic from "../CardBasic";
import thumbnail1 from "./images/organizations-thumbnail1.png";
import thumbnail2 from "./images/organizations-thumbnail2.png";
import thumbnail3 from "./images/organizations-thumbnail3.png";

function Organizations() {
  return (
    <section className="Organizations-container">
      <div className="Organizations-heading-and-slider-arrows-wrapper">
        <div className="Organizations-heading-vertical-line" />

        <p className="Organizations-heading">Organizations</p>

        <div className="Organizations-slider-arrows-wrapper">
          <SliderArrows />
        </div>
      </div>

      <Row className="Organizations-cards-row">
        <Col>
          <CardBasic
            bgImage={thumbnail1}
            heading="Lorem ipsum"
            category="Merch"
          />
        </Col>

        <Col>
          <CardBasic
            bgImage={thumbnail2}
            heading="Lorem ipsum"
            category="Personal Videos"
          />
        </Col>

        <Col>
          <CardBasic
            bgImage={thumbnail3}
            heading="Lorem ipsum"
            category="Live Streams"
          />
        </Col>
      </Row>
    </section>
  );
}

export default Organizations;
