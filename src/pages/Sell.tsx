import { FunctionComponent, useState } from "react";
import Navbar from "../components/Navbar";
import ListingHeader from "../components/ListingHeader";
import styles from "./Sell.module.css";

const Sell: FunctionComponent = () => {
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
    <div className={styles.sell}>
      <Navbar />
      <main className={styles.listingContentWrapper}>
        <form className={styles.listingContent}>
          <ListingHeader />
          
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

          <div className={styles.submitButtonWrapper}>
            <button className={styles.submitButton}>
              <div className={styles.submitButtonChild} />
              <div className={styles.publish}>PUBLISH</div>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Sell;

// Sample data structure for FAQ items
const faqItems = [
  {
    question: "What are the benefits of using this platform to sell my property?",
    answer: "You can reach a large audience of potential buyers, list your property for free, and manage your listing easily."
  },
  {
    question: "What if I sell my home but I’m not able to find a new one to buy?",
    answer: "Selling your home without immediately finding a new one is a common concern. Highlight your negotiation skills and commitment to finding a suitable home promptly. Consider new construction homes as an alternative. Negotiable closing dates and specific loan options can also provide peace of mind in competitive markets."
  },
  {
    question: "How much is my house worth?",
    answer: "Determining your home's value is crucial for setting the right asking price. Factors like location, size, condition, and current market conditions play key roles. Agents can provide a precise estimate through a Professional Equity Assessment Report (PEAR), avoiding guesswork and lengthy discussions with lenders."
  }
];

