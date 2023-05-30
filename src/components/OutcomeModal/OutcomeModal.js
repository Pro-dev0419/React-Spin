import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useParams } from "react-router-dom";
import { Card } from "reactstrap";
import { warning, tweet } from "../../assets/icon";
import { useSelector } from "react-redux";
// import { TwitterShareButton } from "react-share";
// import { TwitterTweetButton } from "react-social-sharebuttons";
import { Share } from "react-twitter-widgets";

import "./OutcomeModal.scss";

const OutcomeModal = (props) => {
  const { winners, openModal, setOpenModal, continueSpin } = props;
  const boxData = useSelector((state) => state.box.currentBox);
  const rewardTxs = useSelector((state) => state.wheel.rewardTxs);
  const winnerData = useSelector((state) => state.wheel.winners);
  // console.log(
  //   "🚀 ~ file: OutcomeModal.js:12 ~ OutcomeModal ~ winnerData:",
  //   winnerData
  // );
  const params = useParams();
  // console.log("🚀 ~ file: OutcomeModal.js:21 ~ OutcomeModal ~ params:", params);
  const toggle = () => {
    if (openModal) {
      continueSpin();
      setOpenModal(!openModal);
    }
  };
  return (
    <Modal
      isOpen={openModal}
      toggle={toggle}
      centered
      className="outcome-modal-main"
    >
      <ModalBody>
        <h2>{winnerData?.name}</h2>
        <div className="outcome-content">
          <Card className="outcome-img">
            <img src={winnerData?.image} alt="robot" />
          </Card>
          {/* <span className="outcome-share">
            <img src={tweet} alt="icon" />
            <span>twitter</span>
          </span> */}
        </div>
        <div className="warning-wrapper">
          <span>
            Spin Tx:{" "}
            <a
              href={`https://solscan.io/tx/${rewardTxs?.reward.spin_tx}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={"/solscan.png"} alt="warning" style={{ height: 20 }} />
            </a>
          </span>
          <span>
            {rewardTxs?.reward?.nft_transfer_tx ? `Result Tx:${" "}`: `Payout Tx:${" "}`}
            <a
              href={`https://solscan.io/tx/${rewardTxs?.reward.reward_tx}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={"/solscan.png"} alt="warning" style={{ height: 20 }} />
            </a>
          </span>
          {rewardTxs?.reward?.nft_transfer_tx ? (
            <span>
              Payout Tx:{" "}
              <a
                href={`https://solscan.io/tx/${rewardTxs?.reward.nft_transfer_tx}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img src={"/solscan.png"} alt="warning" style={{ height: 20 }} />
              </a>
            </span>
          ):null}
          <span>
            {winnerData && winnerData.type && winnerData.type != "NO_REWARD" ? (
              <div className="share-show">
                {/* <TwitterTweetButton
                className="sh-share"
                text={` I just won ${winnerData?.name} with a ${
                  boxData && boxData.box_cost
                    ? `${boxData.box_cost.amount} ${boxData.box_cost.token_name}`
                    : ``
                } Spin playing @DegenLabs DegenDrop. \n\nPlay Now:`}
                url={`https://degendrop.io/unboxing/boxes/${params?.boxId}`}
                // hashtags={["hashtag1", "hashtag2"]}
              >
                <img src={tweet} alt="icon" style={{}} />
                <span style={{ marginLeft: 5 }}>Tweet</span>
              </TwitterTweetButton> */}
                <Share
                  url={`https://degendrop.io/unboxing/boxes/${params?.boxId}`}
                  options={{
                    text: ` I just won ${winnerData?.name} with a ${
                      boxData && boxData.box_cost
                        ? `${boxData.box_cost.amount} ${boxData.box_cost.token_name}`
                        : ``
                    } Spin playing @DegenLabs DegenDrop. \n\nPlay Now:`,
                  }}
                />
              </div>
            ) : null}
          </span>
        </div>
      </ModalBody>
      <ModalFooter>
        {/* <Button className="share-btn">Replay Unboxing & Share</Button> */}
        <Button className="continue-btn" onClick={continueSpin}>
          Acknowledge & Continue
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default OutcomeModal;
