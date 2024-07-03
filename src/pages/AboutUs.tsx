import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfficeCard from "../components/OfficeCard";
import EmployeeCard from "../components/EmployeeCard";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <Navbar/>

      
      <img className={styles.hero} src="/heroAboutUs.jpg"/>


      <div className={styles.container}>
        <div className={styles.aboutus}>
          <div className={styles.heading}>About Us</div>
          <div className={styles.content}>
            Welcome to our real-estate website, your trusted partner in real-estate market. We connect buyers,sellers and renters with vast network of properties to find their perfect match.Our platform is designed to make property transactions seamless,transparent and efficient.
            With a user-friendly interface and a commitment to excellent service , we try to simplify your real-estate journey.
          </div>
        </div>

        <div className={styles.visionmission}>
          <div className={styles.vision}>
            <div className={styles.heading}>Our Vision</div>
            <div className={styles.content}>
              Our vision is to be the leading platform,recognized for innovation,trust and customer satisfaction.We envision a world where finding and securing the perfect property is effortless, thanks to cutting-edge technology and unparalleled service
            </div>
          </div>

          <div className={styles.mission}>
            <div className={styles.heading}>Our Mission</div>
            <div className={styles.content}>
              Our mission is to revolutionize the real-estate experience by providing a comprehensive,reliable and easy-to-use platform.We aim to empower our users with the best tools and resources to make informed decisions,ensuring a smooth and successful property transaction for everyone.
            </div>
          </div>
        </div>

        
        <div className={styles.offices}>
          <div className={styles.heading}>Our Offices</div>
          <div className={styles.locations}>
            <OfficeCard/>
            <OfficeCard/>
            <OfficeCard/>
            <OfficeCard/>
          </div>
        </div>

        <div className={styles.team}>
          <div className={styles.heading}>Meet Our Team</div>
          <div className={styles.members}>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
};

export default AboutUs;
