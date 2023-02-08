import React from "react";
import { Row, Col } from "antd";
import CardNews from "../CardNews";
import thumbnail1 from "./images/latest-news-thumbnail-1.png";
import thumbnail2 from "./images/latest-news-thumbnail-2.png";
import thumbnail3 from "./images/latest-news-thumbnail-3.png";
import sliderDots from "./images/latest-news-slider-dots.png";

function LatestNews() {
  return (
    <section className="LatestNews-container">
      <p className="LatestNews-heading">Latest News</p>

      <Row className="LatestNews-cards-row">
        <Col>
          <CardNews
            image={thumbnail1}
            date="30 | OCTOBER"
            title="Lorem ipsum dolor sit"
          />
        </Col>

        <Col>
          <CardNews
            image={thumbnail2}
            date="29 | OCTOBER"
            title="Lorem ipsum dolor sit"
          />
        </Col>

        <Col>
          <CardNews
            image={thumbnail3}
            date="28 | OCTOBER"
            title="Lorem ipsum dolor sit"
          />
        </Col>
      </Row>

      <img
        className="LatestNews-cards-slider-dots"
        src={sliderDots}
        alt="Slider dots"
      />

      <div className="LatestNews-subscribe-email-wrapper">
        <input type="text" placeholder="YOUR EMAIL" />

        <div className="LatestNews-subscribe-btn">
          <p>Subscribe</p>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
