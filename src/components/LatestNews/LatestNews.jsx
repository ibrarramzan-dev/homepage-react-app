import React from "react";
import { Row, Col } from "antd";
import CardNews from "../CardNews";
import thumbnail1 from "./images/latest-news-thumbnail-1.png";
import thumbnail2 from "./images/latest-news-thumbnail-2.png";
import thumbnail3 from "./images/latest-news-thumbnail-3.png";

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
    </section>
  );
}

export default LatestNews;
