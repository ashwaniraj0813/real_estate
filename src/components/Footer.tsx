import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <section className={[styles.footer, className].join(" ")}>
      <section className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.companyInfo}>
          <b className={styles.logo}>LOGO</b>
          <p className={styles.itIsA}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. 
          </p>
        </div>
        <b className={styles.aboutUs} onClick={onAboutUsTextClick}>
          About us
        </b>
      </div>
      <div className={styles.navigationLinks}>
        <b className={styles.buy} onClick={onBuyTextClick}>
          Buy
        </b>
        <div className={styles.rentLink}>
          <b className={styles.rent}>Rent</b>
          <div className={styles.accountLinks}>
            <b className={styles.sell}>Sell</b>
            <b className={styles.login} onClick={onLoginTextClick}>
              Login
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
