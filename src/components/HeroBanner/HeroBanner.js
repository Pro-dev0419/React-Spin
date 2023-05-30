import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { bannerLogo } from "../../assets/image";

import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="main-hero-banner">
      <div className="main-hero-banner-wrapper">
        <Container>
          <Row>
            <Col lg={6} xxl={6}>
              <div className="hero-left">
                <h1>
                  Open Mystery Boxes <br /> in Real-time
                </h1>
                <p>Win NFTs and other great prizes on-chain for over 95% off</p>
                <div className="button-Section">
                  <Link to={"# "} className="btn-fluid">
                    Play Now
                  </Link>
                  {/* <button className="btn-outer">See ALL BOXES</button> */}
                </div>
              </div>
            </Col>
            <Col lg={6} xxl={6} className="p-0">
              <div className="hero-right">
                <img src={bannerLogo} alt="bg-logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroBanner;
