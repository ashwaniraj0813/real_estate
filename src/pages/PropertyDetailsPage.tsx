import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav3";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent41";
import Breadcrumb from "../components/Breadcrumb";
import GalleryAndDescription from "../components/GalleryAndDescription";
import FrameComponent1 from "../components/FrameComponent12";
import Amenities from "../components/Amenities";
import styles from "./PropertyDetailsPage.module.css";

const PropertyDetailsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.propertyDetailsPage}>
      <Nav
        icbaselineSearch="/icbaselinesearch1.svg"
        vector="/vector2.svg"
        rectangleDivPadding="var(--padding-12xl) var(--padding-110xl) var(--padding-12xl) var(--padding-93xl)"
        rectangleDivDebugCommit="unset"
        lOGOPadding="0px 0px var(--padding-5xs)"
        frameDivColor="#1f1f1f"
        actionsWidth="458.3px"
        actionsPadding="0px 0px 2.3px"
        homePadding="5.8px 0px 0px"
        buyPadding="var(--padding-6xs-8) var(--padding-5xs) 0px 0px"
        rentPadding="var(--padding-6xs-8) var(--padding-10xs) 0px 0px"
        sellPadding="var(--padding-6xs-8) var(--padding-5xs) 0px 0px"
        onLOGOTextClick={onLOGOTextClick}
        onHomeTextClick={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onVectorIconClick={onVectorIconClick}
      />
      <FrameComponent5 />
      <FrameComponent4 />
      <section className={styles.similarProperties}>
        <div className={styles.location}>
          <b className={styles.description}>Description</b>
          <p className={styles.loremIpsumHasContainer}>
            <span>
              <span className={styles.loremIpsumHas}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.It has survived
                not only five centuries
              </span>
            </span>
          </p>
        </div>
      </section>
      <Breadcrumb />
      <GalleryAndDescription />
      <FrameComponent1 />
      <Amenities />
    </div>
  );
};

export default PropertyDetailsPage;
