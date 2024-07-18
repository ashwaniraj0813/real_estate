import { FunctionComponent, useState } from "react";
import Navbar from "../components/Navbar";
import ListingForm from "../components/ListingForm";
import styles from "./Rent.module.css";
import Footer from "../components/Footer";

const Rent: FunctionComponent = () => {
  // State to manage which FAQ item is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Function to toggle FAQ item visibility
  const toggleItem = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Close if already open
    } else {
      setExpandedIndex(index); // Open clicked item
    }
  };

  return (
    <div className={styles.rent}>
      <Navbar />
      <main className={styles.content}>
        <form className={styles.listingFormParent}>
          <ListingForm />

          <div className={styles.submission}>
            <button className={styles.submitButton}>
              <div className={styles.submitButtonChild} />
              <div className={styles.publish}>PUBLISH</div>
            </button>
          </div>
          
          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            {/* Map over FAQ items */}
            {faqItems.map((item, index) => (
              <div className={styles.faqItem} key={index}>
                <div className={styles.question} onClick={() => toggleItem(index)}>
                  <h3>{item.question}</h3>
                  <span className={`${styles.arrow} ${expandedIndex === index ? styles.open : ""}`}>&#9660;</span>
                </div>
                {/* Conditionally render answer based on index */}
                <p className={`${styles.answer} ${expandedIndex === index ? styles.visible : styles.hidden}`}>{item.answer}</p>
              </div>
            ))}
          </div>

          
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Rent;

// Sample data structure for FAQ items
const faqItems = [
  {
    question: "What type of property can I post on this platform for selling/renting?",
    answer: "As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale. Millions of people search for flats, houses, plots, office space, shops, showrooms, warehouses, agricultural and commercial land, among others."
  },
  {
    question: "Is posting property for selling/renting on this platform free?",
    answer: "Yes, you can post your property listing online for sale or rent for free. There are no charges involved. All buyer/tenant enquiries will be shared with you completely free of cost."
  },
  {
    question: "Can I sell/rent out my property on my own without paying brokerage?",
    answer: "Yes, as a property owner, you can sell property online as well as post property for rent on this platform . Your property will be visible to thousands of buyers and tenants visiting us daily, without involving any real estate agents."
  }
];

