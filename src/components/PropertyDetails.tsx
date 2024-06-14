import { FunctionComponent } from "react";
import styles from "./PropertyDetails.module.css";

export type PropertyDetailsType = {
  className?: string;
};

const PropertyDetails: FunctionComponent<PropertyDetailsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.propertyDetails, className].join(" ")}>
      <div className={styles.ratings}>
        <img
          className={styles.starsIcon}
          loading="lazy"
          alt=""
          src="/stars.svg"
        />
        <div className={styles.reviews}>4.0 (131 reviews)</div>
      </div>
      <div className={styles.specifications}>
        <div className={styles.apartment}>Apartment</div>
        <div className={styles.furnished}>Furnished</div>
        <div className={styles.ft}> 189.45 ft²</div>
        <div className={styles.type}>Type</div>
        <div className={styles.bedrooms}>Bedrooms</div>
        <div className={styles.furnishing}>Furnishing</div>
        <div className={styles.area}>Area</div>
        <div className={styles.status}>Status</div>
        <b className={styles.b}>4</b>
        <div className={styles.price}>Price</div>
        <div className={styles.div}> £ 390000</div>
        <div className={styles.bathrooms}>Bathrooms</div>
        <b className={styles.b1}>2</b>
        <div className={styles.readyToMove}>Ready to move</div>
      </div>
      <img
        className={styles.web141Icon}
        loading="lazy"
        alt=""
        src="/web14-1@2x.png"
      />
      <div
        className={styles.portalNorthAction}
      >{`Portal North Action, London, England `}</div>
      <h2 className={styles.theLyra}>The Lyra</h2>
    </section>
  );
};

export default PropertyDetails;
