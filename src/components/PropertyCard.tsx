import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  imageSrc: string;
  title: string;
  location: string;
  acres: string;
  price: string;

  /** Action props */
  onClick?: () => void;
}

const PropertyCard: FunctionComponent<PropertyCardProps> = ({
  imageSrc,
  title,
  location,
  acres,
  price,
  onClick,
}) => {
  const navigate = useNavigate();

  const onPropertyCardContainerClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else {
      navigate("/property-details-page");
    }
  }, [navigate, onClick]);

  return (
    <div className={styles.propertyCard} onClick={onPropertyCardContainerClick}>
      <div className={styles.propertyCardChild} />
        <img className={styles.image4Icon} alt="" src={imageSrc} />
        <div className={styles.villaWithSpaciousAndLargeParent}>
          <div className={styles.villaWithSpacious}>{title}</div>
          <div className={styles.frameParent}>
            <div className={styles.mapPinParent}>
              <img className={styles.mapPinIcon} alt="" src="/map-pin2@2x.png" />
              <div className={styles.city}>
                <div className={styles.pune}>{location}</div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.xxAcresParent}>
                <div className={styles.xxAcres}>{acres}</div>
                <div className={styles.rsXCrores}>{price}</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PropertyCard;
