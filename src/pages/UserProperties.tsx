import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./UserProperties.module.css";

const UserProperties: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProfileSettingsTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
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

  return (
    <div className={styles.userProperties0}>
      <header className={styles.nav3}>
        <div className={styles.nav3Child} />
        <div className={styles.actionButtons}>
          <a className={styles.logo} onClick={onLogOutTextClick}>
            LOGO
          </a>
        </div>
        <div className={styles.searchBarContainer}>
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
        <div className={styles.actionButtons1}>
          <div className={styles.propertyActions}>
            <div className={styles.homeButtonContainer}>
              <a className={styles.home} onClick={onLogOutTextClick}>
                Home
              </a>
            </div>
            <div className={styles.actionButtons2}>
              <a className={styles.buy} onClick={onBuyTextClick}>
                Buy
              </a>
            </div>
            <div className={styles.homeIconBackground}>
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
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
              onClick={onProfileSettingsTextClick}
            />
          </div>
        </div>
      </header>
      <main className={styles.sidebarContainer}>
        <Sidebar
          sidebarMarginLeft="unset"
          profileSettingsColor="#000"
          profileSettingsFontWeight="unset"
          myPropertiesColor="#784dc6"
          myPropertiesFontWeight="bold"
          onHomeIconClick={onProfileSettingsTextClick}
          onLOGOTextClick={onLogOutTextClick}
        />
        <div className={styles.emptyStateIllustration}>
          <div className={styles.emptyState}>
            <div className={styles.illustrationContainer}>
              <img
                className={styles.httpslottiefilescomanimatIcon}
                loading="lazy"
                alt=""
                src="/httpslottiefilescomanimationshouse7c0f7yoykz@2x.png"
              />
            </div>
            <div className={styles.emptyStateMessage}>
              <div className={styles.youHaventBought}>
                You haven’t bought or sold any property yet!
              </div>
            </div>
            <div className={styles.allTheProperties}>
              All the properties and projects that you have bought or sold will
              start appearing here. Search or explore cities now.
            </div>
            <div className={styles.homeAction}>
              <div className={styles.home1} onClick={onLogOutTextClick}>
                <div className={styles.homeButton}>
                  <div className={styles.homeButtonChild} />
                  <img
                    className={styles.tablerhomeIcon}
                    loading="lazy"
                    alt=""
                    src="/tablerhome.svg"
                  />
                  <div className={styles.homeLabelContainer}>
                    <div className={styles.home2}>Home</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProperties;
