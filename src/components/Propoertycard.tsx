// PropertyCard.tsx
import { FunctionComponent } from "react";
import styles from "./Propertycardsingle.module.css";

interface PropertyCardProps {
  imageSrc: string;
  title: string;
  location: string;
  acres: string;
  price: string;
  onClick: () => void;
}

const PropertyCard: FunctionComponent<PropertyCardProps> = ({
  imageSrc,
  title,
  location,
  acres,
  price,
  onClick,
}) => {
  return (
    <div className={styles.propertyCard} onClick={onClick}>
      <div className={styles.propertyCardInner} />
      <img className={styles.imageIcon} loading="lazy" alt="" src={imageSrc} />
      <div className={styles.detailsContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          <div className={styles.location}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/map-pin1@2x.png"
            />
            <div className={styles.locationText}>{location}</div>
          </div>
          <div className={styles.acresPrice}>
            <div className={styles.acres}>{acres}</div>
            <div className={styles.price}>{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
