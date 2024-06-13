import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export type PropertyCardType = {
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
            <div className={styles.puneWrapper}>
              <div className={styles.pune}>Pune</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.xxAcresParent}>
              <div className={styles.xxAcres}>xx acres</div>
              <div className={styles.rsXCrores}>Rs. x crores</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
