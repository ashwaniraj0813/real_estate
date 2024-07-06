import { FunctionComponent, useState } from "react";
import styles from "./RegisterPopup.module.css";

type RegisterPopupProps = {
  onClose: () => void;
  onSwitchToLogin: () => void;
  onRegister: (email: string) => void;
  prefilledEmail: string;
};

const RegisterPopup: FunctionComponent<RegisterPopupProps> = ({ onClose, onSwitchToLogin, onRegister, prefilledEmail }) => {
  const [email, setEmail] = useState(prefilledEmail);
  const [role, setRole] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(email);
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className={styles.section}>
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className={styles.section}>
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className={styles.section}>
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className={styles.section}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly
            />
          </div>
          <div className={styles.section}>
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.section}>
            <label>Are you a real estate agent or a builder?*</label>
            <div className={styles.radioGroup}>
              <input
                type="radio"
                id="agent"
                name="role"
                value="agent"
                checked={role === "agent"}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <label htmlFor="agent">Yes</label>
              <input
                type="radio"
                id="builder"
                name="role"
                value="builder"
                checked={role === "builder"}
                onChange={(e) => setRole(e.target.value)}
                required
              />
              <label htmlFor="builder">No</label>
            </div>
          </div>
          <div className={styles.req}>
            <p>*required</p>
          </div>
          <div>
            <p className="text">
              Already have an account?{" "}
              <div className={styles.login} onClick={onSwitchToLogin}>
                Login
              </div>
            </p>
          </div>
          <div className={styles.submit}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
