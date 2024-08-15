import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OfficeCard from "../components/OfficeCard";
import EmployeeCard from "../components/EmployeeCard";

const employee1 = {
  name: "Ashwani Raj",
  phone: "033 1234 1234",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};

const employee2 = {
  name: "Anjali Patil",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee3 = {
  name: "Rusy",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee4 = {
  name: "Sooraj",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee5 = {
  name: "Xaumya",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee6 = {
  name: "Deepkshitha",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee7 = {
  name: "Anil Kumar",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee8 = {
  name: "Jhansi",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee9 = {
  name: "Kruthi",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee10 = {
  name: "Vasu",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee11 = {
  name: "Manopriya",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee12 = {
  name: "Bhargav",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee13 = {
  name: "Ramesh",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee14 = {
  name: "Esha",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee15 = {
  name: "Rajvardhan",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee16 = {
  name: "Ayushman Tripathi",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee17 = {
  name: "Yatika",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee18 = {
  name: "sanyam Sharma",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee19 = {
  name: "suraj",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee20 = {
  name: "Sachin",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
const employee21 = {
  name: "Dhruv Saini",
  phone: "044 5678 9012",
  email: "realestate@gmail.com",
  imageUrl: "/userdefault.jpg",
};
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
            <EmployeeCard {...employee1}/>
            <EmployeeCard {...employee2}/>
            <EmployeeCard {...employee3}/>
            <EmployeeCard {...employee4}/>
            <EmployeeCard {...employee5}/>
            <EmployeeCard {...employee6}/>
            <EmployeeCard {...employee7}/>
            <EmployeeCard {...employee8}/>
            <EmployeeCard {...employee9}/>
            <EmployeeCard {...employee10}/>
            <EmployeeCard {...employee11}/>
            <EmployeeCard {...employee12}/>
            <EmployeeCard {...employee13}/>
            <EmployeeCard {...employee14}/>
            <EmployeeCard {...employee15}/>
            <EmployeeCard {...employee16}/>
            <EmployeeCard {...employee17}/>
            <EmployeeCard {...employee18}/>
            <EmployeeCard {...employee19}/>
            <EmployeeCard {...employee20}/>
            <EmployeeCard {...employee21}/>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
};

export default AboutUs;
