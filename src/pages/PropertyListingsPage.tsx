import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SortAndFilter from "../components/SortAndFilter";
import PropertyCard from "../components/PropertyCard";
import styles from "./PropertyListingsPage.module.css";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertyListingsPage: FunctionComponent = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchProperties = async (city: string = "", query: string = "") => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/property?city=${encodeURIComponent(
          city
        )}&query=${encodeURIComponent(query)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.statusText}`);
      }

      const result = await response.json();

      if (Array.isArray(result) && result.length === 0) {
        toast.warn("No properties found. Try another city.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setProperties(result);
      }
    } catch (error) {
      console.error("Error fetching property cards:", error.message);
      toast.error("Error fetching properties. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query") || "";
    const city = searchParams.get("city") || "";
    fetchProperties(city, query);
  }, [location.search]);

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
        <ToastContainer />
        <section className={styles.listings}>
          {properties.map((property) => (
            <Link
              key={property._id}
              to={`/property-details-page/${property._id}`}
              className={styles.linkWrapper}
            >
              <PropertyCard
                title={property.title}
                city={property.city}
                price={property.price.toString()}
                area={property.area.toString()}
              />
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyListingsPage;
