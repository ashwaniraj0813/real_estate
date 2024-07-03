<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";
=======
import { FunctionComponent, useMemo, type CSSProperties } from "react";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import styles from "./FrameComponent2.module.css";

export type FrameComponentType = {
  className?: string;
<<<<<<< HEAD
=======
  bathroom?: string;
  bathroomPlaceholder?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propPadding?: CSSProperties["padding"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propWidth?: CSSProperties["width"];
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
<<<<<<< HEAD
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
=======
  bathroom,
  bathroomPlaceholder,
  propBorderRadius,
  propPadding,
  propBorderRadius1,
  propWidth,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      padding: propPadding,
    };
  }, [propBorderRadius, propPadding]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  const bathroomStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.bathroomParent, className].join(" ")}>
      <div className={styles.bathroom}>{bathroom}</div>
      <div className={styles.rectangleParent} style={frameDiv6Style}>
        <div className={styles.frameChild} style={rectangleDiv1Style} />
        <input
          className={styles.bathroom1}
          placeholder={bathroomPlaceholder}
          type="text"
          style={bathroomStyle}
        />
      </div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    </div>
  );
};

export default FrameComponent;
