import React from 'react';
import styles from './PropertyProfileForm.module.css';

interface PlotProfileFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const PlotProfileForm: React.FC<PlotProfileFormProps> = ({ formData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div className={styles.formSection}>
      <h2>Plot Profile</h2>
      <div className={styles.plotArea}>
        <div className={styles.plotAreaName}>Plot Area (in sq. ft)</div>
        <div className={styles.plotAreaInput}>
          <input
            type="text"
            name="Plot Area"
            value={formData["Plot Area"]}
            onChange={handleInputChange}
            placeholder="Plot Area"
          />
        </div>
      </div>

      <div className={styles.floors}>
        <div className={styles.floorsName}>Floors allowed for Construction</div>
        <div className={styles.floorsInput}>
          <input
            type="text"
            name="No. of floors"
            value={formData["No. of floors"]}
            onChange={handleInputChange}
            placeholder="No. of floors"
          />
        </div>
      </div>

      <div className={styles.boundary}>
        <div className={styles.boundaryName}>Is there a boundary wall around the property?</div>
        <div className={styles.boundaryInput}>
          <label>
            <input
              type="radio"
              name="boundary"
              value="Yes"
              checked={formData.boundary === "Yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="boundary"
              value="No"
              checked={formData.boundary === "No"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      <div className={styles.construction}>
        <div className={styles.constructionName}>Any construction done on the property?</div>
        <div className={styles.constructionInput}>
          <label>
            <input
              type="radio"
              name="construction"
              value="Yes"
              checked={formData.construction === "Yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="construction"
              value="No"
              checked={formData.construction === "No"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      <div className={styles.possession}>
        <div className={styles.possessionName}>Expected Possession by</div>
        <div className={styles.possessionInput}>
          <input
            type="text"
            name="Month and year"
            value={formData["Month and year"]}
            onChange={handleInputChange}
            placeholder="Month and year"
          />
        </div>
      </div>

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

export default PlotProfileForm;
