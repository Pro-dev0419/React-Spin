import React, { useState, useEffect, useRef } from "react";
import { SearchIcon } from "../../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import { filterSearch } from "../../../state/features/filter/filterSlice";
import "./Search.scss";

const DynamicSearch = () => {
  const searchText = useSelector((state) => state.filters.searchText);
  const [visible, setVisible] = useState(false);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  let debounce = (fn, delay) => {
    let timerId;
    return function (searchText) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(searchText);
      }, delay);
    };
  };

  const handleClick = async () => {
    await setVisible(!visible);
    await inputRef.current.focus();
  };
  const handleSearch = (e) => {
    dispatch(filterSearch(e.target.value));
  };

  useEffect(() => {
    if (searchText) {
      debounce(searchText);
    }
  }, [searchText, dispatch]);

  return (
    <div className="form-group has-search-dynamic">
      <span className="search-btn" onClick={handleClick}>
        <img src={SearchIcon} alt="search" className="form-control-feedback" />
      </span>
      <input
        ref={inputRef}
        onChange={handleSearch}
        type="text"
        className={`form-control-dynamic ${
          visible ? "display-visible" : "display-hidden"
        } `}
        placeholder="Search..."
      />
    </div>
  );
};

export default DynamicSearch;
