import { FunctionComponent } from "react";
import SimilarProperties from "../components/SimilarProperties";
import ContactForm from "../components/ContactForm";
import FacilitiesAndAmenities from "../components/FacilitiesAndAmenities";
import Gallery from "../components/Gallery";
import PropertyDetails from "../components/PropertyDetails";
import Navbar1 from "../components/Navbar1";
import styles from "./PropertyDetailsPage.module.css";

const PropertyDetailsPage: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetailsPage}>
      <SimilarProperties />
      <ContactForm />
      <section className={styles.location}>
        <img
          className={styles.image13Icon}
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
        <div className={styles.portalWNorth}>
          1 Portal W North Acton, London, England W3 6BX
        </div>
        <b className={styles.location1}>Location</b>
        <img
          className={styles.locationOnMap}
          alt=""
          src="/location-on-map@2x.png"
        />
      </section>
      <section className={styles.facilitiesAndAmenities}>
        <FacilitiesAndAmenities />
        <div className={styles.div}>🔄</div>
      </section>
      <section className={styles.description}>
        <b className={styles.description1}>Description</b>
        <p className={styles.loremIpsumHasContainer}>
          <span className={styles.loremIpsumHasContainer1}>
            <span className={styles.loremIpsumHas}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.It has survived not only
              five centuries
            </span>
          </span>
        </p>
      </section>
      <Gallery />
      <PropertyDetails />
      <div className={styles.navigation}>
        <div className={styles.homeUk}>{`Home  > UK > London > The Lyra`}</div>
      </div>
      <Navbar1 />
    </div>
  );
};

export default PropertyDetailsPage;
