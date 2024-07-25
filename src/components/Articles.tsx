// components/Articles.tsx
import { FunctionComponent } from "react";
import styles from "./Articles.module.css"; // Create a new CSS module for the Articles component

const Articles: FunctionComponent = () => {
  return (
    <div className={styles.articles}>
      <div className={styles.heading}>REAL ESTATE AROUND THE GLOBE</div>
      <div className={styles.article}>
        <img src="/rectangle-39@2x.png" alt="Article" />
        <div className={styles.content}>
          <div className={styles.title}>THE FUTURE OF SELLING AND BUYING</div>
          <div className={styles.info}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old....
          </div>
          <div className={styles.readmore}>READ MORE ...</div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
