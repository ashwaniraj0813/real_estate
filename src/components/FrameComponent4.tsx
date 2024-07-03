import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.emptyStateWrapper, className].join(" ")}>
      <div className={styles.emptyState}>
        <div className={styles.httpslottiefilescomanimatWrapper}>
          <img
            className={styles.httpslottiefilescomanimatIcon}
            loading="lazy"
            alt=""
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
          <div className={styles.home} onClick={onHomeContainerClick}>
            <div className={styles.homeButton}>
              <div className={styles.homeButtonChild} />
              <img
                className={styles.tablerhomeIcon}
                loading="lazy"
                alt=""
                src="/tablerhome.svg"
              />
              <div className={styles.homeWrapper}>
                <div className={styles.home1}>Home</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
