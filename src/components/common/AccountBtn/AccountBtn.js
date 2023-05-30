import React from "react";
import { Link } from "react-router-dom";
import "./AccountBtn.scss";
const AccountBtn = ({ to, onClick }) => {
  return (
    <Link to={to} className="btn account-btn" onClick={onClick}>
      <div className="avatar-wrapper">
        <div className="user-avatar">
          <div
            style={{
              backgroundImage: 'url("https://i.ibb.co/zHnkwrv/user.png")',
              backgroundRepeat: "no-repeat",
            }}
            className="img-avatar"
          ></div>
          {/* <div className="avatar-level-badge">
            <span className="number"> 1 </span>
          </div> */}
        </div>
      </div>
      <span className="account-text">Account</span>
    </Link>
  );
};

export default AccountBtn;
