import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent21";
import Popular from "../components/Popular";
import styles from "./PropertyExplorePage.module.css";

const PropertyExplorePage: FunctionComponent = () => {
  return (
    <div className={styles.propertyExplorePage}>
      <Navbar />
      <main className={styles.propertyExplorePageInner}>
        <section className={styles.frameParent}>
          <FrameComponent3 />
          <FrameComponent2 />
          <Popular />
        </section>
      </main>
    </div>
  );
};

export default PropertyExplorePage;
