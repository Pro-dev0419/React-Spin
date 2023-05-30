import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSoundOn } from "../../state/features/box/boxSlice";
import "./SpinTools.scss";
const SpinTools = () => {
  const dispatch = useDispatch();
  const soundOn = useSelector((state) => state.box.soundOn);
  // const [volume, setVolume] = useState(false);
  return (
    <Container><Container>
      <div className="spin-tool-wrapper">
        <div className="spin-tool-btn">
          <Link to={"/"}>
            <span className="spin-svg">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path
                  d="M10 2.97423L7.0181 0L1.52588e-05 7L7.0181 14L10 11.0258L5.96384 7L10 2.97423Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="spin-txt">Back</span>
          </Link>
        </div>
        <div className="spin-tool-fairness">
          <div className="spin-fairness">
            <span className="spin-fairness-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"
                ></path>
              </svg>
              <span>PROVABLY FAIR</span>
            </span>
          </div>
          <div className="spin-fairness-volume">
            <button
              className="spin-fairness-volume-btn"
              onClick={() => dispatch(setSoundOn(!soundOn))}
            >
              {soundOn ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-volume-2"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-volume-x"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </Container></Container>
  );
};

export default SpinTools;
