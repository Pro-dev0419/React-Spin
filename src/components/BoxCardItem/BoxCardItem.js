import React from "react";
import { Card } from "reactstrap";
import "./BoxCardItem.scss";
import { RARITY_COLORS } from "../../utils/constants";

export const getColoredIcon = (color) => {
  switch (color) {
    case "UNCOMMON":
      return "/icons/blue-mask.png";
    case "LEGENDARY":
      return "/icons/golden-mask.png";
    case "EPIC":
      return "/icons/purple-mask.png";
    case "RARE":
      return "/icons/green-mask.png";
    default:
      return "/icons/grey-mask.png";
  }
};

const BoxCardItem = ({ data }) => {
  const {
    image = "https://i.ibb.co/qRTPysz/Rectangle-76.png",
    unboxAmount,
    amount,
    decimals,
    name,
    probability,
    type,
    nft_mints,
    rarity,
    balance,
  } = data;

  return (
    <Card
      className="box-custom-card"
      style={{ background: RARITY_COLORS[rarity] }}
    >
      <div className="box-custom-head">
        <div className="box-custom-text" style={{ color: "white", opacity: 1 }}>
          {Number((probability.value / probability.out_of) * 100).toFixed(3)}%
        </div>
        <img
          className="box-custom-imgs"
          src={getColoredIcon(rarity)}
          alt="logo"
        />
      </div>
      <div className="box-custom-img">
        <div className="box-image-wrapper">
          <img alt="Sample" src={image} style={{ height: "100%" }} />
          {type == "NFT" && nft_mints.available <= 0 ? (
            <img alt="Sample" src={"/SOLD_OUT.png"} />
          ) : null}
        </div>
      </div>
      <div className="box-custom-footer">
        <h4>{name}</h4>
        {/* <p>{balance} available</p> */}
      </div>
    </Card>
  );
};

export default BoxCardItem;
