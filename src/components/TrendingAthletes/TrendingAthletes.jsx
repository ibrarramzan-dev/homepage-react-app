import React from "react";
import { Row, Col } from "antd";
import SliderArrows from "../SliderArrows";
import CardBasic from "../CardBasic";
import athelete1 from "./images/trending-athelete-1.png";
import athelete2 from "./images/trending-athelete-2.png";
import athelete3 from "./images/trending-athelete-3.png";

function TrendingAthletes() {
  return (
    <section className="TrendingAthletes-container">
      <div className="TrendingAthletes-heading-and-slider-arrows-wrapper">
        <div className="TrendingAthletes-heading-vertical-line" />

        <p className="TrendingAthletes-heading">Trending Atheletes</p>

        <SliderArrows />
      </div>

      <Row className="TrendingAthletes-cards-row">
        <Col>
          <CardBasic
            bgImage={athelete1}
            heading="Lorem Ipsum"
            category="Merch"
          />
        </Col>

        <Col>
          <CardBasic
            bgImage={athelete2}
            heading="Lorem Ipsum"
            category="Personal Videos"
          />
        </Col>

        <Col>
          <CardBasic
            bgImage={athelete3}
            heading="Lorem Ipsum"
            category="Live Streams"
          />
        </Col>
      </Row>
    </section>
  );
}

export default TrendingAthletes;
