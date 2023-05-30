import React from "react";
import { Container, Row, Col } from "reactstrap";
import FeaturedCardItem from "../../components/FeaturedCardItem/FeaturedCardItem";
import UnboxingDropdown from "../../components/common/UnboxingDropdown/UnboxingDropdown";
import Selector from "../../components/common/Selector/Selector";
import Search from "../../components/common/Search/Search";

import "./Unboxing.scss";

const allBoxData = [
  {
    id: 1,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    percentage: 1.6,
    featured: ["New", "Featured"],
    unbox: false,
  },
  {
    id: 2,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    percentage: 0.5,
    featured: ["New"],
    unbox: false,
  },
  {
    id: 3,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    percentage: 15.07,
    featured: ["Featured"],
    unbox: false,
  },
  {
    id: 4,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    percentage: 1.66,
    featured: [],
    unbox: false,
  },
];

const FilterBoxes = () => {
  return (
    <div className="filter-boxes">
      <Container>
        <div className="filter-action">
          <h1>All BOXES</h1>
          <div className="filter-wrapper-inner">
            <UnboxingDropdown />
            <Selector />
            <Search />
          </div>
        </div>
        <div className="filter-card-wrapper">
          <Row>
            {allBoxData &&
              allBoxData.map((item, i) => (
                <Col sm={12} md={6} lg={4} xxl={3} key={i}>
                  <FeaturedCardItem data={item} />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FilterBoxes;
