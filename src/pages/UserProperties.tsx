import { FunctionComponent, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./UserProperties.module.css";
import LottieAnimation from "../components/LottieAnimation";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import { jwtDecode } from "jwt-decode"; // Correct import without curly braces
import { Link } from "react-router-dom";

const UserProperties: FunctionComponent = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    let decoded: { email: string } = { email: "" }; // Initialize decoded properly
    if (token) {
      decoded = jwtDecode<{ email: string }>(token); // Properly type decoded
    }

    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/property/${decoded.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const result = await response.json();

        console.log(result.data);
        setProperties(result.data);
      } catch (error) {
        console.log("Error fetching property cards:", error);
      }
    };

    fetchProperties();
  }, []); // Only run once on component mount

  return (
    <div className={styles.userProperties0}>
      <Navbar />
      <main className={styles.sidebarContainer}>
        <Sidebar
          currentPage="user-properties0"
          sidebarMarginLeft="unset"
          profileSettingsColor="#000"
          profileSettingsFontWeight="unset"
          myPropertiesColor="#784dc6"
          myPropertiesFontWeight="bold"
        />
        {properties.length > 0 ? (
          properties.map((property) => (
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
          ))
        ) : (
          <div className={styles.emptyStateIllustration}>
            <div className={styles.emptyState}>
              <div className={styles.illustrationContainer}>
                <LottieAnimation
                  animationLink="https://lottie.host/fc9fb0d0-1766-4e25-8483-ba9f9fa545f6/rNwcjg5a6Q.json"
                  style={{ width: 500, height: 400 }}
                />
              </div>
              <div className={styles.emptyStateMessage}>
                <div className={styles.youHaventBought}>
                  You haven’t bought or sold any property yet!
                </div>
              </div>
              <div className={styles.allTheProperties}>
                All the properties and projects that you have bought or sold will
                start appearing here. Search or explore cities now.
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserProperties;
