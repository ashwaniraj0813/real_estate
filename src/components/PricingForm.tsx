import React from 'react';
import styles from './PricingForm.module.css';

interface PricingFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  prevStep: () => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const PricingForm: React.FC<PricingFormProps> = ({ formData, handleInputChange, prevStep, handleSubmit }) => {
  return (
    <div className={styles.formSection}>
      <h2>Pricing and Other Details</h2>

      <div className={styles.priceDetails}>
        <div className={styles.priceDetailsName}>Price</div>
        <div className={styles.priceDetailsInput}>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price in USD"
          />
        </div>
      </div>

      <div className={styles.checkboxGroup}>
        <label>
          <input
            type="checkbox"
            name="allInclusivePrice"
            checked={formData.allInclusivePrice}
            onChange={handleInputChange}
          />
          All Inclusive Price
        </label>
        <label>
          <input
            type="checkbox"
            name="taxAndGovtChargesExcluded"
            checked={formData.taxAndGovtChargesExcluded}
            onChange={handleInputChange}
          />
          Tax and Govt. Charges Excluded
        </label>
        <label>
          <input
            type="checkbox"
            name="priceNegotiable"
            checked={formData.priceNegotiable}
            onChange={handleInputChange}
          />
          Price Negotiable
        </label>
      </div>

      <div className={styles.amenitiesDetails}>
        <div className={styles.amenitiesDetailsName}>Amenities</div>
        <div className={styles.amenitiesDetailsInput}>
          <textarea
            name="amenities"
            value={formData.amenities}
            onChange={handleInputChange}
            placeholder="List of amenities"
            rows={3}
          />
        </div>
      </div>

      <div className={styles.ProprietorDetails}>
        <div className={styles.ProprietorDetailsName}>Proprietor Details</div>
        <div className={styles.ProprietorName}>Propreiter name</div>
        <div className={styles.ProprietorNameInput}>
          <input
            name="Propreiter name"
            value={formData.proprietorName}
            onChange={handleInputChange}
            placeholder="Propreitor Name"
            rows={3}
          />
          </div>
          <div className={styles.ProprietorEmail}>Propreiter E-mail ID</div>
        <div className={styles.ProprietorEmailInput}>
          <input
            name="Propreiter E-mail ID"
            value={formData.proprietorEmail}
            onChange={handleInputChange}
            placeholder="Propreitor E-mail ID"
            rows={3}
          />
        </div>
        <div className={styles.ProprietorContact}>Propreiter Contact</div>
        <div className={styles.ProprietorContactInput}>
          <input
            name="Propreiter Contact"
            value={formData.proprietorPhone}
            onChange={handleInputChange}
            placeholder="Propreitor Contact"
            rows={3}
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button onClick={prevStep}>Back</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default PricingForm;
