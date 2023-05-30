import React from "react";
import { Card } from "reactstrap";

import { bannerLogo } from '../../assets/image';

import "./WheelInfoCard.scss";

const WheelInfoCard = (props) => {
  let { image } = props;
  if (!image) image = bannerLogo;
  
  return (
    <Card className="custom-box-info-card">
      <div className="image-wrapper">
        <img alt="Sample" src={image} />
      </div>
    </Card>
  );
};

export default WheelInfoCard;
