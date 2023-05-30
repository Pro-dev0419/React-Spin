import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./FeaturedCardItem.scss";

const FeaturedCardItem = ({ data }) => {
  const {
    name,
    rank,
    image = "https://i.ibb.co/jTLVkrH/banner-logo.png",
    box_cost = { amount: 0, type: "SOL" },
    fee,
    _id,
    unbox = true,
    rewards = [],
    unboxColor = "#2081E2",
    des = "Can only cash the NFT",
    featured = ["New", "Featured"],
    disabled = false,
  } = data;
  let navigate = useNavigate();

  const spinningCardById = () => {
    if (!disabled) {
      navigate(`/unboxing/boxes/${_id}`);
    }
  };
  return (
    <Card className="custom-card">
      <CardTitle className="custom-tag">
        <div className="custom-tag-wrapper">
          <div className="new-tag">
            {featured &&
              featured.map((item, i) => (
                <span
                  style={{
                    background: `${item === "New" ? "#2081E2" : "#EB5757"}`,
                  }}
                  key={i}
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </CardTitle>
      <div
        className={`custom-img ${disabled && "cursor-disabled"}`}
        onClick={spinningCardById}
      >
        <div className="image-wrapper">
          <img alt="Sample" src={image} />
        </div>
      </div>
      <CardBody className="custom-card-body">
        <h2>{name}</h2>
        <p>{rewards.length} prizes</p>
        {unbox && (
          <div className="unbox-card" style={{ background: `${unboxColor}` }}>
            <span className="unbox-text">Unbox</span>
            <span className="unbox-coin">
              {box_cost.amount}{" "}
              {box_cost.type == "SPL_TOKEN"
                ? box_cost.token_name
                : box_cost.type}
            </span>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default FeaturedCardItem;
