import React from "react";
import { Container, Row, Col } from "reactstrap";

import WheelInfoCard from "../WheelInfoCard/WheelInfoCard";
import SpinController from "../SpinController/SpinController";
import SpinSpeedOption from "../SpinSpeedOption/SpinSpeedOption";

import "./SpinBoxInfo.scss";

const SpinBoxInfo = (props) => {
  const { demoSpinClick, setSpeedOption } = props;
  return (
    <div className="wheel-info-main" style={{marginBottom: 0}}>
      <Container>
            <SpinController demoSpinClick={demoSpinClick} />
      </Container>
    </div>
  );
};

export default SpinBoxInfo;
