import React, { useState } from "react";
import { Button } from "reactstrap";

import "./Selector.scss";

const Selector = () => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <div className="btn-group">
      <Button
        className="custom-btn"
        onClick={() => setRSelected(1)}
        active={rSelected === 1}
      >
        New
      </Button>
      <Button
        className="custom-btn"
        onClick={() => setRSelected(2)}
        active={rSelected === 2}
      >
        Featured
      </Button>
    </div>
  );
};

export default Selector;
