import React from "react";
import "./BannerCarousel.scss";
import { useNavigate } from "react-router-dom";
const BannerOne = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-one">
      <div
        className="banner-img"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/xXWP7x9/KINGDIGIBANNER.png")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner-content" >
          <div className="banner-content-wrapper"  style={{marginTop: 185}}>
            {/* <img src="https://i.ibb.co/Gd9cCzd/lolo-1.png" alt="logo" /> */}
            <button onClick={()=>{navigate("/unboxing/boxes/645e9ccb028cbc2637b802f8")}}>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
