import { FunctionComponent, useState } from "react";
import FrameComponent from "../areRedundant2/FrameComponent2";
import styles from "./ListingForm.module.css";
import ImageInput from "./ImageInput";
import TypeStatusOptions from "./RentStatusOptions";

export type ListingFormType = {
  className?: string;
};

const ListingForm: FunctionComponent<ListingFormType> = ({
  className = "",
}) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImages([...selectedImages, ...Array.from(event.target.files)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  return (
    <div className={[styles.listingHeader, className].join(" ")}>
      <div className={styles.listYourPropertyWrapper}>
        <h1 className={styles.listYourProperty}>Rent your property</h1>
      </div>
      <div className={styles.imageInputParent}>
        <ImageInput />
        <TypeStatusOptions />
      </div>
    </div>
  );
};

export default ListingForm;
