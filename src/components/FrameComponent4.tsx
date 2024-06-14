import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

export type FrameComponentType = {
  className?: string;
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
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
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
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.frameParent} style={frameDiv3Style}>
        <div
          className={styles.httpslottiefilescomanimatWrapper}
          style={frameDiv4Style}
        >
          <img
            className={styles.httpslottiefilescomanimatIcon}
            loading="lazy"
            alt=""
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
          <div className={styles.home} onClick={onHomeContainerClick}>
            <div className={styles.homeButton}>
              <div className={styles.homeButtonChild} />
              <img
                className={styles.tablerhomeIcon}
                loading="lazy"
                alt=""
                src="/tablerhome.svg"
              />
              <div className={styles.homeContainer}>
                <b className={styles.home1}>Home</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
