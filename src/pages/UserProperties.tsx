import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./UserProperties.module.css";
import Navbar from "../components/Navbar";

const UserProperties: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProfileSettingsTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userProperties0}>
      <Navbar/>
      <main className={styles.sidebarContainer}>
        <Sidebar currentPage="user-properties0"
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
