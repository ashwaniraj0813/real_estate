import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;

  /** Style props */
  sidebarMarginLeft?: CSSProperties["marginLeft"];
  profileSettingsColor?: CSSProperties["color"];
  profileSettingsFontWeight?: CSSProperties["fontWeight"];
  myPropertiesColor?: CSSProperties["color"];
  myPropertiesFontWeight?: CSSProperties["fontWeight"];

  /** Action props */
  onHomeIconClick?: () => void;
  onMyPropertiesTextClick?: () => void;
  onLOGOTextClick?: () => void;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  className = "",
  sidebarMarginLeft,
  profileSettingsColor,
  profileSettingsFontWeight,
  myPropertiesColor,
  myPropertiesFontWeight,
  onHomeIconClick,
  onMyPropertiesTextClick,
  onLOGOTextClick,
}) => {
  const sidebar1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: sidebarMarginLeft,
    };
  }, [sidebarMarginLeft]);

  const profileSettingsStyle: CSSProperties = useMemo(() => {
    return {
      color: profileSettingsColor,
      fontWeight: profileSettingsFontWeight,
    };
  }, [profileSettingsColor, profileSettingsFontWeight]);

  const myPropertiesStyle: CSSProperties = useMemo(() => {
    return {
      color: myPropertiesColor,
      fontWeight: myPropertiesFontWeight,
    };
  }, [myPropertiesColor, myPropertiesFontWeight]);

  const navigate = useNavigate();

  const onMyPropertiesTextClick1 = useCallback(() => {
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
    <div
      className={[styles.sidebar, className].join(" ")}
      style={sidebar1Style}
    >
      <div className={styles.sidebarChild} />
      <div className={styles.sidebarItems}>
        <b
          className={styles.profileSettings}
          style={profileSettingsStyle}
          onClick={onHomeIconClick}
        >
          Profile settings
        </b>
      </div>
      <div
        className={styles.myProperties}
        onClick={onMyPropertiesTextClick}
        style={myPropertiesStyle}
      >
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
      <div className={styles.logoutButton}>
        <div className={styles.logOut} onClick={onLOGOTextClick}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
