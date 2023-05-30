import React from "react";
import { Container, Row, Col } from "reactstrap";
import MechaniceCardItem from "../../components/MechaniceCardItem/MechaniceCardItem";

import "./Mechanices.scss";

const mechaniceData = [
  {
    id: 1,
    img: "https://i.ibb.co/Xs1z0jT/one.png",
    title: "What is DegenDrop?",
    paragraph:
      "DegenDrop is Solana’s first on-chain mystery box game with the ability to reward NFTs directly. It’s exciting, fast-paced and allows players to win prizes at an unbelievably low cost. Our site catalogues NFTs from across a wide variety of collections offering a wide variety to select from.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/5vbLmRc/Group-1625.png",
    title: "On-chain & Provably Fair",
    paragraph: `Every time players open a new mystery box, a random spinner determines the item rewarded. After a prize is won, it's sent directly to the connected wallet, all on-chain!
     To keep things fair and fun, we use a provably fair method to determine each item unboxed and clearly display the probability of winning each item individually.
     Every play is assigned to a roll number, ensuring the probability of a particular outcome will never change, even if it's played a million times. We don't use a pattern or set system to determine when the big-ticket items will be won; our methodology is always pure randomness.`,
  },
  {
    id: 3,
    img: "https://i.ibb.co/Bgps3yY/Group-1619.png",
    title: "Web3 Ready",
    paragraph:
      "DegenDrop is completely web3 ready, and getting started is easy. There's no need for a complicated sign-up, username, or password to track. The only thing needed to start playing is a compatible Solana wallet, and you're all set; your wallet is your account. Instantly connect, open boxes, and spin the wheel to win big!",
  },
];

const MechaniceCard = () => {
  return (
    <div className="mechanics-wrapper">
      <Container>
        <h1 className="mechanics-title">Mechanics</h1>
        <Row>
          {mechaniceData &&
            mechaniceData.map((item, i) => (
              <Col sm={12} md={6} lg={4} xxl={4} key={i}>
                <MechaniceCardItem data={item} />
              </Col>
            ))}
        </Row>
        <div className="view-all">
          {/* <span className="view-all-btn">load more</span> */}
        </div>
      </Container>
    </div>
  );
};

export default MechaniceCard;
