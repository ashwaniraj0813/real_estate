import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import OtpPopup from "./OtpPopup";
import CollectEmailPopup from "./CollectEmailPopup";

export type NavbarProps = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isOtpPopupOpen, setOtpPopupOpen] = useState(false);
  const [isCollectEmailPopupOpen, setCollectEmailPopupOpen] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

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
    if (isLoggedIn) {
      navigate("/user-profile");
    } else {
      closePopups();
      setLoginPopupOpen(true);
    }
  };

  const handleSwitchToCollectEmail = () => {
    closePopups();
    setCollectEmailPopupOpen(true);
  };

  const handleCollectEmail = (email: string) => {
    closePopups();
    setEmailForOtp(email);
    setOtpPopupOpen(true);
  };

  const handleOtpVerification = () => {
    closePopups();
    setRegisterPopupOpen(true);
  };

  const handleSwitchToLogin = () => {
    closePopups();
    setLoginPopupOpen(true);
  };

  const closePopups = () => {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setOtpPopupOpen(false);
    setCollectEmailPopupOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closePopups();
  };

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/aboutus";

  return (
    <header
      className={`${styles.navbar} ${
        (isHomePage||isAboutPage) && !isScrolled ? styles.navtransparent : styles.navcolored
      }`}
    >
      <div
        className={`${styles.navitem} ${styles.logo}`}
        onClick={onLOGOTextClick}
      >
        LOGO
      </div>
      <div className={`${styles.navitem} ${styles.searchBar}`}>
        <img
          className={styles.searchicon}
          src="/icbaselinesearch1.svg"
          alt="search icon"
        />
        <input
          className={styles.searchinput}
          placeholder="Luxurious Penthouses ..."
          type="text"
        />
      </div>
      <div
        className={`${styles.navitem} ${styles.buy}`}
        onClick={onBuyTextClick}
      >
        Buy
      </div>
      <div
        className={`${styles.navitem} ${styles.rent}`}
        onClick={onRentTextClick}
      >
        Rent
      </div>
      <div
        className={`${styles.navitem} ${styles.sell}`}
        onClick={onSellTextClick}
      >
        Sell
      </div>
      <div
        className={`${styles.navitem} ${styles.profile}`}
        onClick={handleLoginClick}
      >
        <img
          className={styles.homeIcon}
          src="/vector1.svg"
          alt="profile icon"
        />
      </div>

      {isLoginPopupOpen && (
        <LoginPopup
          onClose={closePopups}
          onSwitchToRegister={handleSwitchToCollectEmail}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {isCollectEmailPopupOpen && (
        <CollectEmailPopup
          onClose={closePopups}
          onSendOtp={handleCollectEmail}
        />
      )}
      {isOtpPopupOpen && (
        <OtpPopup
          onClose={closePopups}
          email={emailForOtp}
          onVerifyOtp={handleOtpVerification}
        />
      )}
      {isRegisterPopupOpen && (
        <RegisterPopup
          onClose={closePopups}
          onSwitchToLogin={handleSwitchToLogin}
          prefilledEmail={emailForOtp}
        />
      )}
    </header>
  );
};

export default Navbar;
