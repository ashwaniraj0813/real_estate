import { FunctionComponent } from "react";
import styles from "./EmployeeCard.module.css";

const EmployeeCard: FunctionComponent = ({ }) => {
  return (
    <div className={styles.employeeCard}>
      <img className={styles.image} src="/istockphoto1476170969170667a-1@2x.png" />
      <div className={styles.information}>
          <div className={styles.name}>
            Ashwani Raj
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
