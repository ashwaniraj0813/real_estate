import { FunctionComponent, useState } from "react";
import FrameComponent from "../areRedundant2/FrameComponent2";
import styles from "./ListingForm.module.css";
import ImageInput from "./ImageInput";
import TypeStatusOptions from "./TypeStatusOptions";

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
    <div className={[styles.listingForm, className].join(" ")}>
      <div className={styles.header}>
        <h1 className={styles.rentYourProperty}>Rent your property</h1>
      </div>
      <div className={styles.content}>
      <ImageInput />
      <TypeStatusOptions />
      </div>
    </div>
  );
};

export default ListingForm;
