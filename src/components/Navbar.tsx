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

  const onRentTextClick = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  const onSellTextClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);
  
  const onHomeIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onSearchContainerClick = useCallback(() => {
    navigate("/property-explore-page");
  }, [navigate]);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarChild} />
      <div className={styles.logoWrapper}>
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
      <div className={styles.pageLinks}>
        <div className={styles.links}>
          <div className={styles.homeButton}>
            <a className={styles.home} onClick={onLOGOTextClick}>
              Home
            </a>
          </div>
          <div className={styles.linkButtons}>
            <a className={styles.buy} onClick={onBuyTextClick}>
              Buy
            </a>
          </div>
          <div className={styles.linkButtons1}>
            <a className={styles.rent} onClick={onRentTextClick}>
              Rent
            </a>
          </div>
          <div className={styles.linkButtons2}>
            <a className={styles.sell} onClick={onSellTextClick}>
              Sell
            </a>
          </div>
          <img
            className={styles.homeIcon}
            loading="lazy"
            alt=""
            src="/vector1.svg"
            onClick={onHomeIconClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
