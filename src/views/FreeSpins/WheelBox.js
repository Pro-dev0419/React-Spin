import React, { useEffect, useRef, useState } from "react";
// import { Container } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import useSound from "use-sound";
import WheelStartSound from "../../assets/sounds/WheelStart.mp3";
import WheelResultSound from "../../assets/sounds/WheelResult.mp3";
import Wheel from "../../components/Wheel/Wheel";
import { useWallet } from "@solana/wallet-adapter-react";
import OutcomeModal from "../../components/OutcomeModal/OutcomeModal";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getSolBalance,
  getTokenBalance,
} from "../../state/actions/walletAccountActions";
import {
  extendArrayToTwenty,
  removeUnavailableItems,
} from "../../utils/helpers";
import { getBox } from "../../state/actions/boxActions";
import { spin, completeSpin } from "../../state/actions/spinActions";
import { getRewardBalances } from "../../state/actions/rewardActions";
import { Connection } from "@solana/web3.js";
import SpinTools from "../../components/SpinTools/SpinTools";
import {
  setWinner,
  setSelectedItem,
  setRewards,
  setSpinning,
  setSpinDuration,
  setRandomPosition,
  setDisplayRewards,
  setRewardTxs,
} from "../../state/features/wheel/wheelSlice";
import {
  setCurrentBox,
  setNextPlayFree,
  setNotification,
  setNotificationTitle,
} from "../../state/features/box/boxSlice";
import SpinBoxInfo from "../../components/SpinBoxInfo/SpinBoxInfo";

