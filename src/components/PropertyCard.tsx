import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export type PropertyCardType = {
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
  const navigate = useNavigate();

  const onCardClick = useCallback(() => {
    if (onPropertyCardContainerClick) {
      onPropertyCardContainerClick();
    } else {
      navigate("/property-details-page");
    }
  }, [onPropertyCardContainerClick, navigate]);

  return (
    <div
      className={[styles.propertyCard, className].join(" ")}
      onClick={onCardClick}
    >
      <div className={styles.propertyCardChild} />
      <img className={styles.image4Icon} alt={title} src={imageUrl} />
      <div className={styles.villaWithSpaciousAndLargeParent}>
        <div className={styles.villaWithSpacious}>
          {title}
        </div>
        <div className={styles.frameParent}>
          <div className={styles.mapPinParent}>
            <img className={styles.mapPinIcon} alt="Location" src="/map-pin11@2x.png" />
            <div className={styles.city}>
              <div className={styles.cityName}>{city}</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.xxAcresParent}>
              <div className={styles.area}>{area} acres</div>
              <div className={styles.price}> Rs. {price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
