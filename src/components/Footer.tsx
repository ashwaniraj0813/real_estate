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

  const onRentTextClick = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  const onSellTextClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.left}>
        <a className={styles.logo}>LOGO</a>
        <div className={styles.text}>
        Welcome to LOGO, your trusted partner in the real estate market. 
        Whether you're buying, selling, or renting, we offer personalized services to meet your unique needs. Discover your dream property with LOGO today.
        </div>
        <a className={styles.aboutUs} onClick={onAboutUsTextClick}>About us</a>
      </div>

      <div className={styles.right}>        
        <a className={`${styles.footitem} ${styles.buy}`} onClick={onBuyTextClick}>Buy</a>
        <a className={`${styles.footitem} ${styles.rent}`} onClick={onRentTextClick}>Post Property</a>
        <a className={`${styles.footitem} ${styles.admin}`} onClick={onAdminTextClick}>Admin</a>
      </div>
    </section>
  );
};

export default Footer;
