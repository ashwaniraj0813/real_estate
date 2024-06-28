import { FunctionComponent } from "react";
import Navbar1 from "../components/Navbar11";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Amenities from "../components/Amenities";
import FrameComponent4 from "../components/FrameComponent41";
import FrameComponent1 from "../components/FrameComponent12";
import FrameComponent from "../components/FrameComponent";
import styles from "./PropertyDetailsPage.module.css";

const PropertyDetailsPage: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetailsPage}>
      <Navbar1 />
      <FrameComponent6 />
      <FrameComponent5 />
      <section className={styles.descriptionWrapper}>
        <div className={styles.description}>
          <b className={styles.description1}>Description</b>
          <div className={styles.loremIpsumHasContainer}>
            <span>
              <p className={styles.loremIpsumHas}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.It has survived
                not only five centuries
              </p>
            </span>
          </div>
        </div>
      </section>
      <Amenities />
      <FrameComponent4 />
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default PropertyDetailsPage;
