import { FunctionComponent, useCallback } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
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

<<<<<<< HEAD
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
=======
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
  
  let match = (useLocation().pathname == '/');

  return (
    <header className={`${match ? `${styles.navtransparent} ${styles.navbar}` : `${styles.navbar}`}`}>
      <a className={`${styles.navitem} ${styles.logo}`} onClick={onLOGOTextClick}>LOGO</a>
      <div className={`${styles.navitem} ${styles.searchBar}`}>
          <img className={styles.searchicon} src="/icbaselinesearch1.svg" />
          <input className={styles.searchinput} placeholder="Luxurious Penthouses ..." type="text"/>
      </div>
      <a className={`${styles.navitem} ${styles.buy}`} onClick={onBuyTextClick}>Buy</a>
      <a className={`${styles.navitem} ${styles.rent}`} onClick={onRentTextClick}>Rent</a>
      <a className={`${styles.navitem} ${styles.sell}`} onClick={onSellTextClick}>Sell</a>
      <a className={`${styles.navitem} ${styles.profile}`} onClick={onHomeIconClick}>
        <img className={styles.homeIcon} src="/vector1.svg"/>
      </a>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    </header>
  );
};

export default Navbar;
