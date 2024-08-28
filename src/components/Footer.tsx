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
      <div className={styles.container}>
        <div className={styles.section}>
          <img src="../logo.png" alt="Logo" style={{height: "7vh", width: "8vw"}}/>
          <ul>
            <li>Mobile Apps</li>
            <li>Our Services</li>
            <li>Price Trends</li>
            <li>Post your Property</li>
            <li>Real Estate Investments</li>
            <li>Builders in India</li>
            <li>Area Converter</li>
            <li>Articles</li>
            <li>Rent Receipt</li>
            <li>Customer Service</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Company</h4>
          <ul>
            <li onClick={onAboutUsTextClick}>About us</li>
            <li onClick={onBuyTextClick}>Buy</li>
            <li onClick={onRentTextClick}>Post Property</li>
            <li onClick={onAdminTextClick}>Admin</li>
            <li>Contact us</li>
            <li>Careers with us</li>
            <li>Terms & Conditions</li>
            <li>Request Info</li>
            <li>Feedback</li>
            <li>Report a problem</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
            <li>Grievances</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Our Partners</h4>
          <ul>
            <li>Naukri.com</li>
            <li>Jeevansathi.com</li>
            <li>Brijj.com</li>
            <li>Shiksha.com</li>
            <li>Policybazaar.com</li>
            <li>AmbitionBox.com</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>Toll-Free: 1800 41 99099</p>
          <p>9:30 AM to 6:30 PM (Mon-Sun)</p>
          <p>Email: feedback@BasilAbode.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
