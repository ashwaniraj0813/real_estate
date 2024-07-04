import React, { FunctionComponent } from "react";
import styles from "./LoginPopup.module.css";

type LoginPopupProps = {
  onClose: () => void;
};

const LoginPopup: FunctionComponent<LoginPopupProps> = ({ onClose }) => {
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
          <div>
               <p>Do not have an account?</p>
               <div className="Register">Register Now</div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
