import { FunctionComponent } from "react";
import styles from "./ImageInput.module.css";

export type ImageInputProps = {
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (index: number) => void;
  selectedImages: File[];
};

const ImageInput: FunctionComponent<ImageInputProps> = ({ handleImageChange, handleRemoveImage, selectedImages }) => {
  return (
    <div className={styles.imageInput}>
      <div className={styles.imageInputChild} />
      <div className={styles.materialSymbolsimagesmodeOuWrapper}>
        <label htmlFor="imageInput">
          <img
            className={styles.materialSymbolsimagesmodeOuIcon}
            loading="lazy"
            alt="Upload images"
            src="/materialsymbolsimagesmodeoutline.svg"
          />
        </label>
        <input
          id="imageInput"
          className={styles.imageInputField}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      <h2 className={styles.addImages}>Add images</h2>
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
