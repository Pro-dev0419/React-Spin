import React, { useState, useEffect, useRef } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { filterSelect } from "../../../state/features/filter/filterSlice";
import "./Selector.scss";

const CustomSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "ALL", value: null },
    { label: "SOL", value: "SOL" },
    { label: "BOLT", value: "BOLT" },
    { label: "COMING SOON", value: "coming" },
    { label: "BIKER BOX", value: "biker" },
    { label: "FREE", value: "free" },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterSelect(selectedOption));
  }, [dispatch, selectedOption]);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function handleDropdownClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="custom-btn-group">
        {options.map((option) => (
          <Button
            key={option.value}
            className="custom-btn"
            onClick={() => handleOptionClick(option.value)}
            active={option.value === selectedOption}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="custom-dropdown-group">
        <div className="custom-dropdown-wrapper" ref={wrapperRef}>
          <div className="custom-dropdown" onClick={handleDropdownClick}>
            <div className="selected-option">
              {options.find((option) => option.value === selectedOption)
                ?.label || "ALL"}
            </div>
            <div className={`dropdown-icon ${isOpen ? "open" : ""}`}></div>
          </div>
          {isOpen && (
            <ul className="dropdown-options">
              {options.map((option) => (
                <li
                  key={option.value}
                  className={`dropdown-option ${
                    option.value === selectedOption ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomSelector;
