import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav3";
import AboutContent from "../components/AboutContent";
import GroupComponent from "../components/GroupComponent";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
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
    <div className={styles.aboutUs}>
      <Nav
        icbaselineSearch="/icbaselinesearch.svg"
        vector="/vector1.svg"
        onLOGOTextClick={onLOGOTextClick}
        onHomeTextClick={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onVectorIconClick={onVectorIconClick}
      />
      <main className={styles.realEstatePhotographyP1900Parent}>
        <img
          className={styles.realEstatePhotographyP1900Icon}
          alt=""
          src="/realestatephotography-p1-900x420jpg-1@2x.png"
        />
        <AboutContent />
        <GroupComponent />
      </main>
    </div>
  );
};

export default AboutUs;
