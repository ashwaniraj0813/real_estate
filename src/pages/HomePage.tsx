import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DisplayCard from "../components/DisplayCard";
import CustomerReviewCard from "../components/CustomerReviewCard";

const HomePage: FunctionComponent = () => {
  return (
      <div className={styles.homePage}>
        <Navbar/>


        <div className={styles.hero}>
          <div className={styles.introtext}>Your dream home awaits...</div>
          <div className={styles.aptform}>
            <div className={styles.book}>BOOK APPOINTMENT</div>
            <div className={styles.fullname}>
              <input className={styles.fname} placeholder="First Name" type="text"/>
              <input className={styles.lname} placeholder="Last Name" type="text"/>
            </div>
            <input className={styles.email} placeholder="Email" type="text"/>
            <input className={styles.phno} placeholder="Phone" type="text"/>
            <button className={styles.bookappointment}>
              Get Your Appointment
            </button>
          </div>
        </div>


        <div className={styles.popularfeatures}>
          <div className={styles.heading}>PROPERTY DETAILS</div>
          <div className={styles.subheading}>ALL AWESOME POPULAR LOCATION</div>
          <div className={styles.features}>
            <div className={styles.feature}>
              <img src="cut-paper@2x.png"/>
              <p>3200+ Sqft.</p>
            </div>
            <div className={styles.feature}>
              <img src="bedroom@2x.png"/>
              <p>3BHK</p>
            </div>
            <div className={styles.feature}>
              <img src="car@2x.png"/>
              <p>Garage</p>
            </div>
            <div className={styles.feature}>
              <img src="swimming-pool@2x.png"/>
              <p>Swimming Pool</p>
            </div>
            <div className={styles.feature}>
              <img src="full-family@2x.png"/>
              <p>Ideal for Family</p>
            </div>
          </div>
        </div>


        <div className={styles.featuredlocations}>
          <DisplayCard title="Spacious and Large Garden" city="Pune" imageUrl="/image-2@2x.png"/>
          <DisplayCard title="With its Own Pool" city="Mumbai" imageUrl="/image-3@2x.png"/>
          <DisplayCard title="In Forest - Fresh & Clean air" city="Nainital" imageUrl="/image-4@2x.png"/>
        </div>


        <div className={styles.articles}>
          <div className={styles.heading}>REAL ESTATE AROUND THE GLOBE</div>
          <div className={styles.article}>
            <img src="/rectangle-39@2x.png"/>
            <div className={styles.content}>
              <div className={styles.title}>THE FUTURE OF SELLING AND BUYING</div>
              <div className={styles.info}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular...
              </div>
              <div className={styles.readmore}>READ MORE</div>
            </div>
          </div>
        </div>


        <div className={styles.happycustomers}>
          <div className={styles.heading}>HAPPY CUSTOMERS</div>
          <div className={styles.subheading}>HAPPY TRADE</div>
          <div className={styles.reviews}>
            <CustomerReviewCard imageUrl="./istockphoto1476170969170667a-1@2x.png" name="Sudhanshu Bakshi" review="Personal appointments arranged through their platform were instrumental in finding my dream home effortlessly. I highly recommend their services for reliable real estate insights and expert assistance."/>
            <CustomerReviewCard imageUrl="./istockphoto1476170969170667a-1@2x.png" name="Sudhanshu Bakshi" review="Personal appointments arranged through their platform were instrumental in finding my dream home effortlessly. I highly recommend their services for reliable real estate insights and expert assistance."/>
            <CustomerReviewCard imageUrl="./istockphoto1476170969170667a-1@2x.png" name="Sudhanshu Bakshi" review="Personal appointments arranged through their platform were instrumental in finding my dream home effortlessly. I highly recommend their services for reliable real estate insights and expert assistance."/>
          </div>
        </div>


        <Footer/>
      </div>
  );
};

export default HomePage;
