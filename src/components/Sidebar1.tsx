<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
=======
import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar1.module.css";

export type SidebarType = {
  className?: string;
<<<<<<< HEAD
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
=======

  /** Style props */
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  propColor1?: CSSProperties["color"];
  propFontWeight1?: CSSProperties["fontWeight"];
  sidebarMinWidth?: CSSProperties["minWidth"];
  sidebarLinksAlignSelf?: CSSProperties["alignSelf"];
  pastSearchesFlex?: CSSProperties["flex"];
  pastSearchesColor?: CSSProperties["color"];
  pastSearchesFontWeight?: CSSProperties["fontWeight"];

  /** Action props */
  onSavedTextClick?: () => void;
  onContactedTextClick?: () => void;
  onPastSearchesTextClick?: () => void;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  className = "",
  propColor,
  propFontWeight,
  propColor1,
  propFontWeight1,
  sidebarMinWidth,
  sidebarLinksAlignSelf,
  pastSearchesFlex,
  pastSearchesColor,
  pastSearchesFontWeight,
  onSavedTextClick,
  onContactedTextClick,
  onPastSearchesTextClick,
}) => {
  const savedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  const contactedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      fontWeight: propFontWeight1,
    };
  }, [propColor1, propFontWeight1]);

  const sidebarStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: sidebarMinWidth,
    };
  }, [sidebarMinWidth]);

  const sidebarLinksStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: sidebarLinksAlignSelf,
    };
  }, [sidebarLinksAlignSelf]);

  const pastSearchesStyle: CSSProperties = useMemo(() => {
    return {
      flex: pastSearchesFlex,
      color: pastSearchesColor,
      fontWeight: pastSearchesFontWeight,
    };
  }, [pastSearchesFlex, pastSearchesColor, pastSearchesFontWeight]);

>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  const navigate = useNavigate();

  const onProfileSettingsTextClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
  }, [navigate]);

<<<<<<< HEAD
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
=======
  const onPastSearchesTextClick1 = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

  const onPreviouslyViewedTextClick = useCallback(() => {
    navigate("/user-previously-viewed0");
  }, [navigate]);

  const onSavedTextClick1 = useCallback(() => {
    navigate("/user-previously-saved0");
  }, [navigate]);

  return (
    <div className={[styles.sidebar, className].join(" ")} style={sidebarStyle}>
      <div className={styles.sidebarChild} />
      <div className={styles.sidebarLinks}>
        <div
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
          className={styles.profileSettings}
          onClick={onProfileSettingsTextClick}
        >
          Profile settings
<<<<<<< HEAD
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
=======
        </div>
      </div>
      <div className={styles.myProperties} onClick={onMyPropertiesTextClick}>
        My properties
      </div>
      <div className={styles.sidebarLinks1} style={sidebarLinksStyle}>
        <div
          className={styles.pastSearches}
          onClick={onPastSearchesTextClick}
          style={pastSearchesStyle}
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
      <div className={styles.sidebarLinks2}>
        <div
          className={styles.saved}
          onClick={onSavedTextClick}
          style={savedStyle}
        >
          Saved
        </div>
      </div>
      <div className={styles.sidebarItems}>
        <b
          className={styles.contacted}
          style={contactedStyle}
          onClick={onContactedTextClick}
        >
          Contacted
        </b>
      </div>
      <div className={styles.sidebarItems1}>
        <div className={styles.notifications}>Notifications</div>
      </div>
      <div className={styles.sidebarItems2}>
        <div className={styles.logOut}>Log out</div>
      </div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    </div>
  );
};

export default Sidebar;
