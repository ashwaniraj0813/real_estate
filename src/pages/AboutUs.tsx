import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import GroupComponent from "../components/GroupComponent";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
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
    <div className={styles.aboutUs}>
      <header className={styles.nav3}>
        <div className={styles.nav3Child} />
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
              src="/icbaselinesearch.svg"
            />
            <input
              className={styles.searchInput}
              placeholder="Search here..."
              type="text"
            />
          </div>
        </div>
        <div className={styles.actionsWrapper}>
          <div className={styles.actions}>
            <div className={styles.homeButton}>
              <a className={styles.home} onClick={onLOGOTextClick}>
                Home
              </a>
            </div>
            <div className={styles.homeButton1}>
              <a className={styles.buy} onClick={onBuyTextClick}>
                Buy
              </a>
            </div>
            <div className={styles.actionButtons}>
              <a className={styles.rent} onClick={onRentTextClick}>
                Rent
              </a>
            </div>
            <div className={styles.sellWrapper}>
              <a className={styles.sell} onClick={onSellTextClick}>
                Sell
              </a>
            </div>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
              onClick={onVectorIconClick}
            />
          </div>
        </div>
      </header>
      <main className={styles.realEstatePhotographyP1900Parent}>
        <img
          className={styles.realEstatePhotographyP1900Icon}
          alt=""
          src="/realestatephotography-p1-900x420jpg-1@2x.png"
        />
        <Content />
        <GroupComponent />
      </main>
    </div>
  );
};

export default AboutUs;
