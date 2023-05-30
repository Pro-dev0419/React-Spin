import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
// import Logo from "../../assets/image/logo.png";
import { icon_menu, icon_x, LogoSvg } from "../../assets/icon";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { setWallet } from "../../state/features/wallet/walletSlice";
import { useSelector, useDispatch } from "react-redux";
import AccountBtn from "../common/AccountBtn/AccountBtn";
import "./Header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const stateWallet = useSelector((state) => state.wallet.wallet);

  const wallet = useWallet();

  const dispatch = useDispatch();
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    if (wallet.connected) {
      // if ((stateWallet != null) && (stateWallet != wallet.publicKey.toBase58())){
      //   dispatch(setWallet(wallet.publicKey.toBase58()));
      // } else if (stateWallet == null) {
      let walletString = wallet.publicKey.toString();
      dispatch(setWallet(walletString));
      // }
    } else if (!wallet.connected) {
      dispatch(setWallet(null));
    }
  }, [wallet, stateWallet]);
  return (
    <header
      className={navigationToggler ? "header-area nav-bar" : "header-area"}
    >
      <WalletModalProvider>
        <Container>
          <Row>
            <Col md={12}>
              <nav className="main-nav">
                <div className="nav-left">
                  <Link to="/" className="logo">
                    <img src={LogoSvg} alt="Logo" />
                  </Link>
                  <ul className="nav-left-item m-5">
                    <li className={`${pathname === "/mechanics" && "active"}`}>
                      <NavLink to="/mechanics">Mechanics</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="nav-right">
                  <div className="nav-item">
                    <img
                      src={icon_menu}
                      alt="icon_menu"
                      onClick={handleNavigationToggler}
                    />
                  </div>
                  <div className="btn-wrapper">
                    {stateWallet !== null && (
                      <AccountBtn to={`/player/${stateWallet}/game-history`} />
                    )}

                    <WalletMultiButton />
                  </div>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
        <div className={navigationToggler ? "mobileView left" : "mobileView"}>
          <div className="header-wrapper">
            <Link to="/" className="logo" onClick={handleNavigationToggler}>
              <img src={LogoSvg} alt="Logo" />
            </Link>
            <div className="button_wrapper">
              <img
                src={icon_x}
                alt="icon_menu"
                onClick={handleNavigationToggler}
                className="btn_img"
              />
            </div>
          </div>
          <div className="mobileView_divider"></div>
          <ul className="">
            <li className={`${pathname === "/mechanics" && "active-mobile"}`}>
              <NavLink to="/mechanics" onClick={handleNavigationToggler}>
                Mechanics
              </NavLink>
            </li>
            <div className="mobile-buttons">
              {stateWallet !== null && (
                <AccountBtn
                  to={`/player/${stateWallet}/game-history`}
                  onClick={handleNavigationToggler}
                />
              )}
              <WalletMultiButton />
            </div>
          </ul>
        </div>
      </WalletModalProvider>
    </header>
  );
};

export default Header;
