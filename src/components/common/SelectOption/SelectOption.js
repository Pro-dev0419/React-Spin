import React from "react";
import { Input } from "reactstrap";

import "./SelectOption.scss";
const SelectOption = () => {
  return (
    <div>
      <Input type="select" className="custom-select-input">
        <option>Default Select</option>
        <option>option 1</option>
        <option>option 2</option>
      </Input>
    </div>
  );
};

export default SelectOption;
