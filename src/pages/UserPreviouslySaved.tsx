import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import FrameComponent from "../components/FrameComponent";
import styles from "./UserPreviouslySaved.module.css";

const UserPreviouslySaved: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    // Please sync "Property Listings Page" to the project
  }, []);

  const onFirstIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileSettingsTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

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
        onHomeText1Click={onHomeText1Click}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onFirstIconClick}
      />
      <main className={styles.sidebarParent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarChild} />
          <div className={styles.profileSettingsWrapper}>
            <div
              className={styles.profileSettings}
              onClick={onProfileSettingsTextClick}
            >
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
          onHomeContainerClick={onHomeContainerClick}
        />
      </main>
    </div>
  );
};

export default UserPreviouslySaved;
