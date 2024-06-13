import { FunctionComponent } from "react";
import styles from "./TestimonialTwoContent.module.css";

export type TestimonialTwoContentType = {
  className?: string;
};

const TestimonialTwoContent: FunctionComponent<TestimonialTwoContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialTwoContent, className].join(" ")}>
      <div className={styles.testimonialDetails}>
        <div className={styles.wonderfulService}>Wonderful service!</div>
        <div className={styles.happyTradeTitle}>
          <i className={styles.loremIpsumHas}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries
          </i>
        </div>
      </div>
      <div className={styles.testimonialTwoContentChild} />
      <div className={styles.testimonialTwoDescription}>
        <div className={styles.thejidmeinsDentist}>-Thejidmeins, dentist</div>
      </div>
    </div>
  );
};

export default TestimonialTwoContent;
