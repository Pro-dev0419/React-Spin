import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactStarRating from "react-star-ratings-component";

import "./ReviewCardItem.scss"

const ReviewCardItem = ({ data }) => {
  const { avatarImg, name, comment, paragraph, rating } = data;
  return (
    <Card className="review-card">
      <CardTitle className="review-card-avatar">
        <div className="review-avatar-wrapper">
          <span className="img-wrapper">
            <img src={avatarImg} alt="a" />
          </span>
          <div className="review-avatar-title">
            <h3>{name}</h3>
            <span>{comment}</span>
          </div>
        </div>
      </CardTitle>
      <CardBody className="review-card-body">
        <p>{paragraph}</p>
        <ReactStarRating
          numberOfStar={5}
          numberOfSelectedStar={rating}
          colorFilledStar="#E7B10A"
          colorEmptyStar="#fff"
          starSize="24px"
          spaceBetweenStar="5px"
          disableOnSelect={true}
          onSelectStar={(val) => {
            console.log(val);
          }}
        />
      </CardBody>
    </Card>
  );
};

export default ReviewCardItem;
