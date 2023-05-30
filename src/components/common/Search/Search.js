import React from "react";
import { SearchIcon } from "../../../assets/icon";

import "./Search.scss";

const Search = () => {
  return (
    <div className="form-group has-search">
      <img src={SearchIcon} alt="search" className="form-control-feedback" />
      <input type="text" className="form-control" placeholder="Search..." />
    </div>
  );
};

export default Search;
