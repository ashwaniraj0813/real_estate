import { FunctionComponent } from "react";
import TestimonialTwoContent from "./TestimonialTwoContent";
import styles from "./HappyTradeParent.module.css";

export type HappyTradeParentType = {
  className?: string;
};

const HappyTradeParent: FunctionComponent<HappyTradeParentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.happyTradeParent, className].join(" ")}>
      <div className={styles.happyTradeParentChild} />
      <div className={styles.customerHeadingWrapper}>
        <div className={styles.customerHeading}>
          <h1 className={styles.happyCustomers}>HAPPY CUSTOMERS</h1>
          <div className={styles.happyTradeWrapper}>
            <b className={styles.happyTrade}>HAPPY TRADE</b>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.footerSellLogin}>
          <div className={styles.testimonialTwoAuthor}>
            <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
          </div>
          <TestimonialTwoContent />
        </div>
        <TestimonialTwoContent />
        <TestimonialTwoContent />
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector-3.svg" />
    </section>
  );
};

export default HappyTradeParent;
