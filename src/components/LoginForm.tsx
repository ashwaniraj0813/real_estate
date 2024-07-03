<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
=======
import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import styles from "./LoginForm.module.css";

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const baseUrl = "http://localhost:5000/api/login"; // kindly put herre your backend url , or the deployed backend base url .

  const [loginCredentials, setLoginCredentials] = useState({
    emailOrPhone: "",
    password: "",
  });
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc

  const onRegisterNowTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

<<<<<<< HEAD
  const onSubmitButtonClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <section className={[styles.loginForm, className].join(" ")}>
      <form className={styles.loginForm1}>
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(baseUrl, loginCredentials);
      const token = response.data.token;
      axios.defaults.headers.common["Authorization"] = `bearer ${token}`;

      localStorage.setItem('authToken', token);

      console.log(response.data);
      navigate("/user-profile"); // after successful login , navigate or add your logic as per your req .
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw new Error("Login failed");
    }
  };

  return (
    <section className={[styles.loginForm, className].join(" ")}>
      <form className={styles.loginForm1} onSubmit={onSubmit}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
        <div className={styles.loginFormChild} />
        <div className={styles.registration}>
          <div className={styles.logInsignIn}>Log In/Sign In</div>
        </div>
        <div className={styles.registerCallToAction}>
          <div className={styles.phoneNumberMail}>Phone Number/ mail</div>
          <div className={styles.phoneInput}>
            <div className={styles.phoneInputChild} />
            <input
              className={styles.phonemail}
              placeholder="Phone/mail"
              type="text"
<<<<<<< HEAD
=======
              name="emailOrPhone"
              value={loginCredentials.emailOrPhone}
              onChange={handleChange}
              required
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
            />
          </div>
        </div>
        <div className={styles.passwordContainerWrapper}>
          <div className={styles.passwordContainer}>
            <div className={styles.password}>Password</div>
            <div className={styles.passwordPlaceholder}>
              <div className={styles.passwordPlaceholderChild} />
              <input
                className={styles.password1}
                placeholder="Password"
<<<<<<< HEAD
                type="text"
=======
                type="password"
                name="password"
                value={loginCredentials.password}
                onChange={handleChange}
                required
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
              />
            </div>
          </div>
        </div>
        <div className={styles.registrationContainerWrapper}>
          <div className={styles.registrationContainer}>
            <div className={styles.registrationCallToAction}>
              <div className={styles.doNotHave}>Do not have an account?</div>
              <div
                className={styles.registerNow}
                onClick={onRegisterNowTextClick}
              >
                <span className={styles.span}>{` `}</span>
                <span className={styles.registerNow1}>Register Now</span>
              </div>
            </div>
            <div className={styles.passwordField}>
<<<<<<< HEAD
              <button
                className={styles.submitButton}
                onClick={onSubmitButtonClick}
              >
=======
              <button className={styles.submitButton} type="submit">
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
                <div className={styles.submitButtonChild} />
                <div className={styles.logIn}>LOG IN</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

<<<<<<< HEAD
export default LoginForm;
=======
export default LoginForm;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
