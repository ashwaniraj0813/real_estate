import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.footerInfo}>
        <b className={styles.logo}>LOGO</b>
        <p className={styles.itIsA}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. 
        </p>
      </div>
      <div className={styles.buyParent}>
        <b className={styles.buy} onClick={onBuyTextClick}>
          Buy
        </b>
        <div className={styles.rentLink}>
          <b className={styles.rent}>Rent</b>
          <div className={styles.sellParent}>
            <b className={styles.sell}>Sell</b>
            <b className={styles.login} onClick={onLoginTextClick}>
              Login
            </b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
