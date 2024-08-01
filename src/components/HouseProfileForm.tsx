import React from 'react';
import styles from './PropertyProfileForm.module.css';

interface HouseProfileFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const HouseProfileForm: React.FC<HouseProfileFormProps> = ({ formData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div className={styles.formSection}>
      <h2>House Profile</h2>
      <div className={styles.bedrooms}>
        <div className={styles.bedroomsName}>Number of Bedrooms</div>
        <div className={styles.bedroomsInput}>
          <input
            type="number"
            name="numberOfBedrooms"
            value={formData.numberOfBedrooms}
            onChange={handleInputChange}
            placeholder='0'
          />
        </div>
      </div>
      <div className={styles.bathrooms}>
        <div className={styles.bathroomsName}>Number of Bathrooms</div>
        <div className={styles.bathroomsInput}>
          <input
            type="number"
            name="numberOfBathrooms"
            value={formData.numberOfBathrooms}
            onChange={handleInputChange}
            placeholder='0'
          />
        </div>
      </div>
      <div className={styles.balconies}>
        <div className={styles.balconiesName}>Number of Balconies</div>
        <div className={styles.balconiesInput}>
          <input
            type="number"
            name="numberOfBalconies"
            value={formData.numberOfBalconies}
            onChange={handleInputChange}
            placeholder='0'
          />
        </div>
      </div>

      <div className={styles.areaDetails}>
        <div className={styles.areaDetailsName}>Add Area Details</div>
        <div className={styles.areaDetailsInput}>
          <input
            type="number"
            name="areaDetails"
            value={formData.areaDetails}
            onChange={handleInputChange}
            placeholder='Carpet Area in sq. ft'
          />
        </div>
      </div>

     <div className={styles.floorDetails}>
        <div className={styles.floorDetailsName}>Floor details</div>
        <div className={styles.totalFloorDetailsInput}>
          <input
            type="number"
            name="totalFloorDetails"
            value={formData.totalFloorDetails}
            onChange={handleInputChange}
            placeholder='Total Floors'
          />
        </div>
      </div>

      <div className={styles.availability}>
        <div className={styles.availabilityName}>Availability Status</div>
        <div className={styles.availabilityInput}>
          <label>
            <input
              type="radio"
              name="availability"
              value="Ready to move"
              checked={formData.availability === "Ready to move"}
              onChange={handleInputChange}
            />
            Ready to move
          </label>
          <label>
            <input
              type="radio"
              name="availability"
              value="Under construction"
              checked={formData.availability === "Under construction"}
              onChange={handleInputChange}
            />
            Under construction
          </label>
        </div>
      </div>

      {formData.availability === "Ready to move" && (
        <div className={styles.ageOfProperty}>
          <div className={styles.ageOfPropertyName}>Age of Property (in years)</div>
          <div className={styles.ageOfPropertyInput}>
            <input
              type="number"
              name="ageOfProperty"
              value={formData.ageOfProperty}
              onChange={handleInputChange}
              placeholder='0'
            />
          </div>
        </div>
      )}

      {formData.availability === "Under construction" && (
        <div className={styles.possession}>
          <div className={styles.possessionName}>Possession by</div>
          <div className={styles.possessionInput}>
            <input
              type="text"
              name="possessionBy"
              value={formData.possessionBy}
              onChange={handleInputChange}
              placeholder='Month and Year'
            />
          </div>
        </div>
      )}

<div className={styles.ownershipType}>
        <div className={styles.ownershipTypeName}>Ownership</div>
        <div className={styles.ownershipTypeInput}>
          <label>
            <input
              type="radio"
              name="ownership"
              value="Freehold"
              checked={formData.ownership === "Freehold"}
              onChange={handleInputChange}
              required
            />
            Freehold
          </label>
          <label>
            <input
              type="radio"
              name="ownership"
              value="Leasehold"
              checked={formData.ownership === "Leasehold"}
              onChange={handleInputChange}
              required
            />
            Leasehold
          </label>
          <label>
            <input
              type="radio"
              name="ownership"
              value="Co-operative Society"
              checked={formData.ownership === "Co-operative Society"}
              onChange={handleInputChange}
              required
            />
            Co-operative Society
          </label>
          <label>
            <input
              type="radio"
              name="ownership"
              value="Power of Attorney"
              checked={formData.ownership === "Power of Attorney"}
              onChange={handleInputChange}
              required
            />
            Power of Attorney
          </label>
        </div>
      </div>
      
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default HouseProfileForm;
