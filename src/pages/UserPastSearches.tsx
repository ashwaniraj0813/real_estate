import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Nav from "../components/Nav2";
=======
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar1";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import styles from "./UserPastSearches.module.css";

const UserPastSearches: FunctionComponent = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onLeftIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
  }, [navigate]);

  const onPreviouslyViewedTextClick = useCallback(() => {
    navigate("/user-previously-viewed0");
  }, [navigate]);

=======
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  const onSavedTextClick = useCallback(() => {
    navigate("/user-previously-saved0");
  }, [navigate]);

  const onContactedTextClick = useCallback(() => {
    navigate("/user-previously-contacted0");
  }, [navigate]);

<<<<<<< HEAD
  return (
    <div className={styles.userPastSearches0}>
      <Nav
        onLOGOTextClick={onLOGOTextClick}
        onHomeText1Click={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onLeftIconClick}
      />
      <section className={styles.homeNavigation}>
        <div className={styles.sidebarParent}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarChild} />
            <div className={styles.profileSettingsWrapper}>
              <div className={styles.profileSettings} onClick={onLeftIconClick}>
                Profile settings
              </div>
            </div>
            <a
              className={styles.myProperties}
              onClick={onMyPropertiesTextClick}
            >
              My properties
            </a>
            <div className={styles.pastSearchesWrapper}>
              <b className={styles.pastSearches}>Past searches</b>
            </div>
            <div
              className={styles.previouslyViewed}
              onClick={onPreviouslyViewedTextClick}
            >
              Previously viewed
            </div>
            <div className={styles.savedWrapper}>
              <div className={styles.saved} onClick={onSavedTextClick}>
                Saved
              </div>
            </div>
            <div className={styles.sidebarItemNames}>
              <div className={styles.contacted} onClick={onContactedTextClick}>
                Contacted
              </div>
            </div>
            <div className={styles.sidebarItemNames1}>
              <div className={styles.notifications}>Notifications</div>
            </div>
            <div className={styles.sidebarItemNames2}>
              <div className={styles.logOut}>Log out</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.httpslottiefilescomanimatWrapper}>
=======
  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userPastSearches0}>
      <Navbar/>
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
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
                <img
                  className={styles.httpslottiefilescomanimatIcon}
                  loading="lazy"
                  alt=""
                  src="/httpslottiefilescomanimationssearchw6fho68iw1@2x.png"
                />
              </div>
<<<<<<< HEAD
              <div className={styles.youHaventSearchedAnythingParent}>
                <div className={styles.youHaventSearched}>
                  You haven’t searched anything yet
                </div>
                <div className={styles.homeButtonWrapper}>
                  <button
                    className={styles.homeButton}
                    onClick={onLOGOTextClick}
=======
              <div className={styles.emptySearchMessage}>
                <div className={styles.youHaventSearched}>
                  You haven’t searched anything yet
                </div>
                <div className={styles.homeButton}>
                  <button
                    className={styles.homeButton1}
                    onClick={onHomeButtonClick}
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
                  >
                    <div className={styles.homeButtonChild} />
                    <img
                      className={styles.tablerhomeIcon}
                      alt=""
                      src="/tablerhome.svg"
                    />
<<<<<<< HEAD
                    <div className={styles.homeWrapper}>
                      <b className={styles.home}>Home</b>
=======
                    <div className={styles.homeButtonLabel}>
                      <div className={styles.home}>Home</div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
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
