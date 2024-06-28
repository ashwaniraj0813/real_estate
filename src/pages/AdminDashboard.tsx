import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import FirstNameField from "../components/FirstNameField";
import styles from "./AdminDashboard.module.css";

const AdminDashboard: FunctionComponent = () => {
  return (
    <div className={styles.adminDashboard}>
      <Nav />
      <section className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <div className={styles.profileImageChild} />
            <div className={styles.profileImageHolderParent}>
              <div className={styles.profileImageHolder}>
                <img
                  className={styles.istockphoto1476170969170667aIcon}
                  loading="lazy"
                  alt=""
                  src="/istockphoto1476170969170667a-1@2x.png"
                />
              </div>
              <div className={styles.firstName}>
                <FirstNameField
                  firstName="First Name"
                  firstNamePlaceholder="First Name"
                />
                <FirstNameField
                  firstName="Phone No."
                  firstNamePlaceholder="Phone no."
                  propMinWidth="106px"
                />
              </div>
            </div>
            <div className={styles.lastName}>
              <FirstNameField
                firstName="Last Name"
                firstNamePlaceholder="Last Name"
                propMinWidth="110px"
              />
              <FirstNameField
                firstName="Mail"
                firstNamePlaceholder="Mail"
                propMinWidth="43px"
              />
            </div>
          </div>
          <div className={styles.profileImage1}>
            <div className={styles.profileImageItem} />
            <div className={styles.frameParent}>
              <div className={styles.istockphoto1476170969170667aWrapper}>
                <img
                  className={styles.istockphoto1476170969170667aIcon1}
                  loading="lazy"
                  alt=""
                  src="/istockphoto1476170969170667a-1@2x.png"
                />
              </div>
              <div className={styles.frameGroup}>
                <FirstNameField
                  firstName="First Name"
                  firstNamePlaceholder="First Name"
                  propMinWidth="112px"
                />
                <FirstNameField
                  firstName="Phone No."
                  firstNamePlaceholder="Phone no."
                  propMinWidth="106px"
                />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <FirstNameField
                firstName="Last Name"
                firstNamePlaceholder="Last Name"
                propMinWidth="110px"
              />
              <FirstNameField
                firstName="Mail"
                firstNamePlaceholder="Mail"
                propMinWidth="43px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
