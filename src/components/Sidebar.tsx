import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
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
