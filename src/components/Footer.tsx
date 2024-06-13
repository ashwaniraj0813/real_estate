import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "about-us" to the project
  }, []);

  const onBuyText2Click = useCallback(() => {
    // Please sync "Property Listings Page" to the project
  }, []);

  const onLoginText1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.testimonial}>
        <div className={styles.testimonialOneContent}>
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
      <div className={styles.footerLinks}>
        <b className={styles.buy} onClick={onBuyText2Click}>
          Buy
        </b>
        <div className={styles.rentParent}>
          <b className={styles.rent}>Rent</b>
          <div className={styles.testimonialTwo}>
            <b className={styles.sell}>Sell</b>
            <b className={styles.login} onClick={onLoginText1Click}>
              Login
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
