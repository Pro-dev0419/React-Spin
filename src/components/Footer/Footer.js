import React from "react";
import { Container, Row, Col } from "reactstrap";

import {
  icon_discord,
  icon_me,
  icon_twitter,
  LogoSvg,
} from "../../assets/icon";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="line-height"></div>
      <Container className="first-row">
        <Row>
          <Col sm={12} md={6} lg={4} xxl={4}>
            <div className="footer-left">
              <img src={LogoSvg} alt="logo" />
              <p>
                Solana's first on-chain loot box game. Open boxes and spin the
                wheel using Sol, tokens, and reward points to win NFTs and other
                fantastic prizes.
              </p>
            </div>
          </Col>
          <Col>
            <div className="category">
              <span className="category-heading">Pages</span>
              <ul className="footer-nav">
                <li>
                  <a href="/unboxing">Unboxing</a>
                </li>
                {/* <li>
                  <a href="/">Battles</a>
                </li> */}
                {/* <li>
                  <a href="/">Affiliates</a>
                </li> */}
                <li>
                  <a href="/mechanics">Mechanics</a>
                </li>
                {/* <li>
                  <a href="/">Free spins</a>
                </li> */}
              </ul>
            </div>
          </Col>
          <Col>
            <div className="category">
              <span className="category-heading">Community</span>
              <ul className="footer-nav">
                <li>
                  <a
                    href="https://twitter.com/DegenLabs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/DegenLabs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                {/* <li>
                  <a href="/">Instagram</a>
                </li> */}
              </ul>
            </div>
          </Col>
          <Col>
            <div className="category">
              <span className="category-heading">Support</span>
              <ul className="footer-nav">
                <li>
                  <a
                    href="https://discord.gg/DegenLabs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            <span className="footer-down-left">
              © 2023 DegenDrop. All Rights Reserved
            </span>
          </Col>
          <Col sm={12} md={3}>
            <div className="footer_down_right">
              <a
                href="https://discord.gg/DegenLabs"
                className="socoal_link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon_discord} alt="icon_discord" />
              </a>
              <a
                href="https://magiceden.io/creators/degenlabs"
                className="socoal_link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon_me} alt="icon_discord" />
              </a>
              <a
                href="https://twitter.com/DegenLabs"
                className="socoal_link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon_twitter} alt="icon_discord" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="second-row">
        <div className="footer_down_right">
          <a
            href="https://discord.gg/DegenLabs"
            className="socoal_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon_discord} alt="icon_discord" />
          </a>
          <a
            href="https://magiceden.io/creators/degenlabs"
            className="socoal_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon_me} alt="icon_discord" />
          </a>
          <a
            href="https://twitter.com/DegenLabs"
            className="socoal_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={icon_twitter} alt="icon_discord" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
