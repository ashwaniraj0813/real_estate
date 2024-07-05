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
  onLOGOTextClick?: () => void;

  /** Current page prop */
  currentPage: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  className = "",
  sidebarMarginLeft,
  onLOGOTextClick,
  currentPage,
}) => {
  const navigate = useNavigate();

  const sidebar1Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: sidebarMarginLeft,
    };
  }, [sidebarMarginLeft]);

  const getCurrentPageClass = (page: string) => {
    return currentPage === page ? styles.currPage : styles.notCurrPage;
  };

  const onProfileSettingTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
  }, [navigate]);

  const onAppointmentsTextClick0 = useCallback(() => {
    navigate("/user-appointments");
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
  const onLogOutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={[styles.sidebar, className].join(" ")}
      style={sidebar1Style}
    >
      <div
        className={getCurrentPageClass("profile-settings")}
        onClick={onProfileSettingTextClick}
      >
        Profile settings
      </div>
      <div
        className={getCurrentPageClass("user-appointments0")}
        onClick={onAppointmentsTextClick0}
      >
        Appointments
      </div>
      <div
        className={getCurrentPageClass("user-properties0")}
        onClick={onMyPropertiesTextClick}
      >
        My properties
      </div>
      <div>
        <div className={getCurrentPageClass("user-past-searches0")} onClick={onPastSearchesTextClick}>
          Past searches
        </div>
      </div>
      <div
        className={getCurrentPageClass("user-previously-viewed0")}
        onClick={onPreviouslyViewedTextClick}
      >
        Previously viewed
      </div>
      <div>
        <div className={getCurrentPageClass("user-previously-saved0")} onClick={onSavedTextClick}>
          Saved
        </div>
      </div>
      <div>
        <div className={getCurrentPageClass("user-previously-contacted0")} onClick={onContactedTextClick}>
          Contacted
        </div>
      </div>
      <div>
        <div className={getCurrentPageClass("notifications")}>Notifications</div>
      </div>
      <div>
        <div className={styles.notCurrPage} onClick={onLogOutClick}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
