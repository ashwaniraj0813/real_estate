import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import OtpPopup from "./OtpPopup";
import CollectEmailPopup from "./CollectEmailPopup";

export type NavbarProps = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ className = "click" }) => {
  const navigate = useNavigate();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isOtpPopupOpen, setOtpPopupOpen] = useState(false);
  const [isCollectEmailPopupOpen, setCollectEmailPopupOpen] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onRentTextClick = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  const onSellTextClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const handleLoginClick = () => {
    closePopups();
    setLoginPopupOpen(true);
  };

  const handleRegisterClick = () => {
    closePopups();
    setCollectEmailPopupOpen(true);
  };

  const handleSwitchToLogin = () => {
    closePopups();
    setLoginPopupOpen(true);
  };

  const handleSendOtp = (email: string) => {
    setCollectEmailPopupOpen(false);
    setEmailForOtp(email);
    setOtpPopupOpen(true);
  };

  const handleVerifyOtp = () => {
    setOtpPopupOpen(false);
    setVerifiedEmail(emailForOtp);
    setRegisterPopupOpen(true);
  };

  const handleRegister = (email: string) => {
    setRegisterPopupOpen(false);
    setEmailForOtp(email);
    setOtpPopupOpen(true);
  };

  const closePopups = () => {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setOtpPopupOpen(false);
    setCollectEmailPopupOpen(false);
  };

  const match = (useLocation().pathname === '/' || useLocation().pathname == '/aboutus');

  return (
    <header className={`${styles.navbar} ${match ? styles.navtransparent : ""}`}>
      <div className={`${styles.navitem} ${styles.logo}`} onClick={onLOGOTextClick}>LOGO</div>
      <div className={`${styles.navitem} ${styles.searchBar}`}>
        <img className={styles.searchicon} src="/icbaselinesearch1.svg" alt="search icon" />
        <input className={styles.searchinput} placeholder="Luxurious Penthouses ..." type="text" />
      </div>
      <div className={`${styles.navitem} ${styles.buy}`} onClick={onBuyTextClick}>Buy</div>
      <div className={`${styles.navitem} ${styles.rent}`} onClick={onRentTextClick}>Rent</div>
      <div className={`${styles.navitem} ${styles.sell}`} onClick={onSellTextClick}>Sell</div>
      <div className={`${styles.navitem} ${styles.profile}`} onClick={handleLoginClick}>
        <img className={styles.homeIcon} src="/vector1.svg" alt="profile icon" />
      </div>

      {isLoginPopupOpen && <LoginPopup onClose={closePopups} onSwitchToRegister={handleRegisterClick} />}
      {isRegisterPopupOpen && <RegisterPopup onClose={closePopups} onSwitchToLogin={handleSwitchToLogin} onRegister={handleRegister} prefilledEmail={verifiedEmail} />}
      {isOtpPopupOpen && <OtpPopup onClose={closePopups} email={emailForOtp} onVerifyOtp={handleVerifyOtp} />}
      {isCollectEmailPopupOpen && <CollectEmailPopup onClose={closePopups} onSendOtp={handleSendOtp} />}
    </header>
  );
};

export default Navbar;
