import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
<<<<<<< HEAD
  withItsOwnPool?: string;
  image3?: string;
=======
  image3?: string;
  withItsOwnPool?: string;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  mumbai?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
<<<<<<< HEAD
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propLeft?: CSSProperties["left"];
  propPadding1?: CSSProperties["padding"];
=======
  featuredPropertyTwoDetailWidth?: CSSProperties["width"];
  featuredPropertyTwoDetailPadding?: CSSProperties["padding"];
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivPadding1?: CSSProperties["padding"];
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
<<<<<<< HEAD
  withItsOwnPool,
  image3,
  mumbai,
  propPadding,
  propWidth,
  propAlignSelf,
  propLeft,
  propPadding1,
=======
  image3,
  withItsOwnPool,
  mumbai,
  propPadding,
  featuredPropertyTwoDetailWidth,
  featuredPropertyTwoDetailPadding,
  frameDivWidth,
  frameDivPadding,
  frameDivAlignSelf,
  frameDivPadding1,
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

<<<<<<< HEAD
  const withItsOwnStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const mapPinIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.withItsOwnPoolParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.withItsOwn} style={withItsOwnStyle}>
        {withItsOwnPool}
      </div>
      <div className={styles.image3Parent}>
        <img className={styles.image3Icon} loading="lazy" alt="" src={image3} />
        <div className={styles.frameChild} />
        <img
          className={styles.mapPinIcon}
          alt=""
          src="/map-pin2@2x.png"
          style={mapPinIconStyle}
        />
      </div>
      <div className={styles.mumbaiWrapper} style={frameDiv1Style}>
        <div className={styles.mumbai}>{mumbai}</div>
=======
  const featuredPropertyTwoDetailsStyle: CSSProperties = useMemo(() => {
    return {
      width: featuredPropertyTwoDetailWidth,
      padding: featuredPropertyTwoDetailPadding,
    };
  }, [featuredPropertyTwoDetailWidth, featuredPropertyTwoDetailPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      padding: frameDivPadding,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivPadding, frameDivAlignSelf]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  return (
    <div
      className={[styles.image3Parent, className].join(" ")}
      style={frameDivStyle}
    >
      <img className={styles.image3Icon} loading="lazy" alt="" src={image3} />
      <div className={styles.frameChild} />
      <div
        className={styles.featuredPropertyTwoDetails}
        style={featuredPropertyTwoDetailsStyle}
      >
        <div className={styles.frameParent}>
          <div className={styles.withItsOwnPoolWrapper} style={frameDiv1Style}>
            <div className={styles.withItsOwn}>{withItsOwnPool}</div>
          </div>
          <div className={styles.mapPinParent}>
            <img className={styles.mapPinIcon} alt="" src="/map-pin@2x.png" />
            <div className={styles.mumbaiWrapper} style={frameDiv2Style}>
              <div className={styles.mumbai}>{mumbai}</div>
            </div>
          </div>
        </div>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
      </div>
    </div>
  );
};

export default FrameComponent1;
