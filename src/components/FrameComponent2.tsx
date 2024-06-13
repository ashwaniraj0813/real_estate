import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import styles from "./FrameComponent2.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onPropertyCardContainerClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.propertyCardWrapper}>
        <div
          className={styles.propertyCard}
          onClick={onPropertyCardContainerClick}
        >
          <div className={styles.propertyCardChild} />
          <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
          <div className={styles.villaWithSpaciousAndLargeParent}>
            <div className={styles.villaWithSpacious}>
              Villa with spacious and Large Garden
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.mapPinParent}>
                <img
                  className={styles.mapPinIcon}
                  alt=""
                  src="/map-pin1@2x.png"
                />
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
      </div>
      <PropertyCard
        onPropertyCardContainer6Click={onPropertyCardContainerClick}
      />
      <PropertyCard />
    </div>
  );
};

export default FrameComponent;
