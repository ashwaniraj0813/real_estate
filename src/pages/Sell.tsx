import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar1";
import ListingHeader from "../components/ListingHeader";
import styles from "./Sell.module.css";

const Sell: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onRentTextClick = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  return (
    <div className={styles.sell}>
      <Navbar
        navbarPadding="var(--padding-12xl) 137px var(--padding-12xl) var(--padding-93xl)"
        onLOGOTextClick={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onRentTextClick={onRentTextClick}
      />
      <main className={styles.listingContentWrapper}>
        <form className={styles.listingContent}>
          <ListingHeader />
          <div className={styles.submitButtonWrapper}>
            <button className={styles.submitButton}>
              <div className={styles.submitButtonChild} />
              <div className={styles.publish}>PUBLISH</div>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Sell;
