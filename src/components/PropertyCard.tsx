<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
=======
import { FunctionComponent } from "react";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export type PropertyCardType = {
<<<<<<< HEAD
  className?: string;

  /** Action props */
  onPropertyCardContainer6Click?: () => void;
};

const PropertyCard: FunctionComponent<PropertyCardType> = ({
  className = "",
  onPropertyCardContainer6Click,
}) => {
  const navigate = useNavigate();

  const onPropertyCardContainerClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);

  return (
    <div
      className={[styles.propertyCard, className].join(" ")}
      onClick={onPropertyCardContainer6Click}
    >
      <div className={styles.propertyCardChild} />
      <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
      <div className={styles.villaWithSpaciousAndLargeParent}>
        <div className={styles.villaWithSpacious}>
          Villa with spacious and Large Garden
        </div>
        <div className={styles.frameParent}>
          <div className={styles.mapPinParent}>
            <img className={styles.mapPinIcon} alt="" src="/map-pin1@2x.png" />
            <div className={styles.city}>
              <div className={styles.pune}>Pune</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.xxAcresParent}>
              <div className={styles.xxAcres}>xx acres</div>
              <div className={styles.rsXCrores}>Rs. x crores</div>
            </div>
=======
  title: string;
  city: string;
  price: string;
  area: string;
  imageUrl?: string;
  className?: string;
  onPropertyCardContainerClick?: () => void;
};

const PropertyCard: FunctionComponent<PropertyCardType> = ({
  title,
  city,
  price,
  area,
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Deras-TreeHouse.JPG/242px-Deras-TreeHouse.JPG",
  className = "",
  onPropertyCardContainerClick,
}) => {
  return (
    <div className={[styles.propertyCard, className].join(" ")}>
      <img className={styles.image} alt={title} src={imageUrl} />
      <div className={styles.information}>
        <div className={styles.title}>{title}</div>
        <div className={styles.frameParent}>
          <div className={styles.location}>
            <img className={styles.mapPinIcon} alt="Location" src="/map-pin@2x.png" />
            <div className={styles.city}>{city}</div>
          </div>
          <div className={styles.details}>
            <div className={styles.area}>{area} acres</div>
            <div className={styles.price}> Rs. {price}</div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
