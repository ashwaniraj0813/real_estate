import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav6";
import Sidebar from "../components/Sidebar1";
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
      <Nav />
      <section className={styles.homeNavigation}>
        <div className={styles.sidebar}>
          <Sidebar
            propColor="#000"
            propFontWeight="unset"
            propColor1="#000"
            propFontWeight1="unset"
            sidebarMinWidth="unset"
            sidebarLinksAlignSelf="unset"
            pastSearchesFlex="unset"
            pastSearchesColor="#784dc6"
            pastSearchesFontWeight="bold"
            onSavedTextClick={onSavedTextClick}
            onContactedTextClick={onContactedTextClick}
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
