import { FunctionComponent, useCallback } from "react";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import styles from "./Content1.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSubmitButtonClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  return (
    <section className={[styles.content, className].join(" ")}>
      <form className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.adminLoginHeader}>
          <div className={styles.adminLogin}>Admin Login</div>
        </div>
        <div className={styles.adminLoginForm}>
          <div className={styles.adminCredentials}>
            <div className={styles.adminIdInput}>
              <div className={styles.adminId}>Admin Id</div>
              <div className={styles.adminIdField}>
                <div className={styles.adminIdFieldChild} />
                <input
                  className={styles.adminId1}
                  placeholder="Admin Id"
                  type="text"
                />
              </div>
            </div>
          </div>
          <PasswordInput password="Password" passwordPlaceholder="Password" />
        </div>
        <div className={styles.submitButtonContainer}>
          <button className={styles.submitButton} onClick={onSubmitButtonClick}>
            <div className={styles.submitButtonChild} />
            <div className={styles.logIn}>LOG IN</div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Content;
