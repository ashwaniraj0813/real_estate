import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import ListingHeader from "../components/ListingHeader";
import styles from "./Sell.module.css";

const Sell: FunctionComponent = () => {
  return (
    <div className={styles.sell}>
      <Navbar />
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
