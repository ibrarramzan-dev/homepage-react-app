import React from "react";
import { Row, Col } from "antd";
import SliderArrows from "../SliderArrows";
import CardItem from "../CardItem/CardItem";
import popularMerch1 from "./images/popular-merch-1.png";
import popularMerch2 from "./images/popular-merch-2.png";
import popularMerch3 from "./images/popular-merch-3.png";
import popularMerch4 from "./images/popular-merch-4.png";

function PopularMerch() {
  return (
    <section className="PopularMerch-container">
      <div className="PopularMerch-heading-and-slider-arrows-wrapper">
        <p>Popular Merch</p>

        <div className="PopularMerch-slider-arrows-wrapper">
          <SliderArrows />
        </div>
      </div>

      <Row className="PopularMerch-cards-row">
        <Col>
          <CardItem
            image={popularMerch1}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"
            price={28.69}
          />
        </Col>

        <Col>
          <CardItem
            image={popularMerch2}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"
            price={23.73}
          />
        </Col>

        <Col>
          <CardItem
            image={popularMerch3}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"
            price={23.73}
          />
        </Col>

        <Col>
          <CardItem
            image={popularMerch4}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"
            price={40.73}
          />
        </Col>
      </Row>
    </section>
  );
}

export default PopularMerch;
