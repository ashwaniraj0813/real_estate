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

  const onPropertyCardContainerClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);

  return (
    <div className={styles.propertyListingsPage}>
<<<<<<< Updated upstream
      <Navbar />
      <main className={styles.sortAndFilterParent}>
        <SortAndFilter />
        <section className={styles.listings}>
          <div className={styles.cardGrid}>
            <div className={styles.listingsRow}>
              <main className={styles.propertyCardParent}>
                <div
                  className={styles.propertyCard}
                  onClick={onPropertyCardContainerClick}
                >
                  <div className={styles.propertyCardChild} />
                  <img
                    className={styles.image4Icon}
                    loading="lazy"
                    alt=""
                    src="/image-41@2x.png"
                  />
                  <div className={styles.villaWithSpaciousAndLargeParent}>
                    <div className={styles.villaWithSpacious}>
                      Villa with spacious and Large Garden
                    </div>
                    <div className={styles.frameParent}>
                      <div className={styles.mapPinParent}>
                        <img
                          className={styles.mapPinIcon}
                          loading="lazy"
                          alt=""
                          src="/map-pin@2x.png"
                        />
                        <div className={styles.puneWrapper}>
                          <div className={styles.pune}>Pune</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.xxAcresParent}>
                          <div className={styles.xxAcres}>xx acres</div>
                          <div className={styles.rsXCrores}>Rs. x crores</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.propertyCard1}
                  onClick={onPropertyCardContainerClick}
                >
                  <div className={styles.propertyCardItem} />
                  <img
                    className={styles.image4Icon1}
                    alt=""
                    src="/image-41@2x.png"
                  />
                  <div className={styles.villaWithSpaciousAndLargeGroup}>
                    <div className={styles.villaWithSpacious1}>
                      Villa with spacious and Large Garden
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.mapPinGroup}>
                        <img
                          className={styles.mapPinIcon1}
                          alt=""
                          src="/map-pin@2x.png"
                        />
                        <div className={styles.puneContainer}>
                          <div className={styles.pune1}>Pune</div>
                        </div>
                      </div>
                      <div className={styles.frameContainer}>
                        <div className={styles.xxAcresGroup}>
                          <div className={styles.xxAcres1}>xx acres</div>
                          <div className={styles.rsXCrores1}>Rs. x crores</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PropertyCard />
              </main>
            </div>
            <div className={styles.content}>
              <div className={styles.propertyCardWrapper}>
                <div
                  className={styles.propertyCard2}
                  onClick={onPropertyCardContainerClick}
                >
                  <div className={styles.propertyCardInner} />
                  <img
                    className={styles.image4Icon2}
                    alt=""
                    src="/image-41@2x.png"
                  />
                  <div className={styles.villaWithSpaciousAndLargeContainer}>
                    <div className={styles.villaWithSpacious2}>
                      Villa with spacious and Large Garden
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.mapPinContainer}>
                        <img
                          className={styles.mapPinIcon2}
                          alt=""
                          src="/map-pin1@2x.png"
                        />
                        <div className={styles.puneFrame}>
                          <div className={styles.pune2}>Pune</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.xxAcresContainer}>
                          <div className={styles.xxAcres2}>xx acres</div>
                          <div className={styles.rsXCrores2}>Rs. x crores</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <PropertyCard />
              <PropertyCard
                onPropertyCardContainer6Click={onPropertyCardContainerClick}
              />
            </div>
          </div>
=======
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

        
>>>>>>> Stashed changes
        </section>
      </main>
    </div>
  );
};

export default PropertyListingsPage;