const WheelBox = () => {
  const navigate = useNavigate()
  const connection = new Connection(process.env.REACT_APP_RPC_URL, "confirmed");
  const soundOn = useSelector((state) => state.box.soundOn);
  const [playSpinStartSound] = useSound(WheelStartSound);
  const [playSpinEndSound] = useSound(WheelResultSound);
  let { boxId } = useParams();
  const wallet = useWallet();
  const dispatch = useDispatch();
  const wheelData = useSelector((state) => state.wheel);
  const boxData = useSelector((state) => state.box.currentBox);
  const { winners, selectedItem, spinDuration } = wheelData || {};
  const [speedOption, setSpeedOption] = useState("regular");
  const [itemData, setItemData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [retryUrl, setRetryUrl] = useState(null);

  const spinning = useSelector((state) => state.wheel.spinning);
  const wheelRef = useRef();
  // const [spinning, setSpinning] = useState(false);

  const getBoxData = async () => {
    const boxData = await getBox(boxId);
    // console.log('boxData', boxData);

    const boxWithRewardBalances = await getRewardBalances(boxData);
    let rewards = boxWithRewardBalances.rewards;
    // console.log(rewards)
    if (rewards.length < 20) {
      rewards = extendArrayToTwenty(rewards);
      rewards = removeUnavailableItems(rewards);
    }
    dispatch(setCurrentBox(boxWithRewardBalances));
    dispatch(setRewards(rewards));
    dispatch(setDisplayRewards(rewards));
    setItemData(rewards);
  };

  useEffect(() => {
    getBoxData();
  }, []);

  const continueSpin = () => {
    dispatch(setSpinning(false));
    dispatch(setSelectedItem(null));
    dispatch(setRewardTxs(null));
    setOpenModal(false);
    // dispatch(setSpinDuration(10))

    // setWinners({});
    dispatch(setWinner({}));
  };
  const onSomeoneWon = async (value) => {
    // console.log("SOMEONE WON",value)
    // console.log(boxData)
    if (boxData) {
      let treasury = boxData.treasury;
      // console.log("treasury is", treasury)
      // console.log("treasury is", treasury)
      let rewards = [...boxData.rewards];
      let availability = value.reward_availability;
      let rewardIndex = value.win_index;
      let reward = { ...rewards[rewardIndex] };
      if (reward.type == "SOL")
        reward.balance = await getSolBalance(treasury, connection);
      if (reward.type == "SPL_TOKEN")
        reward.balance = await getTokenBalance(reward.mint_address, treasury);
      if (reward.type == "NFT") reward.balance = availability;
      if (reward.type === "NO_REWARD") reward.balance = "unlimited";
      // console.log("NEW BALANCE OF ", reward.type, reward.balance)
      rewards[rewardIndex] = reward;
      // console.log(rewards)
      dispatch(setCurrentBox({ ...boxData, rewards: rewards }));
      // dispatch(setRewards(rewards));
      dispatch(setDisplayRewards(rewards));
    }
  };

  const selectResultEventHandler = async () => {
    // console.log(wallet);
    if (itemData.length > 0 && spinning !== true) {
      try {
        dispatch(setNotification(null));
        dispatch(setNotificationTitle(null));

        let spinPlayTx = null,
          winDetails = null;
        try {
          spinPlayTx = await spin(wallet, boxData.box_key, boxData);
          localStorage.setItem("lastPlayedBox", boxId);
        } catch (error) {
          console.log(error);
          dispatch(
            setNotification("You already have a previously unfinished spin.")
          );
          if (
            error.error.errorMessage.includes(
              "Player already has an active game going"
            )
          ) {
            let lastPlayedBox = localStorage.getItem("lastPlayedBox");
            console.log(lastPlayedBox);
            if (lastPlayedBox == null || lastPlayedBox == boxId) {
              spinPlayTx = null;
            } else if (lastPlayedBox != boxId) {
              dispatch(setNotificationTitle("Unfinished Spin: Free Play"));
              dispatch(
                setNotification(
                  "You have a previously unfinished spin on another box. Automatically redirecting"
                )
              );
              setModalShow(true);
              setRetryUrl(`/unboxing/boxes/${lastPlayedBox}`)
              setTimeout(() => {
                window.location.href = `/unboxing/boxes/${lastPlayedBox}`
              }, 2000);
              dispatch(setNextPlayFree(true));
              // setModalShow(true)
              return;
            }
          }
        }
        dispatch(setSpinning(true));
        if (soundOn) playSpinStartSound();

        try {
          winDetails = await completeSpin(
            wallet.publicKey.toString(),
            spinPlayTx
          );
        } catch (serverError) {
          console.log(serverError);
          if (
            serverError.code == "ERR_BAD_RESPONSE" ||
            serverError.code == "ERR_NETWORK"
          ) {
            dispatch(setNotificationTitle("Server Error Encountered"));
            dispatch(
              setNotification(
                "Solana was unable to return your game result. Your next play will complete the spin for free"
              )
            );
            dispatch(setSpinning(false));
            dispatch(setNextPlayFree(true));
            setModalShow(true);
            return;
          }
        }
        dispatch(setRewardTxs(winDetails.spin_result));
        dispatch(setWinner(boxData.rewards[winDetails.win_index]));
        dispatch(setSelectedItem(winDetails.win_index));
        dispatch(setNextPlayFree(false));
        dispatch(setNotificationTitle(null));
        dispatch(setNotification(null));
        await onSomeoneWon(winDetails);
      } catch (error) {}

      // set this state to disable tab and wheel click when spinning
    }
  };

  // const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = async () => {
    if (itemData.length === 0 || spinning === true) {
      // console.log("Can't spin a empty wheel or spinning wheel");
      return;
    }
    if (selectedItem === null) {
      const min = 268.5;
      const max = 271.5;
      const randomInt = Math.floor(Math.random() * (max - min)) + min;
      dispatch(setRandomPosition(randomInt));
      await selectResultEventHandler();
    } else {
      dispatch(setSpinning(false));
      dispatch(setSelectedItem(null));
      await selectResultEventHandler();
    }
  };

  return (
    <>
      <div className="open-box-wheel">
        <div className="custom-container">
          <Wheel
            ref={wheelRef}
            spinning={spinning}
            selectItem={selectItem}
            onFinish={() => {
              setOpenModal(true);
              if (soundOn) playSpinEndSound();
            }}
          />
        </div>
      </div>
      <OutcomeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        continueSpin={continueSpin}
        winners={winners}
      />
      <ErrorModal
        isOpen={modalShow}
        toggle={() => setModalShow(!modalShow)}
        title="Error 500"
        retryUrl={retryUrl}
      >
        Poor network connection detected. Please check your connectivity
      </ErrorModal>
      <SpinTools />
      <SpinBoxInfo demoSpinClick={selectItem} setSpeedOption={setSpeedOption} />
    </>
  );
};

export default WheelBox;
