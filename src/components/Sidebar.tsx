import { FunctionComponent, useCallback } from "react";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const onMyPropertiesTextClick = useCallback(() => {
    // Please sync "User Properties-0" to the project
  }, []);

  const onPastSearchesTextClick = useCallback(() => {
    // Please sync "User Past Searches-0" to the project
  }, []);

  const onPreviouslyViewedTextClick = useCallback(() => {
    // Please sync "User Previously viewed-0" to the project
  }, []);

  const onSavedTextClick = useCallback(() => {
    // Please sync "User Previously saved-0" to the project
  }, []);

  const onContactedTextClick = useCallback(() => {
    // Please sync "User Previously Contacted-0" to the project
  }, []);

  return (
    <div className={[styles.sidebar, className].join(" ")}>
      <div className={styles.sidebarChild} />
      <div className={styles.sidebarItems}>
        <b className={styles.profileSettings}>Profile settings</b>
      </div>
      <div className={styles.myProperties} onClick={onMyPropertiesTextClick}>
        My properties
      </div>
      <div className={styles.sidebarItems1}>
        <div className={styles.pastSearches} onClick={onPastSearchesTextClick}>
          Past searches
        </div>
      </div>
      <div
        className={styles.previouslyViewed}
        onClick={onPreviouslyViewedTextClick}
      >
        Previously viewed
      </div>
      <div className={styles.sidebarItems2}>
        <div className={styles.saved} onClick={onSavedTextClick}>
          Saved
        </div>
      </div>
      <div className={styles.sidebarItems3}>
        <div className={styles.contacted} onClick={onContactedTextClick}>
          Contacted
        </div>
      </div>
      <div className={styles.sidebarItems4}>
        <div className={styles.notifications}>Notifications</div>
      </div>
      <div className={styles.sidebarItems5}>
        <div className={styles.logOut}>Log out</div>
      </div>
    </div>
  );
};

export default Sidebar;
