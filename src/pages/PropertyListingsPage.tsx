import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SortAndFilter from "../components/SortAndFilter";
import PropertyCard from "../components/PropertyCard";
import styles from "./PropertyListingsPage.module.css";

const PropertyListingsPage: FunctionComponent = () => {
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/property", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const result = await response.json();
        setProperties(result);
      } catch (error) {
        console.log("Error fetching property cards:", error);
      }
    };

    fetchProperties();
  }, []); // Empty array to ensure it runs only once when the component mounts

  const onRentTextClick = useCallback(() => {
    navigate("/rent");
  }, [navigate]);

  const onSellTextClick = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  return (
    <div className={styles.propertyListingsPage}>
      <Navbar />
      <main className={styles.sortAndFilterParent}>
        <SortAndFilter />
        <section className={styles.listings}>
          {properties.map((property) => (
            <Link
              key={property._id}
              to={`/property-details-page/${property._id}`} // Fixed string interpolation with backticks
              className={styles.linkWrapper} // Add any necessary styles for the Link
            >
              <PropertyCard
                title={property.title}
                city={property.city}
                price={property.price.toString()} // Ensure price is converted to string if necessary
                area={property.area.toString()} // Ensure area is converted to string if necessary
              />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PropertyListingsPage;
