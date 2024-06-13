import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import FrameComponent from "../components/FrameComponent";
import styles from "./UserProperties.module.css";

const UserProperties: FunctionComponent = () => {
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

  const onHomeIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileSettingsTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

  const onPreviouslyViewedTextClick = useCallback(() => {
    navigate("/user-previously-viewed0");
  }, [navigate]);

  const onSavedTextClick = useCallback(() => {
    navigate("/user-previously-saved0");
  }, [navigate]);

  const onContactedTextClick = useCallback(() => {
    navigate("/user-previously-contacted0");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userProperties0}>
      <Nav
        onLOGOTextClick={onLOGOTextClick}
        onHomeText1Click={onHomeText1Click}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onHomeIconClick}
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
          <b className={styles.myProperties}>My properties</b>
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
            <div className={styles.saved} onClick={onSavedTextClick}>
              Saved
            </div>
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
            <div className={styles.logOut} onClick={onLogOutTextClick}>
              Log out
            </div>
          </div>
        </div>
        <FrameComponent
          httpslottiefilescomanimat="/httpslottiefilescomanimationshouse7c0f7yoykz@2x.png"
          youHaventSavedAnyProperty="You haven’t bought or sold any property yet!"
          allThePropertiesAndProjec="All the properties and projects that you have bought or sold will start appearing here. Search or explore cities now."
          propPadding="var(--padding-93xl) 0px 0px"
          propGap="27px"
          propPadding1="0px var(--padding-xl) 0px var(--padding-6xl)"
          propHeight="unset"
          propWidth="350px"
          propMaxHeight="100%"
          propHeight1="unset"
          propDisplay="unset"
          onHomeContainerClick={onHomeContainerClick}
        />
      </main>
    </div>
  );
};

export default UserProperties;
