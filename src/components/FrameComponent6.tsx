import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Props = {
  title: string;
  city: string;
  price: string;
  area: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Props> = ({
  title,
  city,
  price,
  area,
}) => {
  return (
    <section className={styles.breadcrumbWrapper}>
      <div className={styles.breadcrumb}>
        <div className={styles.homeUk}>{`Home > ${city} > ${title}`}</div>
        <div className={styles.propertyInfo}>
          <div className={styles.propertyDetails}>
            <div className={styles.propertyAttributes}>
              <div className={styles.attributeLabels}>
                <div className={styles.type}>Type: Apartment</div>
              </div>
              <div className={styles.status}>Status: Ready to move</div>
              <div className={styles.attributeLabels1}>
                <div className={styles.area}>Area: {area}</div>
              </div>
              <div className={styles.furnishingLabel}>
                <div className={styles.furnishing}>Furnishing: Furnished</div>
              </div>
              <div className={styles.attributeLabels2}>
                <div className={styles.bedrooms}>Bedrooms: 4</div>
              </div>
              <div className={styles.attributeLabels3}>
                <div className={styles.bathrooms}>Bathrooms: 2</div>
              </div>
              <div className={styles.price}>Price: £ {price}</div>
            </div>
            <div className={styles.rating}>
              <div className={styles.ratingStars}>
                <div className={styles.starsParent}>
                  <img
                    className={styles.starsIcon}
                    loading="lazy"
                    alt=""
                    src="/stars.svg"
                  />
                  <div className={styles.reviewsCount}>
                    <div className={styles.reviews}>4.0 (131 reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.web141Icon}
            loading="lazy"
            alt=""
            src="/web14-1@2x.png"
          />
          <div className={styles.propertyTitle}>
            <h2 className={styles.theLyra}>{title}</h2>
            <div className={styles.portalNorthAction}>{city}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
