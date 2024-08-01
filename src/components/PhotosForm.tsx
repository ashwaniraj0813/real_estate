import React from 'react';
import styles from './PhotosForm.module.css';

interface PhotosFormProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (index: number) => void;
  selectedImages: File[];
  nextStep: () => void;
  prevStep: () => void;
}

const PhotosForm: React.FC<PhotosFormProps> = ({ handleImageChange, handleRemoveImage, selectedImages, nextStep, prevStep }) => {
  return (
    <div className={styles.formSection}>
      <h2>Photos and Videos</h2>
      <input type="file" accept="image/*,video/*" onChange={handleImageChange} multiple />
      <div className={styles.imagePreview}>
        {selectedImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img className={styles.thumbnail} src={URL.createObjectURL(image)} alt={`preview ${index}`} />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PhotosForm;
