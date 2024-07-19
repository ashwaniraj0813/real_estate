import { FunctionComponent, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ListingHeader from "../components/ListingHeader";
import styles from "./Sell.module.css";
import Footer from "../components/Footer";

const Sell: FunctionComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    price: "",
    bhk: "",
    area: "",
    type: "residential",
    status: "available",
    purpose: "rent",
    amenities: "",
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const toggleItem = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedImages([...selectedImages, ...Array.from(event.target.files)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const propertyResponse = await axios.post('http://localhost:5000/api/property', formData);
      const propertyId = propertyResponse.data._id;

      const imageUploadPromises = selectedImages.map(image => {
        const formData = new FormData();
        formData.append('property_id', propertyId);
        formData.append('image_url', image);
        return axios.post('http://localhost:5000/api/property-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      });

      await Promise.all(imageUploadPromises);
      alert('Property listed successfully!');
    } catch (error) {
      console.error("Error uploading property or images:", error);
      alert('Failed to list property.');
    }
  };

  return (
    <div className={styles.sell}>
      <Navbar />
      <main className={styles.listingContentWrapper}>
        <form className={styles.listingContent} onSubmit={handleSubmit}>
          <ListingHeader
            formData={formData}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
            selectedImages={selectedImages}
          />

          <div className={styles.submitButtonWrapper}>
            <button className={styles.submitButton} type="submit">
              <div className={styles.submitButtonChild} />
              <div className={styles.publish}>PUBLISH</div>
            </button>
          </div>
          
          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            {faqItems.map((item, index) => (
              <div className={styles.faqItem} key={index}>
                <div className={styles.question} onClick={() => toggleItem(index)}>
                  <h3>{item.question}</h3>
                  <span className={`${styles.arrow} ${expandedIndex === index ? styles.open : ""}`}>&#9660;</span>
                </div>
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

export default Sell;

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
