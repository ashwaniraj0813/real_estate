import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MemberBlocks.module.css";

export type MemberBlocksType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const MemberBlocks: FunctionComponent<MemberBlocksType> = ({
  className = "",
  propPadding,
  propAlignSelf,
}) => {
<<<<<<< HEAD
  const memberInfoStyle: CSSProperties = useMemo(() => {
=======
  const memberImagesStyle: CSSProperties = useMemo(() => {
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  return (
    <div className={[styles.memberBlocks, className].join(" ")}>
<<<<<<< HEAD
      <div className={styles.memberInfo} style={memberInfoStyle}>
=======
      <div className={styles.memberImages}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
        <img
          className={styles.istockphoto1476170969170667aIcon}
          loading="lazy"
          alt=""
          src="/istockphoto1476170969170667a-1@2x.png"
        />
      </div>
      <div className={styles.johnWellingtonPhoneContainer}>
        <p className={styles.johnWellington}> John Wellington</p>
        <p className={styles.phone1122334455}> Phone : 1122334455</p>
      </div>
    </div>
  );
};

export default MemberBlocks;
