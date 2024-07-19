import { FunctionComponent, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ListingForm from "../components/ListingForm";
import styles from "./Rent.module.css";
import Footer from "../components/Footer";

const Rent: FunctionComponent = () => {
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
    <div className={styles.rent}>
      <Navbar />
      <main className={styles.content}>
        <form className={styles.listingFormParent} onSubmit={handleSubmit}>
          <ListingForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            handleRemoveImage={handleRemoveImage}
            selectedImages={selectedImages}
          />

          <div className={styles.submission}>
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

export default Rent;

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
    answer: "Yes, as a property owner, you can sell property online as well as post property for rent on this platform. Your property will be visible to thousands of buyers and tenants visiting us daily, without involving any real estate agents."
  }
];
