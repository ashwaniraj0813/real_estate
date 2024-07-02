import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import GroupComponent from "../components/GroupComponent";


const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <Navbar/>
      <main className={styles.realEstatePhotographyP1900Parent}>
        <img
          className={styles.realEstatePhotographyP1900Icon}
          alt=""
          src="/realestatephotography-p1-900x420jpg-1@2x.png"
        />
        <Content />
        <GroupComponent />
      </main>
    </div>
  );
};

export default AboutUs;
