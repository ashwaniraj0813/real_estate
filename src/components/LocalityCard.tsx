import React from "react";
import styles from "./LocalityCard.module.css";

const LocalityCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          src="image.png"
          alt="Profile"
          className={styles.profilePic}
        />
        <div className={styles.info}>
          <div className={styles.titleRow}>
            <span className={styles.title}>Madhurawada</span>
            <span className={styles.rating}>
              4.3 <span className={styles.star}>★</span>
            </span>
          </div>
          <span className={styles.subtitle}>17 New Projects</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.link}>Insights</span>
        <span className={styles.divider}></span>
        <span className={styles.link}>Projects</span>
      </div>
    </div>
  );
};

export default LocalityCard;
