import { FunctionComponent } from "react";
import ImageInput from "./ImageInput";
import TypeStatusOptions from "./TypeStatusOptions";
import styles from "./ListingHeader.module.css";

export type ListingHeaderType = {
  className?: string;
};

const ListingHeader: FunctionComponent<ListingHeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.listingHeader, className].join(" ")}>
      <div className={styles.listYourPropertyWrapper}>
        <h1 className={styles.listYourProperty}>List your property</h1>
      </div>
      <div className={styles.imageInputParent}>
        <ImageInput />
        <TypeStatusOptions />
      </div>
    </div>
  );
};

export default ListingHeader;
