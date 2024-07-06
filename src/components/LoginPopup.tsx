import React, { FunctionComponent } from "react";
import styles from "./LoginPopup.module.css";

type LoginPopupProps = {
  onClose: () => void;
  onSwitchToRegister: () => void;
};

const LoginPopup: FunctionComponent<LoginPopupProps> = ({ onClose, onSwitchToRegister }) => {
  const handleSwitchToRegister = () => {
    onSwitchToRegister(); 
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form>
          <div className={styles.section}>
            <label htmlFor="email">Email/Phone</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.section}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.info}>
            <p className={styles.paragraph}>Do not have an account?</p>
            <div className={styles.register} onClick={handleSwitchToRegister}>Register Now</div>
          </div>
          <div className={styles.submit}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
