// src/components/VerifyPropertiesForm.tsx

import React, { FunctionComponent } from "react";
import styles from "./VerifyForm.module.css";

interface Property {
  _id: string;
  firstName: string;
  phoneNumber: string;
  email: string;
}

interface VerifyPropertiesFormProps {
  properties: Property[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}

const VerifyPropertiesForm: FunctionComponent<VerifyPropertiesFormProps> = ({ properties, onAccept, onReject }) => {
  return (
    <div className={styles.verifyPropertiesForm}>
      <div className={styles.heading}><b>Verify Properties</b></div>
      {properties.map(property => (
        <div key={property._id} className={styles.formContainer}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor={`firstName-${property._id}`}>First Name</label>
              <input type="text" id={`firstName-${property._id}`} value={property.firstName} readOnly />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={`phoneNumber-${property._id}`}>Phone Number</label>
              <input type="text" id={`phoneNumber-${property._id}`} value={property.phoneNumber} readOnly />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor={`email-${property._id}`}>Email</label>
              <input type="email" id={`email-${property._id}`} value={property.email} readOnly />
            </div>
            <div className={styles.formButtons}>
              <button type="button" className={`${styles.btn} ${styles.accept}`} onClick={() => onAccept(property._id)}>Accept</button>
              <button type="button" className={`${styles.btn} ${styles.reject}`} onClick={() => onReject(property._id)}>Reject</button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};

export default VerifyPropertiesForm;
