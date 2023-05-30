import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

import "./player.scss";

const PlayerCard = () => {
  const stateWallet = useSelector((state) => state.wallet.wallet);

  const firstAndLast =
    stateWallet?.slice(0, 10) + "..." + stateWallet?.slice(-4);

  return (
    <Container>
      <div className="card custom-player-card">
        <div className="custom-player-card-info">
          <span>
            <img src="https://i.ibb.co/zHnkwrv/user.png" alt="icon" />
          </span>
          <p>{firstAndLast}</p>
        </div>
      </div>
    </Container>
  );
};

export default PlayerCard;
