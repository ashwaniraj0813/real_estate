import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MailPassword.module.css";

export type MailPasswordType = {
  className?: string;
  mail?: string;
  mailPlaceholder?: string;
<<<<<<< HEAD

  /** Style props */
=======
  mailValue?: string;
  mailName?: string;
  onMailChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  propPadding?: CSSProperties["padding"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propPadding1?: CSSProperties["padding"];
  propBorderRadius1?: CSSProperties["borderRadius"];
};

const MailPassword: FunctionComponent<MailPasswordType> = ({
  className = "",
  mail,
  mailPlaceholder,
<<<<<<< HEAD
=======
  mailValue,
  mailName,
  onMailChange,
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
  propPadding,
  propBorderRadius,
  propPadding1,
  propBorderRadius1,
}) => {
  const mailPasswordStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const confirmMailPasswordStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      padding: propPadding1,
    };
  }, [propBorderRadius, propPadding1]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius1,
    };
  }, [propBorderRadius1]);

  return (
    <div
      className={[styles.mailPassword, className].join(" ")}
      style={mailPasswordStyle}
    >
      <div className={styles.mail}>{mail}</div>
      <div
        className={styles.confirmMailPassword}
        style={confirmMailPasswordStyle}
      >
        <div
          className={styles.confirmMailPasswordChild}
          style={rectangleDivStyle}
        />
        <input
          className={styles.mail1}
          placeholder={mailPlaceholder}
          type="text"
<<<<<<< HEAD
=======
          value={mailValue}
          name={mailName}
          onChange={onMailChange}
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
        />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MailPassword;
=======
export default MailPassword;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
