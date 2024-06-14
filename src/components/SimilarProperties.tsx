import { FunctionComponent } from "react";
import styles from "./SimilarProperties.module.css";

export type SimilarPropertiesType = {
  className?: string;
};

const SimilarProperties: FunctionComponent<SimilarPropertiesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.similarProperties, className].join(" ")}>
      <div className={styles.mostPopularPropertyCard}>
        <img
          className={styles.web31Icon}
          loading="lazy"
          alt=""
          src="/web3-1@2x.png"
        />
        <div className={styles.chapterIslingtonLondonContainer}>
          <p className={styles.chapterIslingtonLondon}>
            Chapter Islington, London
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.from390week}>From £390/week</p>
        </div>
      </div>
      <div className={styles.mostPopularPropertyCard1}>
        <img
          className={styles.web11Icon}
          loading="lazy"
          alt=""
          src="/web1-1@2x.png"
        />
        <div className={styles.coppermakerSquareLondonContainer}>
          <p className={styles.coppermakerSquareLondon}>
            Coppermaker Square, London
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.from3723month}>From £3,723/month</p>
        </div>
      </div>
      <div className={styles.mostPopularPropertyCard2}>
        <img
          className={styles.web41Icon}
          loading="lazy"
          alt=""
          src="/web4-1@2x.png"
        />
        <div className={styles.theLyraLondonContainer}>
          <p className={styles.theLyraLondon}>The Lyra, London</p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.from390week1}>From £390/week</p>
        </div>
      </div>
      <div className={styles.mostPopularPropertyCard3}>
        <img
          className={styles.web21Icon}
          loading="lazy"
          alt=""
          src="/web2-1@2x.png"
        />
        <div className={styles.ovoArenaBuildingContainer}>
          <p className={styles.ovoArenaBuilding}>OVO Arena Building, London</p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.from2195month}>From £2,195/month</p>
        </div>
      </div>
      <b className={styles.similarProperties1}>Similar Properties</b>
    </section>
  );
};

export default SimilarProperties;
