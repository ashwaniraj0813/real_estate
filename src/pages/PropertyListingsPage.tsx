import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SortAndFilter from "../components/SortAndFilter";
import PropertyCard from "../components/PropertyCard";
import styles from "./PropertyListingsPage.module.css";

const propertyData = [
  {
    imageSrc: "/image-41@2x.png",
    title: "Villa with Spacious and Large Garden",
    location: "Pune",
    acres: "1.5 acres",
    price: "Rs. 3 crores",
  },
  {
    imageSrc: "/image-42@2x.png",
    title: "Modern Apartment in City Center",
    location: "Mumbai",
    acres: "0.5 acres",
    price: "Rs. 2 crores",
  },
  {
    imageSrc: "/image-43@2x.png",
    title: "Luxury Condo with Sea View",
    location: "Chennai",
    acres: "1.2 acres",
    price: "Rs. 5 crores",
  },
  {
    imageSrc: "/image-44@2x.png",
    title: "Spacious Bungalow in Suburbs",
    location: "Bangalore",
    acres: "2 acres",
    price: "Rs. 4 crores",
  },
  {
    imageSrc: "/image-45@2x.png",
    title: "Cozy Cottage by the Lake",
    location: "Nainital",
    acres: "3 acres",
    price: "Rs. 1.5 crores",
  },
  {
    imageSrc: "/image-46@2x.png",
    title: "Penthouse with City Skyline View",
    location: "Delhi",
    acres: "0.8 acres",
    price: "Rs. 6 crores",
  },
  {
    imageSrc: "/image-47@2x.png",
    title: "Ranch Style House with Farm",
    location: "Hyderabad",
    acres: "5 acres",
    price: "Rs. 3.5 crores",
  },
  {
    imageSrc: "/image-48@2x.png",
    title: "Beachfront Villa",
    location: "Goa",
    acres: "2.5 acres",
    price: "Rs. 7 crores",
  },
  {
    imageSrc: "/image-49@2x.png",
    title: "Mountain Retreat",
    location: "Manali",
    acres: "4 acres",
    price: "Rs. 2.8 crores",
  },
  {
    imageSrc: "/image-50@2x.png",
    title: "Modern Duplex in Tech Hub",
    location: "Pune",
    acres: "1 acre",
    price: "Rs. 3.2 crores",
  },
];

const PropertyListingsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const onRentTextClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);
  const onPropertyCardContainerClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);
  const onSellTextClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);

  return (
    <div className={styles.propertyListingsPage}>
      <Navbar onRentTextClick={onRentTextClick} onSellTextClick={onSellTextClick} />
      <main className={styles.sortAndFilterParent}>
        <SortAndFilter />
        <section className={styles.gridContainer}>
     

              {propertyData.map((property, index) => (
                <PropertyCard
                //  className="listingRow"
                  key={index}
                  imageSrc={property.imageSrc}
                  title={property.title}
                  location={property.location}
                  acres={property.acres}
                  price={property.price}
                  onClick={onPropertyCardContainerClick}
                />
              ))}

        
        </section>
      </main>
    </div>
  );
};

export default PropertyListingsPage;
