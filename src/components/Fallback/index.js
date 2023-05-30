import React from "react";
import { loading } from "../../assets/icon";
import "./index.scss";

const Fallback = () => {
  return (
    <div className="loading-fallback">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Fallback;
