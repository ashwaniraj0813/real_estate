import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../components/Navbar11";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Amenities from "../components/Amenities";
import FrameComponent4 from "../components/FrameComponent41";
import FrameComponent1 from "../components/FrameComponent12";
import FrameComponent from "../components/FrameComponent";
import styles from "./PropertyDetailsPage.module.css";

interface Property {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  address: string;
  city: string;
  price: number;
  Bhk: number;
  area: number;
  type: string;
  status: string;
  purpose: string;
  amenities: string[];
  created_at: string;
  __v: number;
}

const PropertyDetailsPage: FunctionComponent = () => {
  const { property_id } = useParams<{ property_id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/property/${property_id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch property details");
        }

        const result = await response.json();
        setProperty(result.property);
        console.log(property);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Failed to fetch property details");
      }
    };

    fetchProperty();
  }, [property_id]);

  if (error) {
    return <div className={styles.propertyDetailsPage}>Error: {error}</div>;
  }

  return (
    <div className={styles.propertyDetailsPage}>
      <Navbar1 />
      {property ? (
        <div>
          <FrameComponent6
            title={property.title}
            city={property.city}
            price={property.price.toString()}
            area={property.area.toString()}
            type={property.type}
            status={property.status}
            bedrooms={property.Bhk}
            bathrooms={property.Bhk} // Update if there is a separate bathrooms property
          />
          <FrameComponent5 />
          <section className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <b className={styles.description1}>Description</b>
              <div className={styles.loremIpsumHasContainer}>
                <span>
                  <p className={styles.loremIpsumHas}>{property.description}</p>
                </span>
              </div>
            </div>
          </section>
          <Amenities amenities={property.amenities} /> Pass amenities as prop
          <FrameComponent4 />
          <FrameComponent1 />
          <FrameComponent />
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default PropertyDetailsPage;
