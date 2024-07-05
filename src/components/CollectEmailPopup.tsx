import React, { FunctionComponent, useState } from "react";
import styles from "./CollectEmailPopup.module.css";

type CollectEmailPopupProps = {
  onClose: () => void;
  onSendOtp: (email: string) => void;
};

const CollectEmailPopup: FunctionComponent<CollectEmailPopupProps> = ({ onClose, onSendOtp }) => {
  const [email, setEmail] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    onSendOtp(email);
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Enter Email</h2>
        <form onSubmit={handleSendOtp}>
          <div className={styles.section}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <button type="submit">Send OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectEmailPopup;
