import React from "react";
import { Card, CardBody } from "reactstrap";

import "./MechaniceCardItem.scss";

const MechaniceCardItem = ({ data }) => {
  const { img, title, paragraph } = data;
  return (
    <Card className="mechanice-custom-card">
      <div className="mechanice-custom-img">
        <div className="mechanice-image-wrapper">
          <img alt="Sample" src={img} />
        </div>
      </div>
      <CardBody className="mechanice-custom-card-body">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </CardBody>
    </Card>
  );
};

export default MechaniceCardItem;
