import React, { useState, useEffect } from "react";
import {Connection} from '@solana/web3.js'
import { getSolBalance, getTokenBalance } from "../../state/actions/walletAccountActions";
import "./SpinController.scss";
import WheelInfoCard from "../WheelInfoCard/WheelInfoCard";
import { useSelector } from "react-redux";
import { Badge, Col, Container, Row } from "reactstrap";

const SpinController = (props) => {
  const { demoSpinClick } = props;
  
  const spinning = useSelector((state) => state.wheel.spinning);
  const viewerCount = useSelector((state) => state.box.viewers);
  const boxData = useSelector((state) => state.box.currentBox);
  const notification = useSelector((state) => state.box.notification);
  const nextPlayFree = useSelector((state) => state.box.nextPlayFree);
  const stateWallet = useSelector((state) => state.wallet.wallet);
  const [counter, setcounter] = useState(1);
  const [balance, setBalance] = useState(0);
  const [token, setToken] = useState("");
  const connection = new Connection(process.env.REACT_APP_RPC_URL, "confirmed");
  
  const getStateTokenBalance = async (token_name, mint_address) => {
    if (stateWallet) {
      if (token_name == "SOL") {
        const balance = await getSolBalance(stateWallet, connection)
        setBalance(balance)
        if (token != "SOL") setToken("SOL");
      } else {
        const balance = await getTokenBalance(mint_address, stateWallet)
        setBalance(balance)
        setToken(token_name);
      }
    }
  }
  const checkWalletBalanceVsCost = () => {
    let disabled = true;
    if (boxData) {
      if (balance >= boxData.box_cost.amount) disabled = false;
    } else {
      disabled = false;
    }
    
    if (!disabled && spinning) {
      disabled = true;
    }
    
    return disabled;

  }

  useEffect(() => {
    if (boxData && !stateWallet){
      let tokenType = boxData.box_cost.type;
      if (tokenType == "SOL") {
        setBalance(0);
        setToken("SOL");
      }
      if (tokenType == "SPL_TOKEN") {
        setBalance(0);
        setToken(boxData.box_cost.token_name);
      }
      if (tokenType == "REWARD_POINTS") {
        setBalance(0);
        setToken("REWARD_POINTS");
      }
    }
    if (boxData && stateWallet) {
      let tokenType = boxData.box_cost.type;
      if (tokenType == "SOL") getStateTokenBalance("SOL", null);
      if (tokenType == "SPL_TOKEN") getStateTokenBalance(boxData.box_cost.token_name, boxData.box_cost.mint_address);
      if (tokenType == "SOL") {
        getStateTokenBalance("SOL", null);
        const interval = setInterval(() => {
          getStateTokenBalance("SOL", null);
        }, 10000);
        return () => clearInterval(interval);
      } else if (tokenType == "SPL_TOKEN") {
        const interval = setInterval(() => {
          getStateTokenBalance(boxData.box_cost.token_name, boxData.box_cost.mint_address);
        }, 10000);
        return () => clearInterval(interval);
      }
    }
  }, [boxData, stateWallet])

  return (
    <Container>
    <Row>
    <Col sm={12} lg={3} xxl={2}><WheelInfoCard image={boxData? boxData.image : null}/></Col>
    <Col>
      
      
    <div className="spin-controller" style={{marginTop: 0}}>
      <div className="spin-text">
        <div>
          <h1 style={{marginBottom: 0}}>{boxData ? boxData.name : ""}</h1>
          <div className="wallet" style={{marginBottom: 0}}>
          Wallet Balance:
          <span> {balance} {token}</span>
          </div>            
          {/* <Badge color="primary" pill>{viewerCount} players are viewing</Badge> */}
      
        </div>
        

      </div>
      <div className="spin-btn">
        {/* <h1>FREE PLAYS REMAINING:</h1>
        <div className="spin-counter">
          <h2>
            <div className="number-counter">
              <div
                onClick={() => {
                  if (counter > 1) {
                    return setcounter(counter - 1);
                  }
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  color="#FFFFFF"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6.5v3c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-15c-0.276 0-0.5 0.224-0.5 0.5z"></path>
                </svg>
              </div>

              <input type="number" readOnly={true} value={counter} />

              <div onClick={() => setcounter(counter + 1)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  color="#FFFFFF"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"></path>
                </svg>
              </div>
            </div>
          </h2>
        </div> */}
        <div className="spin-btn-section">
          <button className="btn btn-demo" onClick={demoSpinClick} disabled={checkWalletBalanceVsCost()}>
            <img src="https://i.ibb.co/84XG2D6/Vector-1.png" alt="" />
            <span onClick={demoSpinClick}>Spin for {
              nextPlayFree ? `FREE` : `${boxData ? boxData.box_cost.amount : 0} ${token}`
            }</span>
          </button>
          
        </div>

      </div>
      
    </div>
    
    </Col>
    
    </Row>
    <hr/>
    </Container>
  );
};

export default SpinController;
