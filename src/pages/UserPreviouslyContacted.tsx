import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Nav from "../components/Nav2";
=======
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar1";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import styles from "./UserPreviouslyContacted.module.css";

const UserPreviouslyContacted: FunctionComponent = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
=======
  const onSavedTextClick = useCallback(() => {
    navigate("/user-previously-saved0");
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

<<<<<<< HEAD
  const onPreviouslyViewedTextClick = useCallback(() => {
    navigate("/user-previously-viewed0");
  }, [navigate]);

  const onSavedTextClick = useCallback(() => {
    navigate("/user-previously-saved0");
=======
  const onHomeContainerClick = useCallback(() => {
    navigate("/");
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  }, [navigate]);

  return (
    <div className={styles.userPreviouslyContacted0}>
<<<<<<< HEAD
      <Nav
        onLOGOTextClick={onLOGOTextClick}
        onHomeText1Click={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onHomeIconClick}
      />
      <main className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarChild} />
          <div className={styles.profileSettingsWrapper}>
            <div className={styles.profileSettings} onClick={onHomeIconClick}>
              Profile settings
            </div>
          </div>
          <a className={styles.myProperties} onClick={onMyPropertiesTextClick}>
            My properties
          </a>
          <div className={styles.pastSearchesWrapper}>
            <a
              className={styles.pastSearches}
              onClick={onPastSearchesTextClick}
            >
              Past searches
            </a>
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
          <div className={styles.sidebarItems}>
            <b className={styles.contacted}>Contacted</b>
          </div>
          <div className={styles.sidebarItems1}>
            <div className={styles.notifications}>Notifications</div>
          </div>
          <div className={styles.sidebarItems2}>
            <div className={styles.logOut}>Log out</div>
          </div>
        </div>
        <div className={styles.contactImage}>
          <div className={styles.frameParent}>
            <div className={styles.image6Wrapper}>
=======
      <Navbar />
      <main className={styles.sidebarParent}>
        <Sidebar
          onSavedTextClick={onSavedTextClick}
          onPastSearchesTextClick={onPastSearchesTextClick}
        />
        <div className={styles.contactImage}>
          <div className={styles.content}>
            <div className={styles.emptyState}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
            </div>
<<<<<<< HEAD
            <div className={styles.youHaventContactedAnyoneLWrapper}>
=======
            <div className={styles.noContactsMessage}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
              <div className={styles.youHaventContacted}>
                You haven’t contacted anyone lately!
              </div>
            </div>
<<<<<<< HEAD
            <p className={styles.youWillSee}>
              You will see the list of properties / projects here, where you
              have contacted the advertiser
            </p>
            <div className={styles.homeWrapper}>
              <div className={styles.home} onClick={onLOGOTextClick}>
=======
            <div className={styles.youWillSee}>
              You will see the list of properties / projects here, where you
              have contacted the advertiser
            </div>
            <div className={styles.homeWrapper}>
              <div className={styles.home} onClick={onHomeContainerClick}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
                <div className={styles.homeButton}>
                  <div className={styles.homeButtonChild} />
                  <img
                    className={styles.tablerhomeIcon}
                    loading="lazy"
                    alt=""
                    src="/tablerhome.svg"
                  />
                  <div className={styles.homeContainer}>
<<<<<<< HEAD
                    <b className={styles.home1}>Home</b>
=======
                    <div className={styles.home1}>Home</div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
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
