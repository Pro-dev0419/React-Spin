import React from "react";

import "./SpinSpeedOption.scss";

const SpinSpeedOption = (props) => {
  const { setSpeedOption } = props;
  return (
    <div className="speed-option">
      <h1>Speed Options</h1>
      <div className="custom-radio-btn">
        <form>
          <label onClick={() => setSpeedOption("regular")}>
            <input type="radio" name="radio" defaultChecked />
            {/* checked={true} */}
            <span>Regular</span>
          </label>
          {/* <label onClick={() => setSpeedOption("fast")}>
            <input type="radio" name="radio" />
            <span>Fast</span>
          </label> */}
        </form>
      </div>
    </div>
  );
};

export default SpinSpeedOption;
