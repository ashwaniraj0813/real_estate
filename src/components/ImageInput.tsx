import { FunctionComponent } from "react";
import styles from "./ImageInput.module.css";

export type ImageInputType = {
  className?: string;
};

const ImageInput: FunctionComponent<ImageInputType> = ({ className = "" }) => {
  return (
    <div className={[styles.imageInput, className].join(" ")}>
      <div className={styles.imageInputChild} />
      <div className={styles.materialSymbolsimagesmodeOuWrapper}>
        <img
          className={styles.materialSymbolsimagesmodeOuIcon}
          loading="lazy"
          alt=""
          src="/materialsymbolsimagesmodeoutline.svg"
        />
      </div>
      <h2 className={styles.addImages}>Add images</h2>
    </div>
  );
};

export default ImageInput;
