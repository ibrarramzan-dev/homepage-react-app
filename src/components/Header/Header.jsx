import React from "react";
import { Row, Col } from "antd";
import logo from "./images/logo.png";
import joinUsBtn from "./images/join-us-btn.png";
import fbIcon from "./images/fb-icon.png";
import twitterIcon from "./images/twitter-icon.png";
import youtubeIcon from "./images/youtube-icon.png";
import instagramIcon from "./images/instagram-icon.png";
import searchIcon from "./images/search-icon.png";
import hamburgerIcon from "./images/hamburger-icon.png";
import arrowDownIcon from "./images/arrow-down-icon.png";

export default function Header() {
  return (
    <header>
      <Row className="Header-row">
        <Col className="Header-left-col">
          <img src={logo} alt="Logo" />
        </Col>
        <Col className="Header-right-col">
          <div className="Header-right-col-social-section">
            <img src={joinUsBtn} alt="Join Us" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={instagramIcon} alt="Instagram" />
          </div>

          <div className="Header-right-col-horizontal-line" />

          <div className="Header-right-col-menu-search-section">
            <div className="Header-right-col-menu-search">
              <ul>
                <li>Home</li>
                <li>Atheletes</li>
                <li>
                  Merch
                  <img src={arrowDownIcon} alt="Arrow down" />
                </li>
                <li>
                  Videos
                  <img src={arrowDownIcon} alt="Arrow down" />
                </li>
                <li>Faqs</li>
                <li>Contact</li>
              </ul>

              <img src={searchIcon} alt="Search" />
            </div>

            <div className="Header-right-col-menu-search-section-vertical-line" />

            <img
              className="Header-right-col-menu-search-section-hamburger"
              src={hamburgerIcon}
              alt="Expand Menu"
            />
          </div>
        </Col>
      </Row>
    </header>
  );
}
