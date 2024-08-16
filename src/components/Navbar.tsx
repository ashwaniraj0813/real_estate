import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
} from "react";
import Rent from "../pages/Rent";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import OtpPopup from "./OtpPopup";
import CollectEmailPopup from "./CollectEmailPopup";
import NavSearch from "./NavSearch";
export type NavbarProps = {
  className?: string;
  onSearch: (query: string) => void;
};

const Navbar: FunctionComponent<NavbarProps> = ({
  // className = "",
  // onSearch,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const [isOtpPopupOpen, setOtpPopupOpen] = useState(false);
  const [isCollectEmailPopupOpen, setCollectEmailPopupOpen] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // const onBuyTextClick = useCallback(() => {
  //   navigate("/property-listings-page");
  // }, [navigate]);

  const onRentTextClick = useCallback(() => {
    navigate("/properties/rent");
  }, [navigate]);

  const onPostPropertyClick = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  const onSellTextClick = useCallback(() => {
    navigate("/properties/sell");
  }, [navigate]);
  const onPostTextClick = useCallback(() => {
    navigate("/rent");
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
  const handlesearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      `/SearchPropertiesNavbar?query=${encodeURIComponent(searchQuery)}`
    );
    encodeURIComponent("");
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const [isFilterListVisible, setIsFilterListVisible] = useState(false);

  const toggleFilterListVisibility = () => {
    setIsFilterListVisible(!isFilterListVisible);
  };

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/aboutus";


  return (
    <header
      className={`${styles.navbar} ${
        (isHomePage || isAboutPage) && !isScrolled
          ? styles.navtransparent
          : styles.navcolored
      }`}
    >
      <div
        className={`${styles.navitem} ${styles.logo}`}
        onClick={onLOGOTextClick}
      >
        <img src="../logo.png" alt="Logo" className={styles.logo1} />
      </div>
      <NavSearch />
      {/* <div
        className={`${styles.navitem} ${styles.logo}`}
        onClick={onBuyTextClick}
      >
        Buy
      </div> */}
      <div
        className={`${styles.navitem} ${styles.logo}`}
        onClick={onSellTextClick}
      >
        For Buyers
      </div>
      <div
        className={`${styles.navitem} ${styles.logo}`}
        onClick={onRentTextClick}
      >
        For Tenants
      </div>
      <div
        className={`${styles.navitem} ${styles.logo}`}
        onClick={onPostPropertyClick}
      >
        Post Property
      </div>
      <div
        className={`${styles.navitem} ${styles.profile} ${styles.logo}`}
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
