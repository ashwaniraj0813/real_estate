import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import styles from "./PropertyDetailsPage.module.css";
import PropertyDetails from "../components/PropertyDetails";
import ContactForm from "../components/ContactForm";
import SimilarProperties from "../components/SimilarProperties";

const PropertyDetailsPage: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetailsPage}>
      <Navbar/>

      <PropertyDetails/>
      
      <ContactForm/>

      <SimilarProperties/>
    </div>
  );
};

export default PropertyDetailsPage;
