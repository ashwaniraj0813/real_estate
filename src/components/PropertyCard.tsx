import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export type PropertyCardType = {
  title: string;
  city: string;
  price: string;
  area: string;
  imageUrl?: string;
  className?: string;
  onPropertyCardContainerClick?: () => void;
};

const PropertyCard: FunctionComponent<PropertyCardType> = ({
  title,
  city,
  price,
  area,
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Deras-TreeHouse.JPG/242px-Deras-TreeHouse.JPG",
  className = "",
  onPropertyCardContainerClick,
}) => {
  return (
    <div className={[styles.propertyCard, className].join(" ")}>
      <img className={styles.image} alt={title} src={imageUrl} />
      <div className={styles.information}>
        <div className={styles.title}>{title}</div>
        <div className={styles.frameParent}>
          <div className={styles.location}>
            <img className={styles.mapPinIcon} alt="Location" src="/map-pin@2x.png" />
            <div className={styles.city}>{city}</div>
          </div>
          <div className={styles.details}>
            <div className={styles.area}>{area} acres</div>
            <div className={styles.price}> Rs. {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
