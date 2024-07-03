import { FunctionComponent } from "react";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
=======
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent21";
import Popular from "../components/Popular";
import styles from "./PropertyExplorePage.module.css";
<<<<<<< HEAD
=======
import Navbar from "../components/Navbar";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc

const PropertyExplorePage: FunctionComponent = () => {
  return (
    <div className={styles.propertyExplorePage}>
<<<<<<< HEAD
      <Navbar />
      <main className={styles.propertyExplorePageInner}>
        <section className={styles.frameParent}>
=======
      <Navbar/>
      <main className={styles.content}>
        <section className={styles.popularPropertiesParent}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
          <FrameComponent3 />
          <FrameComponent2 />
          <Popular />
        </section>
      </main>
    </div>
  );
};

export default PropertyExplorePage;
