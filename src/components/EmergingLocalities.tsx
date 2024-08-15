import React, { useState } from "react";
import styles from "./EmergingLocalities.module.css";
import LocalityCard from "./LocalityCard";

const EmergingLocalities: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <div className={styles.head}>
        <h2>Emerging Localities</h2>
        <p>Localities with recent development in this city</p>
      </div>
      <div className={styles.carouselContainer}>
        <button
          className={styles.navButton}
          onClick={scrollLeft}
          disabled={scrollIndex === 0}
        >
          &lt;
        </button>
        <div className={styles.carouselViewport}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(-${scrollIndex * 60}vw)` }}
          >
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
            <LocalityCard />
          </div>
        </div>
        <button className={styles.navButton} onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default EmergingLocalities;
