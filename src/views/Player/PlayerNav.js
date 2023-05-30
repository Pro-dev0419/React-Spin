import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./player.scss";

const PlayerNav = () => {
  return (
    <Container>
      <nav className="player-nav">
        <ul>
          <li>
            <Link to={"game-history"} className="btn btn-primary custom-btn">
              GAME HISTORY
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default PlayerNav;
