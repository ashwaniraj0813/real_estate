import { FunctionComponent } from "react";
import styles from "./EmployeeCard.module.css";

const EmployeeCard: FunctionComponent = ({ }) => {
  return (
    <div className={styles.employeeCard}>
      <img className={styles.image} src="/builder.jpeg" />
      <div className={styles.information}>
          <div className={styles.name}>
            Anil Kumar
          </div>
          <div className={styles.phone}>
            <img className={styles.icon} src="/phone.png"/>
            033 1234 1234
          </div>
          <div className={styles.email}>
            <img className={styles.icon} src="/mail.png"/>
            employee@realestate.com
          </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
