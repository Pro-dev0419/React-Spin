import React from "react";
import { Row, Col } from "reactstrap";
import ReviewCardItem from "../../components/ReviewCardItem/ReviewCardItem";

const ClientReview = ({ reviewData }) => {
  return (
    <div className="review-wrapper-main">
      <h1 className="review-wrapper-title">Clients Reviews</h1>
      <Row>
        {reviewData &&
          reviewData.map((item) => (
            <Col md={12} lg={6} xxl={4} key={item.id}>
              <ReviewCardItem data={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ClientReview;
