import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  withItsOwnPool?: string;
  image3?: string;
  mumbai?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propLeft?: CSSProperties["left"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  withItsOwnPool,
  image3,
  mumbai,
  propPadding,
  propWidth,
  propAlignSelf,
  propLeft,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

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
          src="/map-pin@2x.png"
          style={mapPinIconStyle}
        />
      </div>
      <div className={styles.mumbaiWrapper} style={frameDiv1Style}>
        <div className={styles.mumbai}>{mumbai}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
