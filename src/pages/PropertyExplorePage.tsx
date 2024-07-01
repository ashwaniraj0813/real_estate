import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent21";
import Popular from "../components/Popular";
import styles from "./PropertyExplorePage.module.css";

const PropertyExplorePage: FunctionComponent = () => {
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

  const onVectorIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  
  return (
    <div className={styles.propertyExplorePage}>
      <header className={styles.navbar}>
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
        <div className={styles.navLinks}>
          <div className={styles.homeButton}>
            <a className={styles.home} onClick={onLOGOTextClick}>
              Home
            </a>
          </div>
          <div className={styles.links}>
            <a className={styles.buy} onClick={onBuyTextClick}>
              Buy
            </a>
          </div>
          <div className={styles.rentWrapper}>
            <a className={styles.rent} onClick={onRentTextClick}>
              Rent
            </a>
          </div>
          <div className={styles.homeTab}>
            <a className={styles.sell} onClick={onSellTextClick}>
              Sell
            </a>
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
      <main className={styles.content}>
        <section className={styles.popularPropertiesParent}>
          <FrameComponent3 />
          <FrameComponent2 />
          <Popular />
        </section>
      </main>
    </div>
  );
};

export default PropertyExplorePage;
