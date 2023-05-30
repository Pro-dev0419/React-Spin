import React from "react";

import "./FilterInput.scss";

const FilterInput = () => {
  return (
    <div className="custom-filter-input">
      <div className="custom-filter-input-icon-search">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66589 7.76553L10.8074 9.90653L10.0999 10.614L7.95889 8.47253C7.16226 9.11114 6.17139 9.45848 5.15039 9.45703C2.66639 9.45703 0.650391 7.44103 0.650391 4.95703C0.650391 2.47303 2.66639 0.457031 5.15039 0.457031C7.63439 0.457031 9.65039 2.47303 9.65039 4.95703C9.65184 5.97803 9.3045 6.9689 8.66589 7.76553ZM7.66289 7.39453C8.29745 6.74197 8.65182 5.86725 8.65039 4.95703C8.65039 3.02353 7.08389 1.45703 5.15039 1.45703C3.21689 1.45703 1.65039 3.02353 1.65039 4.95703C1.65039 6.89053 3.21689 8.45703 5.15039 8.45703C6.06061 8.45846 6.93533 8.10409 7.58789 7.46953L7.66289 7.39453Z"
            fill="white"
          />
        </svg>
        <span>NAME</span>
      </div>
      <div className="input-wrapper">
        <input type="text" />
        <button>FILTER</button>
      </div>
    </div>
  );
};

export default FilterInput;
