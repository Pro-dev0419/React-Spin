import React, { useEffect } from "react";
import { Container } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { getBoxes } from "../../state/actions/boxActions";
import { setCurrentBox, setBoxes } from "../../state/features/box/boxSlice";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FeaturedCard from "./FeaturedCard";
import ClientReview from "./ClientReview";

import CustomSelector from "../../components/common/Selector/CustomSelector";
import DynamicSearch from "../../components/common/Search/DynamicSearch";
import SelectOption from "../../components/common/SelectOption/SelectOption";

import "./Home.scss";

const reviewData = [
  {
    id: 1,
    avatarImg: "https://i.ibb.co/mX0bjDt/mask.png",
    name: "David Fincher",
    comment: "Will Recommend!",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 3,
  },
  {
    id: 2,
    avatarImg: "https://i.ibb.co/njFGFSs/Ellipse-7-1.png",
    name: "Alex James",
    comment: "Pretty Good",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 4,
  },
  {
    id: 3,
    avatarImg: " https://i.ibb.co/dgCd98Z/Ellipse-7.png",
    name: "William",
    comment: "Amazing Website",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
  },
];

const Home = () => {
  const item = useSelector((state) => state.item);
  // console.log("🚀 ~ file: index.js:46 ~ Home ~ tags:", item);
  const dispatch = useDispatch();

  const getAllBoxes = async () => {
    let { boxes } = await getBoxes();
    dispatch(setBoxes(boxes));
  };
  useEffect(() => {
    getAllBoxes();
    // dispatch(fetchBoxes());
  }, [dispatch]);

  return (
    <>
      {/* <HeroBanner /> */}
      <BannerCarousel />
      <Container>
        <SectionTitle title="FEATURED BOXES" />
        <div className="filter-wrapper-inner">
          <CustomSelector />
          <div className="divider"></div>
          <DynamicSearch />
        </div>
        {/* <div className="drop-down-wrapper">
          <h5>Order By</h5>
          <SelectOption />
        </div> */}
        <FeaturedCard isLoading={item?.isLoading} />
        {/* <ClientReview reviewData={reviewData} /> */}
      </Container>
    </>
  );
};

export default Home;
