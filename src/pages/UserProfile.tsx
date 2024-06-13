import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import styles from "./UserProfile.module.css";

const UserProfile: FunctionComponent = () => {
  return (
    <div className={styles.userProfile}>
      <Nav />
      <section className={styles.sidebarParent}>
        <Sidebar />
        <div className={styles.lastNameRow}>
          <div className={styles.userContainer}>
            <div className={styles.profileDetails}>
              <div className={styles.header}>
                <div className={styles.profileImage}>
                  <div className={styles.logo} />
                  <img
                    className={styles.cameraIcon}
                    loading="lazy"
                    alt=""
                    src="/camera.svg"
                  />
                </div>
              </div>
              <div className={styles.editProfile}>
                <button className={styles.editButton}>
                  <div className={styles.editButtonChild} />
                  <a className={styles.edit}>Edit</a>
                  <img
                    className={styles.materialSymbolseditIcon}
                    alt=""
                    src="/materialsymbolsedit.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.firstNameValueWrapper}>
              <div className={styles.firstNameValue}>
                <div className={styles.nameDetails}>
                  <div className={styles.firstNameInput}>
                    <div className={styles.firstNameField}>
                      <div className={styles.firstName}>First Name</div>
                      <div className={styles.phoneNumberInput}>
                        <div className={styles.profilePicture}>
                          <div className={styles.profilePictureChild} />
                          <div className={styles.firstName1}>First Name</div>
                        </div>
                        <input
                          className={styles.phoneNumber}
                          placeholder="Phone Number*"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.firstNameInput1}>
                      <div className={styles.lastName}>Last Name</div>
                      <div className={styles.lastNameContainer}>
                        <div className={styles.phoneNumberRow}>
                          <div className={styles.phoneNumberRowChild} />
                          <input
                            className={styles.lastName1}
                            placeholder="Last Name"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactNumber}>
                    <div className={styles.contactNumberChild} />
                    <input
                      className={styles.phoneNo}
                      placeholder="Phone no."
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.firstNameRow}>
                  <div className={styles.mail}>Mail</div>
                  <div className={styles.emailInput}>
                    <div className={styles.emailInputChild} />
                    <input
                      className={styles.mail1}
                      placeholder="Mail"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
