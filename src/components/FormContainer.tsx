import { FunctionComponent, useCallback } from "react";
import MailPassword from "./MailPassword";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer.module.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onLoginNowTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSubmitButtonClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={[styles.formContainer, className].join(" ")}>
      <div className={styles.formContainerChild} />
      <div className={styles.registrationForm}>
        <div className={styles.registerWrapper}>
          <b className={styles.register}>Register</b>
        </div>
        <div className={styles.credentials}>
          <div className={styles.namePhone}>
            <div className={styles.firstName}>
              <div className={styles.firstName1}>First Name*</div>
              <div className={styles.emailPassword}>
                <div className={styles.confirmFirstNameInput}>
                  <div className={styles.confirmFirstNameInputChild} />
                  <input
                    className={styles.firstName2}
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div className={styles.phoneNumber}>Phone Number*</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.confirmLastName}>
                <div className={styles.lastName}>Last Name*</div>
                <div className={styles.confirmLastNameInput}>
                  <div className={styles.confirmLastNameInputChild} />
                  <input
                    className={styles.lastName1}
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phoneNumber1}>
            <div className={styles.phoneNumberInput}>
              <div className={styles.phoneNumberInputChild} />
              <input
                className={styles.phoneNo}
                placeholder="Phone no."
                type="text"
              />
            </div>
          </div>
          <MailPassword mail="Mail" mailPlaceholder="Mail" />
          <MailPassword
            mail="Password*"
            mailPlaceholder="Password"
            propPadding="unset"
            propBorderRadius="unset"
            propPadding1="var(--padding-8xs) var(--padding-2xs) var(--padding-4xs)"
            propBorderRadius1="unset"
          />
        </div>
      </div>
      <div className={styles.submission}>
        <div className={styles.account}>
          <div className={styles.login}>
            <div
              className={styles.alreadyHaveAn}
            >{`Already have an account? `}</div>
            <u className={styles.loginNow} onClick={onLoginNowTextClick}>
              Login Now
            </u>
          </div>
          <div className={styles.submit}>
            <button
              className={styles.submitButton}
              onClick={onSubmitButtonClick}
            >
              <div className={styles.submitButtonChild} />
              <div className={styles.register1}>REGISTER</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
