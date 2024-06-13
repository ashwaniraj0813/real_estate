import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.httpslottiefilescomanimatWrapper}>
        <img
          className={styles.httpslottiefilescomanimatIcon}
          loading="lazy"
          alt=""
          src="/httpslottiefilescomanimationshouse7c0f7yoykz@2x.png"
        />
      </div>
      <div className={styles.youHaventViewedAnythingYeWrapper}>
        <div className={styles.youHaventViewed}>
          You haven’t viewed anything yet!
        </div>
      </div>
      <p className={styles.allTheProperties}>
        All the properties and projects that you have viewed will start
        appearing here. Search or explore cities now.
      </p>
      <div className={styles.homeButtonWrapper}>
        <button className={styles.homeButton} onClick={onHomeButtonClick}>
          <div className={styles.homeButtonChild} />
          <img className={styles.tablerhomeIcon} alt="" src="/tablerhome.svg" />
          <div className={styles.homeWrapper}>
            <b className={styles.home}>Home</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
