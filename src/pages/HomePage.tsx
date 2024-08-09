import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomerReviewCard from "../components/CustomerReviewCard";
import LoginPopup from "../components/LoginPopup";
import PropertyCard from "../components/PropertyCard";
import BuilderCard from "../components/BuilderCard";
import Articles from "../components/Articles";
import HistoryCard from "../components/HistoryCard";
import CardLayout from "../components/Insights";
import CityWiseReviews from "../components/CityWiseReviews";
import Upcoming from "../components/upcoming";
import EmergingLocalities from "../components/EmergingLocalities";
import ReviewForm from "../components/ReviewForm";
import PropertyTypeCarousel from "../components/PropertyTypeCarousel";
import SearhBar from "../components/SearchBar";
const HomePage: FunctionComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const apiUrl = "http://localhost:5000/api/appointments";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
        }),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      } else {
        throw new Error("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  const fetchProperties = async (query: string = "") => {
    try {
      const response = await fetch(`http://localhost:5000/api/allproperty`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }

      const result = await response.json();
      setProperties(result);
    } catch (error) {
      console.log("Error fetching property cards:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=real%20estate&apiKey=24bcf6c46b474bec8c8e6a95e67f0cbe"
        );
        const data = await response.json();
        setArticle(data.articles[7]);
      } catch (error) {
        console.error("Error fetching the articles: ", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div
      className={
        isLoginPopupVisible
          ? `${styles.pageContainer} ${styles.blur}`
          : styles.pageContainer
      }
    >
      <Navbar
        onLoginClick={() => setIsLoginPopupVisible(true)}
        onSearch={fetchProperties}
      />

      <div className={styles.hero}>
        <div className={styles.introtext}>Your dream property awaits...</div>
        <form className={styles.aptform} onSubmit={handleSubmit}>
          <div className={styles.book}>BOOK APPOINTMENT</div>
          <div className={styles.fullname}>
            <input
              className={styles.fname}
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className={styles.lname}
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            className={styles.email}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.phno}
            placeholder="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button className={styles.bookappointment} type="submit">
            Get Your Appointment
          </button>
        </form>
      </div>
      
      <div className={styles.searchBar}>
      <SearhBar />
      {/* <HistoryCard /> */}
      </div>

      <PropertyTypeCarousel />
      <div style={{ display: "flex", paddingRight: "2em" }}>
        <div className={styles.popularfeatures}>
          <section className={styles.popularProperties}>
            <div className={styles.heading}>POPULAR PROPERTIES</div>
            <div className={styles.listings}>
              {properties.slice(0, 4).map((property) => (
                <Link
                  key={property._id}
                  to={`/property-details-page/${property._id}`}
                  className={styles.linkWrapper}
                >
                  <PropertyCard
                    title={property.title}
                    city={property.city}
                    price={property.price.toString()}
                    area={property.area.toString()}
                  />
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.popularBuilders}>
            <div className={styles.heading}>POPULAR BUILDERS</div>
            <div className={styles.listings}>
              {properties.slice(0, 1).map((builder) => (
                <Link
                  key={builder._id}
                  // to={`/property-details-page/${property._id}`}
                  className={styles.linkWrapper}
                >
                  <BuilderCard
                    name="MV Kiran Sooraj"
                    properties="1500+ Properties"
                  />
                  <BuilderCard name="Raj" properties="2000+ Properties" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Upcoming />
      <CityWiseReviews />
      <EmergingLocalities />
      {/* <Articles /> */}
      <CardLayout />

      <div className={styles.happycustomers}>
        <div className={styles.heading}>HAPPY CUSTOMERS</div>
        <div className={styles.subheading}>HAPPY TRADE</div>
        <div className={styles.reviews}>
          <CustomerReviewCard
            imageUrl="./istockphoto1476170969170667a-1@2x.png"
            name="Raghav"
            review="I was blown away by the exceptional service I received from your website! The website was easy to navigate, and the real estate agents were knowledgeable and responsive. I found my dream home in no time, and the entire process was stress-free. I highly recommend this to anyone looking to buy or sell a property!"
          />
          <CustomerReviewCard
            imageUrl="./istockphoto1476170969170667a-1@2x.png"
            name="Kishore"
            review="As a first-time homebuyer, I was nervous about the process, but this made it a breeze! The website's resources and guides were incredibly helpful, and the agents were patient and understanding. I felt supported every step of the way, and I couldn't be happier with my new home. Thank you,"
          />
          <CustomerReviewCard
            imageUrl="./istockphoto1476170969170667a-1@2x.png"
            name="Bob"
            review="I've used several real estate websites in the past, but this is by far the best! The website's advanced search features and real-time updates made it easy to find the perfect property. The agents were professional and courteous, and the entire process was seamless. I highly recommend this to everyone. Thank You"
          />
        </div>
      </div>
      <ReviewForm />
      <Footer />

      {isLoginPopupVisible && (
        <LoginPopup onClose={() => setIsLoginPopupVisible(false)} />
      )}
    </div>
  );
};

export default HomePage;
