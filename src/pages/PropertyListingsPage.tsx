import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav3";
import SortAndFilter from "../components/SortAndFilter";
import FrameComponent from "../components/FrameComponent2";
import styles from "./PropertyListingsPage.module.css";

const PropertyListingsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onPropertyCardContainerClick = useCallback(() => {
    navigate("/property-details-page");
  }, [navigate]);

  return (
    <div className={styles.propertyListingsPage}>
      <Nav
        icbaselineSearch="/icbaselinesearch1.svg"
        vector="/vector1.svg"
        rectangleDivPadding="var(--padding-12xl) var(--padding-110xl) var(--padding-12xl) var(--padding-93xl)"
        rectangleDivDebugCommit="unset"
        lOGOPadding="0px 0px var(--padding-5xs)"
        frameDivColor="#1f1f1f"
        actionsWidth="458.3px"
        actionsPadding="0px 0px var(--padding-10xs-7)"
        homePadding="var(--padding-7xs) 0px 0px"
        buyPadding="var(--padding-6xs) var(--padding-5xs) 0px 0px"
        rentPadding="var(--padding-6xs) var(--padding-10xs) 0px 0px"
        sellPadding="var(--padding-6xs) var(--padding-5xs) 0px 0px"
        onHomeTextClick={onHomeTextClick}
        onVectorIconClick={onVectorIconClick}
      />
      <main className={styles.frameParent}>
        <div className={styles.sortAndFilterWrapper}>
          <SortAndFilter />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.propertyCardWrapper}>
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
                  <div className={styles.frameContainer}>
                    <div className={styles.mapPinParent}>
                      <img
                        className={styles.mapPinIcon}
                        loading="lazy"
                        alt=""
                        src="/map-pin1@2x.png"
                      />
                      <div className={styles.puneWrapper}>
                        <div className={styles.pune}>Pune</div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.xxAcresParent}>
                        <div className={styles.xxAcres}>xx acres</div>
                        <div className={styles.rsXCrores}>Rs. x crores</div>
                      </div>
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
                <div className={styles.frameParent1}>
                  <div className={styles.mapPinGroup}>
                    <img
                      className={styles.mapPinIcon1}
                      alt=""
                      src="/map-pin1@2x.png"
                    />
                    <div className={styles.puneContainer}>
                      <div className={styles.pune1}>Pune</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.xxAcresGroup}>
                      <div className={styles.xxAcres1}>xx acres</div>
                      <div className={styles.rsXCrores1}>Rs. x crores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyCard2}>
              <div className={styles.propertyCardInner} />
              <div className={styles.image4Parent}>
                <img
                  className={styles.image4Icon2}
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.villaWithSpacious2}>
                  Villa with spacious and Large Garden
                </div>
              </div>
              <div className={styles.frameParent2}>
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
                <div className={styles.incompleteListingDetailsWrapper}>
                  <div className={styles.incompleteListingDetails}>
                    <div className={styles.xxAcres2}>xx acres</div>
                    <div className={styles.rsXCrores2}>Rs. x crores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent3}>
            <div className={styles.propertyCardContainer}>
              <div
                className={styles.propertyCard3}
                onClick={onPropertyCardContainerClick}
              >
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.image4Icon3}
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.villaWithSpaciousAndLargeContainer}>
                  <div className={styles.villaWithSpacious3}>
                    Villa with spacious and Large Garden
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.mapPinParent1}>
                      <img
                        className={styles.mapPinIcon3}
                        alt=""
                        src="/map-pin1@2x.png"
                      />
                      <div className={styles.puneWrapper1}>
                        <div className={styles.pune3}>Pune</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper3}>
                      <div className={styles.xxAcresContainer}>
                        <div className={styles.xxAcres3}>xx acres</div>
                        <div className={styles.rsXCrores3}>Rs. x crores</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.propertyCard4}
              onClick={onPropertyCardContainerClick}
            >
              <div className={styles.propertyCardChild1} />
              <img
                className={styles.image4Icon4}
                alt=""
                src="/image-41@2x.png"
              />
              <div className={styles.villaWithSpaciousAndLargeParent1}>
                <div className={styles.villaWithSpacious4}>
                  Villa with spacious and Large Garden
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.mapPinParent2}>
                    <img
                      className={styles.mapPinIcon4}
                      alt=""
                      src="/map-pin1@2x.png"
                    />
                    <div className={styles.puneWrapper2}>
                      <div className={styles.pune4}>Pune</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.xxAcresParent1}>
                      <div className={styles.xxAcres4}>xx acres</div>
                      <div className={styles.rsXCrores4}>Rs. x crores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyCard5}>
              <div className={styles.propertyCardChild2} />
              <div className={styles.image4Wrapper}>
                <img
                  className={styles.image4Icon5}
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <div className={styles.villaWithSpacious5}>
                Villa with spacious and Large Garden
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.mapPinParent3}>
                  <img
                    className={styles.mapPinIcon5}
                    alt=""
                    src="/map-pin1@2x.png"
                  />
                  <div className={styles.puneWrapper3}>
                    <div className={styles.pune5}>Pune</div>
                  </div>
                </div>
                <div className={styles.incompleteLocationWrapper}>
                  <div className={styles.incompleteLocation}>
                    <div className={styles.xxAcres5}>xx acres</div>
                    <div className={styles.rsXCrores5}>Rs. x crores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.propertyCards}>
          <FrameComponent />
        </div>
      </main>
    </div>
  );
};

export default PropertyListingsPage;
