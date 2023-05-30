import React from "react";
import { Card } from "reactstrap";

import "./RecentlyUnboxCard.scss";

const RecentlyUnboxCard = ({ data }) => {
  const { img, price } = data;
  return (
    <Card className="custom-unbox-card">
      <div className="custom-unbox-img">
        <div className="unbox-image-wrapper">
          <img alt="Sample" src={img} />
        </div>
      </div>
      <div className="unbox-custom-card-body">
        <span>{price} SOL</span>
      </div>
    </Card>
  );
};

export default RecentlyUnboxCard;
