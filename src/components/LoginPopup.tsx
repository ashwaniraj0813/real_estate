import React, { FunctionComponent, useState } from "react";
import styles from "./LoginPopup.module.css";
import { jwtDecode } from "jwt-decode";

type LoginPopupProps = {
  onClose: () => void;
  onSwitchToRegister: () => void;
  onLoginSuccess: () => void;
};

const LoginPopup: FunctionComponent<LoginPopupProps> = ({
  onClose,
  onSwitchToRegister,
  onLoginSuccess,
}) => {
  const [emailOrPhone, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      if (!response.ok) {
        const message = await response.json();
        setError(message.error || "Login failed");
        return;
      }

      const data = await response.json();
  
      console.log("Token received:", data.token);

      console.log(data.token);
      localStorage.setItem('authToken', data.token);

      const decoded = jwtDecode(data.token);
      console.log(decoded);

      onLoginSuccess();
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupContent}>
        <div className={styles.closeButton} onClick={onClose}>
          &times;
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.section}>
            <label htmlFor="email">Email/Phone</label>
            <input
              type="text"
              id="email"
              name="emailOrPhone"
              placeholder="Email or Phone"
              required
              value={emailOrPhone}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.section}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.info}>
            <p className={styles.paragraph}>Do not have an account?</p>
            <div className={styles.register} onClick={onSwitchToRegister}>
              Register Now
            </div>
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
