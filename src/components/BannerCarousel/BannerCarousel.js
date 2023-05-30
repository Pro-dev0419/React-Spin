import React from "react";
import Slider from "react-slick";
import BannerOne from "./BannerOne";
import HeroBanner from "../HeroBanner/HeroBanner";
import "./BannerCarousel.scss";

const BannerCarousel = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="c-slick-arrow c-slick-next">
        <svg
          width="10px"
          height="14px"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.97337L2.98191 -0.000854492L10 6.99915L2.98191 13.9991L0 11.0249L4.03618 6.99915L0 2.97337Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=" c-slick-arrow c-slick-prev">
        <svg
          width="10px"
          height="14px"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2.97337L7.01809 -0.000854492L0 6.99915L7.01809 13.9991L10 11.0249L5.96382 6.99915L10 2.97337Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container-fluid p-0">
      <Slider {...settings} className="slide_main-wrapper">
        <HeroBanner />
        <BannerOne />
      </Slider>
    </div>
  );
};

export default BannerCarousel;
