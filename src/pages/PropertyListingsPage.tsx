import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SortAndFilter from "../components/SortAndFilter";
import PropertyCard from "../components/PropertyCard";
import styles from "./PropertyListingsPage.module.css";

const PropertyListingsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPropertyCardContainerClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);

  return (
    <div className={styles.propertyListingsPage}>
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
        </section>
      </main>
    </div>
  );
};

export default PropertyListingsPage;
