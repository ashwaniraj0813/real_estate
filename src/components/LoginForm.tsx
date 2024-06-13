import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRegisterNowTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onSubmitButtonClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <section className={[styles.loginForm, className].join(" ")}>
      <form className={styles.loginForm1}>
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
                type="text"
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
              <button
                className={styles.submitButton}
                onClick={onSubmitButtonClick}
              >
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

export default LoginForm;
