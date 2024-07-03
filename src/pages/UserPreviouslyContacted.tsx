import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./UserPreviouslyContacted.module.css";

const UserPreviouslyContacted: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSavedTextClick = useCallback(() => {
    navigate("/user-previously-saved0");
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userPreviouslyContacted0}>
      <Navbar />
      <main className={styles.sidebarParent}>
        <Sidebar currentPage="user-previously-contacted0"
            sidebarMarginLeft="unset"
            profileSettingsColor="#000"
            profileSettingsFontWeight="unset"
            myPropertiesColor="#784dc6"
            myPropertiesFontWeight="bold"
          />
        <div className={styles.contactImage}>
          <div className={styles.content}>
            <div className={styles.emptyState}>
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
            </div>
            <div className={styles.noContactsMessage}>
              <div className={styles.youHaventContacted}>
                You haven’t contacted anyone lately!
              </div>
            </div>
            <div className={styles.youWillSee}>
              You will see the list of properties / projects here, where you
              have contacted the advertiser
            </div>
            <div className={styles.homeWrapper}>
              <div className={styles.home} onClick={onHomeContainerClick}>
                <div className={styles.homeButton}>
                  <div className={styles.homeButtonChild} />
                  <img
                    className={styles.tablerhomeIcon}
                    loading="lazy"
                    alt=""
                    src="/tablerhome.svg"
                  />
                  <div className={styles.homeContainer}>
                    <div className={styles.home1}>Home</div>
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

export default UserPreviouslyContacted;
