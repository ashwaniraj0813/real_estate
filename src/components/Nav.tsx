import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export type NavType = {
  className?: string;
};

const Nav: FunctionComponent<NavType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.nav2, className].join(" ")}>
      <div className={styles.nav2Child} />
      <a className={styles.logo} onClick={onLOGOTextClick}>
        LOGO
      </a>
      <div className={styles.homeLinks}>
        <div className={styles.homeLink} onClick={onLOGOTextClick}>
          <div className={styles.tablerhomeParent}>
            <div className={styles.tablerhome} />
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.homeContent}>
            <a className={styles.home}>Home</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
