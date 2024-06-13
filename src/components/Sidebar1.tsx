import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar1.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProfileSettingsTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
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
    <div className={[styles.sidebar, className].join(" ")}>
      <div className={styles.sidebarChild} />
      <div className={styles.logoutActionItems}>
        <a
          className={styles.profileSettings}
          onClick={onProfileSettingsTextClick}
        >
          Profile settings
        </a>
      </div>
      <a className={styles.myProperties} onClick={onMyPropertiesTextClick}>
        My properties
      </a>
      <div className={styles.logoutActionItemsParent}>
        <div className={styles.logoutActionItems1}>
          <a className={styles.pastSearches} onClick={onPastSearchesTextClick}>
            Past searches
          </a>
        </div>
        <b className={styles.previouslyViewed}>Previously viewed</b>
        <div className={styles.logoutActionItems2}>
          <div className={styles.userActions}>
            <div className={styles.savedWrapper}>
              <div className={styles.saved} onClick={onSavedTextClick}>
                Saved
              </div>
            </div>
            <div className={styles.contactedWrapper}>
              <div className={styles.contacted} onClick={onContactedTextClick}>
                Contacted
              </div>
            </div>
            <a className={styles.notifications}>Notifications</a>
            <div className={styles.logOutWrapper}>
              <a className={styles.logOut} onClick={onLogOutTextClick}>
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
