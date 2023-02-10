import React from "react";
import { Row, Col } from "antd";
import horizontalLine from "./images/footer-horizontal-line.png";
import logo from "./images/logo.png";
import telephoneIcon from "./images/telephone-icon.png";
import mailIcon from "./images/mail-icon.png";
import locationIcon from "./images/location-icon.png";
import fbIcon from "./images/fb-icon.png";
import twitterIcon from "./images/twitter-icon.png";
import youtubeIcon from "./images/youtube-icon.png";
import instagramIcon from "./images/instagram-icon.png";

function Footer() {
  return (
    <footer>
      <img
        className="Footer-horizontal-line-top"
        src={horizontalLine}
        alt="Horizontal line"
      />

      <Row className="Footer-row">
        <Col>
          <img src={logo} alt="logo" />
        </Col>

        <Col>
          <ul>
            <li>Personal Videos</li>
            <li>Streams</li>
            <li>Merch</li>
            <li>Find Your Order</li>
          </ul>
        </Col>

        <Col>
          <ul>
            <li>Athelets</li>
            <li>Gyms</li>
          </ul>
        </Col>

        <Col>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </Col>

        <Col>
          <div className="Footer-contact-icon-with-text">
            <div className="Footer-contact-icon-wrapper">
              <img src={telephoneIcon} alt="Telephone" />
            </div>

            <p className="Footer-contact-text">1-234-5-678</p>
          </div>

          <div className="Footer-contact-icon-with-text">
            <div className="Footer-contact-icon-wrapper">
              <img src={mailIcon} alt="Mail" />
            </div>

            <p className="Footer-contact-text">abc11@gmail.com</p>
          </div>

          <div className="Footer-contact-icon-with-text">
            <div className="Footer-contact-icon-wrapper">
              <img src={locationIcon} alt="Mail" />
            </div>

            <div>
              <p>60 east 65th street</p>
              <p>minneapolis</p>
            </div>
          </div>

          <div className="Footer-contact-social-icons-wrapper">
            <img src={fbIcon} alt="FB" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={instagramIcon} alt="Insta" />
          </div>
        </Col>
      </Row>

      <img
        className="Footer-horizontal-line-bottom"
        src={horizontalLine}
        alt="Horizontal line"
      />
    </footer>
  );
}

export default Footer;
