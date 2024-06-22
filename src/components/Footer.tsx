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

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.logoParent}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.itIsA}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. 
        </div>
        <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
          About us
        </div>
      </div>
      <div className={styles.companyInfo}>
        <div className={styles.buy} onClick={onBuyTextClick}>
          Buy
        </div>
        <div className={styles.rentParent}>
          <div className={styles.rent} onClick={onRentTextClick}>
            Rent
          </div>
          <div className={styles.rentSell}>
            <div className={styles.sell} onClick={onSellTextClick}>
              Sell
            </div>
            <div className={styles.login} onClick={onLoginTextClick}>
              Login
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
