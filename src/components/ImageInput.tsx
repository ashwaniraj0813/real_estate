import { FunctionComponent } from "react";
import styles from "./ImageInput.module.css";

export type ImageInputProps = {
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (index: number) => void;
  selectedImages: File[];
};

const ImageInput: FunctionComponent<ImageInputProps> = ({ handleImageChange, handleRemoveImage, selectedImages }) => {
  return (
<<<<<<< HEAD
    <div className={styles.imageInput}>
      <div className={styles.imageInputChild} />
      <div className={styles.materialSymbolsimagesmodeOuWrapper}>
        <label htmlFor="imageInput">
=======
    <div className={[styles.imageInput, className].join(" ")}>
      <label htmlFor="imageInput" className={styles.uploadLabel}>
        <div className={styles.materialSymbolsimagesmodeOuWrapper}>
>>>>>>> 319ac7b (style changes)
          <img
            className={styles.materialSymbolsimagesmodeOuIcon}
            loading="lazy"
            alt="Upload images"
            src="/materialsymbolsimagesmodeoutline.svg"
          />
          <h2 className={styles.addImages}>Add images</h2>
        </div>
        <input
          id="imageInput"
          className={styles.imageInputField}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </label>
      
      <div className={styles.fileList}>
        {selectedImages.map((image, index) => (
          <div key={index} className={styles.fileItem}>
            <span className={styles.fileName}>{image.name}</span>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => handleRemoveImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageInput;
