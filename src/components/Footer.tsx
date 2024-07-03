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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
        <a className={styles.aboutUs} onClick={onAboutUsTextClick}>About us</a>
      </div>

      <div className={styles.right}>        
        <a className={`${styles.footitem} ${styles.buy}`} onClick={onBuyTextClick}>Buy</a>
        <a className={`${styles.footitem} ${styles.rent}`} onClick={onRentTextClick}>Rent</a>
        <a className={`${styles.footitem} ${styles.sell}`} onClick={onSellTextClick}>Sell</a>
        <a className={`${styles.footitem} ${styles.admin}`} onClick={onAdminTextClick}>Admin</a>
      </div>
    </section>
  );
};

export default Footer;
