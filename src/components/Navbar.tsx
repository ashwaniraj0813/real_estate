import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarChild} />
      <div className={styles.navTabs}>
        <a className={styles.logo} onClick={onLOGOTextClick}>
          LOGO
        </a>
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <img
            className={styles.icbaselineSearchIcon}
            alt=""
            src="/icbaselinesearch1.svg"
          />
          <input
            className={styles.searchBarItem}
            placeholder="Search here..."
            type="text"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.homeWrapper}>
          <a className={styles.home} onClick={onLOGOTextClick}>
            Home
          </a>
        </div>
        <div className={styles.buyWrapper}>
          <a className={styles.buy} onClick={onBuyTextClick}>
            Buy
          </a>
        </div>
        <div className={styles.rentWrapper}>
          <a className={styles.rent}>Rent</a>
        </div>
        <div className={styles.homeTab}>
          <a className={styles.sell}>Sell</a>
        </div>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector21.svg"
          onClick={onVectorIconClick}
        />
      </div>
    </header>
  );
};

export default Navbar;
