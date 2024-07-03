import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import styles from "./UserPastSearches.module.css";
import LottieAnimation from "../components/LottieAnimation";

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
      <Nav/>
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
              <LottieAnimation animationLink="https://lottie.host/a5254c19-e1f1-409d-95bd-c175ec072f09/lfnd0ChTqd.json" style={{ width: 500, height: 300 }} />
              </div>
              <div className={styles.emptySearchMessage}>
                <div className={styles.youHaventSearched}>
                  You haven’t searched anything yet
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
