// LoginPopup.tsx
import React, { FunctionComponent, useState } from "react";
import styles from "./LoginPopup.module.css";

type LoginPopupProps = {
  onClose: () => void;
  onSwitchToRegister: () => void; // Add this prop
  onVerifyOtp: (token: string) => void;
};

const LoginPopup: FunctionComponent<LoginPopupProps> = ({ onClose, onSwitchToRegister,onVerifyOtp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      console.log('Sending email:', email);
      console.log('Sending password:', password);
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const message = await response.json();
        setError(message.error || "Login failed");
        return;
      }


      const data = await response.json();
      console.log("Token received:", data.token);
      
       // Pass the token to the parent component
     
      onClose();
      // Optionally, handle successful login (e.g., store auth token, redirect, etc.)
      
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.section}>
            <label htmlFor="email">Email/Phone</label>
            <input type="email" id="email" name="email" required  value={email}
  onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className={styles.section}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required value={password}
  onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className={styles.info}>
            <p className={styles.paragraph}>Do not have an account?</p>
            <div className={styles.register} onClick={onSwitchToRegister}>Register Now</div>
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
