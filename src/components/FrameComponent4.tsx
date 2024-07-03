<<<<<<< HEAD
import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
=======
import { FunctionComponent, useCallback } from "react";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

export type FrameComponentType = {
  className?: string;
<<<<<<< HEAD
  httpslottiefilescomanimat?: string;
  youHaventSavedAnyProperty?: string;
  allThePropertiesAndProjec?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propHeight1?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];

  /** Action props */
  onHomeContainerClick?: () => void;
=======
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
<<<<<<< HEAD
  httpslottiefilescomanimat,
  youHaventSavedAnyProperty,
  allThePropertiesAndProjec,
  propPadding,
  propGap,
  propPadding1,
  propHeight,
  propWidth,
  propMaxHeight,
  propHeight1,
  propDisplay,
  onHomeContainerClick,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const httpslottiefilescomanimatIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      maxHeight: propMaxHeight,
    };
  }, [propHeight, propWidth, propMaxHeight]);

  const youHaventSavedStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  const navigate = useNavigate();

  const onHomeContainerClick1 = useCallback(() => {
=======
}) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    navigate("/");
  }, [navigate]);

  return (
<<<<<<< HEAD
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.frameParent} style={frameDiv3Style}>
        <div
          className={styles.httpslottiefilescomanimatWrapper}
          style={frameDiv4Style}
        >
=======
    <div className={[styles.emptyStateWrapper, className].join(" ")}>
      <div className={styles.emptyState}>
        <div className={styles.httpslottiefilescomanimatWrapper}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
          <img
            className={styles.httpslottiefilescomanimatIcon}
            loading="lazy"
            alt=""
<<<<<<< HEAD
            src={httpslottiefilescomanimat}
            style={httpslottiefilescomanimatIconStyle}
          />
        </div>
        <div className={styles.youHaventSavedAnyPropertyWrapper}>
          <div className={styles.youHaventSaved} style={youHaventSavedStyle}>
            {youHaventSavedAnyProperty}
          </div>
        </div>
        <p className={styles.allTheProperties}>{allThePropertiesAndProjec}</p>
        <div className={styles.homeWrapper}>
=======
            src="/httpslottiefilescomanimationshousebyxzsxrupb@2x.png"
          />
        </div>
        <div className={styles.emptyMessage}>
          <div className={styles.youHaventSaved}>
            You haven’t saved any property lately!
          </div>
        </div>
        <div className={styles.allTheProperties}>
          All the properties and projects that you have saved will start
          appearing here. Search or explore cities now.
        </div>
        <div className={styles.homeNavigation}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
          <div className={styles.home} onClick={onHomeContainerClick}>
            <div className={styles.homeButton}>
              <div className={styles.homeButtonChild} />
              <img
                className={styles.tablerhomeIcon}
                loading="lazy"
                alt=""
                src="/tablerhome.svg"
              />
<<<<<<< HEAD
              <div className={styles.homeContainer}>
                <b className={styles.home1}>Home</b>
=======
              <div className={styles.homeWrapper}>
                <div className={styles.home1}>Home</div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
