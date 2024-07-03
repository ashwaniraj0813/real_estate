import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Nav from "../components/Nav2";
=======
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar1";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import FrameComponent from "../components/FrameComponent4";
import styles from "./UserPreviouslySaved.module.css";

const UserPreviouslySaved: FunctionComponent = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onFirstIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
=======
  const onContactedTextClick = useCallback(() => {
    navigate("/user-previously-contacted0");
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

<<<<<<< HEAD
  const onPreviouslyViewedTextClick = useCallback(() => {
    navigate("/user-previously-viewed0");
  }, [navigate]);

  const onContactedTextClick = useCallback(() => {
    navigate("/user-previously-contacted0");
  }, [navigate]);

  return (
    <div className={styles.userPreviouslySaved0}>
      <Nav
        onLOGOTextClick={onLOGOTextClick}
        onHomeText1Click={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onFirstIconClick}
      />
      <main className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarChild} />
          <div className={styles.profileSettingsWrapper}>
            <div className={styles.profileSettings} onClick={onFirstIconClick}>
              Profile settings
            </div>
          </div>
          <div
            className={styles.myProperties}
            onClick={onMyPropertiesTextClick}
          >
            My properties
          </div>
          <div className={styles.pastSearchesWrapper}>
            <div
              className={styles.pastSearches}
              onClick={onPastSearchesTextClick}
            >
              Past searches
            </div>
          </div>
          <div
            className={styles.previouslyViewed}
            onClick={onPreviouslyViewedTextClick}
          >
            Previously viewed
          </div>
          <div className={styles.savedWrapper}>
            <b className={styles.saved}>Saved</b>
          </div>
          <div className={styles.sidebarItems}>
            <div className={styles.contacted} onClick={onContactedTextClick}>
              Contacted
            </div>
          </div>
          <div className={styles.sidebarItems1}>
            <div className={styles.notifications}>Notifications</div>
          </div>
          <div className={styles.sidebarItems2}>
            <div className={styles.logOut}>Log out</div>
          </div>
        </div>
        <FrameComponent
          httpslottiefilescomanimat="/httpslottiefilescomanimationshousebyxzsxrupb@2x.png"
          youHaventSavedAnyProperty="You haven’t saved any property lately!"
          allThePropertiesAndProjec="All the properties and projects that you have saved will start appearing here. Search or explore cities now."
          onHomeContainerClick={onLOGOTextClick}
        />
=======
  return (
    <div className={styles.userPreviouslySaved0}>
      <Navbar/>
      <main className={styles.sidebarParent}>
        <Sidebar
          propColor="#784dc6"
          propFontWeight="bold"
          propColor1="#000"
          propFontWeight1="unset"
          sidebarMinWidth="289px"
          sidebarLinksAlignSelf="stretch"
          pastSearchesFlex="1"
          pastSearchesColor="#000"
          pastSearchesFontWeight="unset"
          onContactedTextClick={onContactedTextClick}
          onPastSearchesTextClick={onPastSearchesTextClick}
        />
        <FrameComponent />
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
      </main>
    </div>
  );
};

export default UserPreviouslySaved;
