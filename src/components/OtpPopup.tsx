import React, { FunctionComponent, useState } from "react";
import styles from "./OtpPopup.module.css";

type OtpPopupProps = {
  email: string;
  onClose: () => void;
  onVerifyOtp: () => void;
};

const OtpPopup: FunctionComponent<OtpPopupProps> = ({ email, onClose, onVerifyOtp }) => {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Assume OTP verification is successful
    onVerifyOtp();
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Enter OTP</h2>
        <p>A 4-digit OTP has been sent to {email}. Please enter it below to complete your registration.</p>
        <form onSubmit={handleVerifyOtp}>
          <div className={styles.section}>
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              required
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <button type="submit">Verify</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpPopup;
