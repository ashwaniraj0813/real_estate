import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./UserPastSearches.module.css";

const UserPastSearches: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSavedTextClick = useCallback(() => {
    navigate("/user-previously-saved0");
  }, [navigate]);

  const onContactedTextClick = useCallback(() => {
    navigate("/user-previously-contacted0");
  }, [navigate]);

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userPastSearches0}>
      <Navbar/>
      <section className={styles.homeNavigation}>
        <div className={styles.sidebar}>
          <Sidebar currentPage="user-past-searches0"
            sidebarMarginLeft="unset"
            profileSettingsColor="#000"
            profileSettingsFontWeight="unset"
            myPropertiesColor="#784dc6"
            myPropertiesFontWeight="bold"
          />
          <div className={styles.emptySearch}>
            <div className={styles.emptySearchContent}>
              <div className={styles.emptySearchIcon}>
                <img
                  className={styles.httpslottiefilescomanimatIcon}
                  loading="lazy"
                  alt=""
                  src="/httpslottiefilescomanimationssearchw6fho68iw1@2x.png"
                />
              </div>
              <div className={styles.emptySearchMessage}>
                <div className={styles.youHaventSearched}>
                  You haven’t searched anything yet
                </div>
                <div className={styles.homeButton}>
                  <button
                    className={styles.homeButton1}
                    onClick={onHomeButtonClick}
                  >
                    <div className={styles.homeButtonChild} />
                    <img
                      className={styles.tablerhomeIcon}
                      alt=""
                      src="/tablerhome.svg"
                    />
                    <div className={styles.homeButtonLabel}>
                      <div className={styles.home}>Home</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserPastSearches;
