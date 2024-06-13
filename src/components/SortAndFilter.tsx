import { FunctionComponent } from "react";
import styles from "./SortAndFilter.module.css";

export type SortAndFilterType = {
  className?: string;
};

const SortAndFilter: FunctionComponent<SortAndFilterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.sortAndFilter, className].join(" ")}>
      <div className={styles.sortAndFilterChild} />
      <a className={styles.sortBy}>Sort By</a>
      <a className={styles.location}>Location</a>
      <a className={styles.area}>Area</a>
      <div className={styles.priceRange}>Price Range</div>
      <div className={styles.propertyType}>Property Type</div>
      <div className={styles.numberOfBedrooms}>Number of Bedrooms</div>
      <div className={styles.facilities}>Facilities</div>
      <div className={styles.amenities}>Amenities</div>
    </div>
  );
};

export default SortAndFilter;
