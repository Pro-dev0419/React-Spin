import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./UnboxingDropdown.scss";

const UnboxingDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="sort-dropdown">
      <DropdownToggle
        caret
        style={{ borderRadius: `${dropdownOpen ? "6px 6px 0px 0px" : "6px"}` }}
      >
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Recommended</DropdownItem>
        <DropdownItem>Alphabetical</DropdownItem>
        <DropdownItem>Reverse Alphabetical</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UnboxingDropdown;
