import React from "react";
import { Row, Col } from "antd";
import logo from "./images/logo.png";
import joinUsBtn from "./images/join-us-btn.png";
import twitterIcon from "./images/twitter-icon.png";
import fbIcon from "./images/fb-icon.png";
import youtubeIcon from "./images/youtube-icon.png";
import instagramIcon from "./images/instagram-icon.png";
import searchIcon from "./images/search-icon.png";
import hamburgerIcon from "./images/hamburger-icon.png";
import arrowDownIcon from "./images/arrow-down-icon.png";

function Header() {
  return (
    <header>
      <Row className="Header-row">
        <Col className="Header-left-col">
          <img src={logo} alt="Logo" />
        </Col>

        <Col className="Header-right-col">
          <div className="Header-right-col-social-section">
            <img src={joinUsBtn} alt="Join Us" />
            <img src={fbIcon} alt="FB" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={instagramIcon} alt="Instagram" />
          </div>

          <div className="Header-right-col-horizontal-line" />

          <div className="Header-right-col-menu-search-section">
            <div className="Header-right-col-menu-search">
              <ul>
                <li>
                  <span>Home</span>
                </li>
                <li>
                  <span>Atheletes</span>
                </li>
                <li>
                  <span>Merch</span>
                  <img src={arrowDownIcon} alt="Arrow down" />
                </li>
                <li>
                  <span>Videos</span>
                  <img src={arrowDownIcon} alt="Arrow down" />
                </li>
                <li>
                  <span>Faqs</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
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

export default Header;
