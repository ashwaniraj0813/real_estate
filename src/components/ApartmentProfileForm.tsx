import React from 'react';
import styles from './ApartmentProfileForm.module.css';

interface ApartmentProfileFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const ApartmentProfileForm: React.FC<ApartmentProfileFormProps> = ({
  formData,
  handleInputChange,
  nextStep,
  prevStep,
}) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    handleInputChange({
      ...e,
      target: {
        name,
        value: checked,
      },
    });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "numberOfBedrooms",
      "numberOfBathrooms",
      "numberOfBalconies"
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert("Please fill in all the required fields before proceeding.");
        return;
      }
    }

    nextStep();
  };

  return (
    <div className={styles.formSection}>
      <button className={styles.backButton} onClick={() => {
        console.log("Back button clicked"); // Add this for debugging
        prevStep();
          }}>
        Back
      </button>

      <h2>Apartment Profile</h2>

      <div className={styles.bedrooms}>
        <div className={styles.bedroomsName}>Number of Bedrooms</div>
        <div className={styles.bedroomsInput}>
          <input
            type="number"
            name="numberOfBedrooms"
            value={formData.numberOfBedrooms || ""}
            onChange={handleInputChange}
            placeholder="0"
          />
        </div>
      </div>

      <div className={styles.bathrooms}>
        <div className={styles.bathroomsName}>Number of Bathrooms</div>
        <div className={styles.bathroomsInput}>
          <input
            type="number"
            name="numberOfBathrooms"
            value={formData.numberOfBathrooms || ""}
            onChange={handleInputChange}
            placeholder="0"
          />
        </div>
      </div>

      <div className={styles.balconies}>
        <div className={styles.balconiesName}>Number of Balconies</div>
        <div className={styles.balconiesInput}>
          <input
            type="number"
            name="numberOfBalconies"
            value={formData.numberOfBalconies || ""}
            onChange={handleInputChange}
            placeholder="0"
          />
        </div>
      </div>

      <div className={styles.areaDetails}>
        <div className={styles.areaDetailsName}>Add Area Details</div>
        <div className={styles.areaDetailsInput}>
          <input
            type="number"
            name="areaDetails"
            value={formData.areaDetails || ""}
            onChange={handleInputChange}
            placeholder="Carpet Area in sq. ft"
          />
        </div>
      </div>

      <div className={styles.area}>
        <div className={styles.areaName}>Other Rooms (optional)</div>
        <div className={styles.areaInput}>
          <label>
            <input
              type="checkbox"
              name="studyRoom"
              checked={formData.studyRoom || false}
              onChange={handleCheckboxChange}
            />
            Study Room
          </label>
          <label>
            <input
              type="checkbox"
              name="poojaRoom"
              checked={formData.poojaRoom || false}
              onChange={handleCheckboxChange}
            />
            Pooja Room
          </label>
          <label>
            <input
              type="checkbox"
              name="servantRoom"
              checked={formData.servantRoom || false}
              onChange={handleCheckboxChange}
            />
            Servant Room
          </label>
          <label>
            <input
              type="checkbox"
              name="storeRoom"
              checked={formData.storeRoom || false}
              onChange={handleCheckboxChange}
            />
            Store Room
          </label>
        </div>
      </div>

      <div className={styles.floorDetails}>
        <div className={styles.floorDetailsName}>Floor details</div>
        <div className={styles.totalFloorDetailsInput}>
          <input
            type="number"
            name="totalFloorDetails"
            value={formData.totalFloorDetails || ""}
            onChange={handleInputChange}
            placeholder="Total Floors"
          />
        </div>
        <div className={styles.totalFloorDetailsInput}>
          <input
            type="number"
            name="propertyFloorDetails"
            value={formData.propertyFloorDetails || ""}
            onChange={handleInputChange}
            placeholder="Property on floor"
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
          <div className={styles.ageOfPropertyName}>Age of Property</div>
          <div className={styles.ageOfPropertyInput}>
            <input
              type="number"
              name="ageOfProperty"
              value={formData.ageOfProperty || ""}
              onChange={handleInputChange}
              placeholder="Age of property in years"
            />
          </div>
        </div>
      )}

      {formData.availability === "Under construction" && (
        <div className={styles.possessionDate}>
          <div className={styles.possessionDateName}>Possession Date</div>
          <div className={styles.possessionDateInput}>
            <input
              type="date"
              name="possessionDate"
              value={formData.possessionDate || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      <div className={styles.actions}>
        <button className={styles.nextButton} onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ApartmentProfileForm;
