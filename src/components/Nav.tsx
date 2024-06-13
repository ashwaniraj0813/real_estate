import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export type NavType = {
  className?: string;
};

const Nav: FunctionComponent<NavType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  return (
    <header className={[styles.nav3, className].join(" ")}>
      <div className={styles.nav3Child} />
      <div className={styles.buttonLabels}>
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
            src="/icbaselinesearch.svg"
          />
          <input
            className={styles.searchBarItem}
            placeholder="Search here..."
            type="text"
          />
        </div>
      </div>
      <div className={styles.linkButtonsWrapper}>
        <div className={styles.linkButtons}>
          <div className={styles.homeWrapper}>
            <a className={styles.home} onClick={onLOGOTextClick}>
              Home
            </a>
          </div>
          <div className={styles.secondIcon}>
            <a className={styles.buy} onClick={onBuyTextClick}>
              Buy
            </a>
          </div>
          <div className={styles.homeLink}>
            <a className={styles.rent}>Rent</a>
          </div>
          <div className={styles.buttonLabels1}>
            <a className={styles.sell}>Sell</a>
          </div>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
