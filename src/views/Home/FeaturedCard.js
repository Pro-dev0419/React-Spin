import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import FeaturedCardItem from "../../components/FeaturedCardItem/FeaturedCardItem";
import FeaturedCardItemSkeleton from "../../components/FeaturedCardItemSkeleton/FeaturedCardItemSkeleton";
import { useSelector } from "react-redux";
import _ from "lodash";
const featuredBoxes = [
  {
    id: 1,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New", "Featured"],
    unbox: true,
    unboxColor: "#2081E2",
    unboxAmount: 1.6,
  },
  {
    id: 2,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New"],
    unbox: true,
    unboxColor: "#19BD66",
    unboxAmount: 0.8,
  },
  {
    id: 3,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["Featured"],
    unbox: true,
    unboxColor: "#9D63D2",
    unboxAmount: 0.1,
  },
  {
    id: 4,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: [],
    unbox: true,
    unboxColor: "#F34747",
    unboxAmount: 0.7,
  },
  {
    id: 1,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New", "Featured"],
    unbox: true,
    unboxColor: "#2081E2",
    unboxAmount: 1.6,
  },
  {
    id: 2,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New"],
    unbox: true,
    unboxColor: "#19BD66",
    unboxAmount: 0.8,
  },
  {
    id: 3,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["Featured"],
    unbox: true,
    unboxColor: "#9D63D2",
    unboxAmount: 0.1,
  },
  {
    id: 4,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: [],
    unbox: true,
    unboxColor: "#F34747",
    unboxAmount: 0.7,
  },
  {
    id: 1,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New", "Featured"],
    unbox: true,
    unboxColor: "#2081E2",
    unboxAmount: 1.6,
  },
  {
    id: 2,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New"],
    unbox: true,
    unboxColor: "#19BD66",
    unboxAmount: 0.8,
  },
  {
    id: 3,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["Featured"],
    unbox: true,
    unboxColor: "#9D63D2",
    unboxAmount: 0.1,
  },
  {
    id: 4,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: [],
    unbox: true,
    unboxColor: "#F34747",
    unboxAmount: 0.7,
  },
  {
    id: 1,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New", "Featured"],
    unbox: true,
    unboxColor: "#2081E2",
    unboxAmount: 1.6,
  },
  {
    id: 2,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["New"],
    unbox: true,
    unboxColor: "#19BD66",
    unboxAmount: 0.8,
  },
  {
    id: 3,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: ["Featured"],
    unbox: true,
    unboxColor: "#9D63D2",
    unboxAmount: 0.1,
  },
  {
    id: 4,
    img: "https://i.ibb.co/jTLVkrH/banner-logo.png",
    title: "SAMPLE LOOT BOX",
    des: "Can only cash the NFT",
    // percentage: 1.66,
    featured: [],
    unbox: true,
    unboxColor: "#F34747",
    unboxAmount: 0.7,
  },
];

// https://i.ibb.co/br8x94y/Blue-Biker-Box-Soon.png
// https://i.ibb.co/hdF6trh/Bronze-Biker-Box-Soon.png
// https://i.ibb.co/6wd6zCm/Gold-Biker-Box-Soon.png
// https://i.ibb.co/k9CvQKM/Silver-Biker-Box-Soon.png

const data = [
  {
    id: 1,
    image: "https://i.ibb.co/br8x94y/Blue-Biker-Box-Soon.png",
    name: "BLUE BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "biker",
    disabled: true,
  },
  {
    id: 2,
    image: "https://i.ibb.co/hdF6trh/Bronze-Biker-Box-Soon.png",
    name: "BRONZE BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "biker",
    disabled: true,
  },
  {
    id: 3,
    image: "https://i.ibb.co/6wd6zCm/Gold-Biker-Box-Soon.png",
    name: "GOLD BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "biker",
    disabled: true,
  },
  {
    id: 4,
    image: "https://i.ibb.co/k9CvQKM/Silver-Biker-Box-Soon.png",
    name: "SILVER BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "biker",
    disabled: true,
  },
  {
    id: 0,
    image: "https://i.ibb.co/BthzdN3/SPIN-BOX.png",
    name: "coming soon",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "coming",
    disabled: true,
  },
  {
    id: 1,
    image: "https://i.ibb.co/br8x94y/Blue-Biker-Box-Soon.png",
    name: "BLUE BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "coming",
    disabled: true,
  },
  {
    id: 2,
    image: "https://i.ibb.co/hdF6trh/Bronze-Biker-Box-Soon.png",
    name: "BRONZE BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "coming",
    disabled: true,
  },
  {
    id: 3,
    image: "https://i.ibb.co/6wd6zCm/Gold-Biker-Box-Soon.png",
    name: "GOLD BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "coming",
    disabled: true,
  },

  {
    id: 4,
    image: "https://i.ibb.co/k9CvQKM/Silver-Biker-Box-Soon.png",
    name: "SILVER BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "coming",
    disabled: true,
  },
  {
    id: 0,
    image: "https://i.ibb.co/BthzdN3/SPIN-BOX.png",
    name: "coming soon",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "free",
    disabled: true,
  },
  {
    id: 1,
    image: "https://i.ibb.co/br8x94y/Blue-Biker-Box-Soon.png",
    name: "BLUE BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "free",
    disabled: true,
  },
  {
    id: 2,
    image: "https://i.ibb.co/hdF6trh/Bronze-Biker-Box-Soon.png",
    name: "BRONZE BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "free",
    disabled: true,
  },
  {
    id: 3,
    image: "https://i.ibb.co/6wd6zCm/Gold-Biker-Box-Soon.png",
    name: "GOLD BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "free",
    disabled: true,
  },
  {
    id: 4,
    image: "https://i.ibb.co/k9CvQKM/Silver-Biker-Box-Soon.png",
    name: "SILVER BIKER BOX",
    featured: ["coming soon"],
    unbox: false,
    unboxColor: "#F34747",
    type: "free",
    disabled: true,
  },
];
const FeaturedCard = (props) => {
  const { isLoading } = props;
  const boxes = useSelector((state) => state.box.boxes);
  const { searchText, select } = useSelector((state) => state.filters);

  const filterData = boxes
    ?.filter(
      (item) => select == null || select.includes(item?.box_cost?.token_name)
    )
    ?.filter((item) =>
      item?.name.toLowerCase().includes(searchText?.toLowerCase())
    );

  const filterExtraData = data?.filter(
    (item) => select !== null && select.includes(item?.type)
  );
  return (
    <div className="featured-card">
      {filterData.length > 0 ? (
        <Row>
          {filterData &&
            _.sortBy(filterData, "rank").map((item, i) => (
              <Col sm={12} md={6} lg={4} xxl={3} key={i}>
                {isLoading ? (
                  <>
                    <FeaturedCardItemSkeleton />
                  </>
                ) : (
                  <FeaturedCardItem data={item} />
                )}
              </Col>
            ))}
        </Row>
      ) : (
        <div className="">
          <Row>
            {filterExtraData.map((item, i) => (
              <Col sm={12} md={6} lg={4} xxl={3} key={i}>
                <FeaturedCardItem data={item} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default FeaturedCard;
