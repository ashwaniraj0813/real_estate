import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { jwtDecode } from "jwt-decode";
import styles from "./UserProfile.module.css";
import Navbar from "../components/Navbar";

interface DecodedToken {
  firstname: string;
  email: string;
  phoneNumber: string;
  lastname: string;
}

const UserProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      try {
        const decodedToken: DecodedToken = jwtDecode(authToken);
        setFirstName(decodedToken.firstname);
        setEmail(decodedToken.email);
        setPhoneNumber(decodedToken.phoneNumber);
        setLastName(decodedToken.lastname);
        
      } catch (error) {
        console.error('Error decoding authToken:', error);
      }
    }
  }, []);

  const onMyPropertiesTextClick = useCallback(() => {
    navigate("/user-properties0");
  }, [navigate]);

  return (
    <div className={styles.userProfile}>
      <Navbar/>
      <section className={styles.userPanel}>
        <Sidebar onMyPropertiesTextClick={onMyPropertiesTextClick} />
        <div className={styles.profilePanel}>
          <div className={styles.userContainer}>
            <div className={styles.profileHeader}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                  <div className={styles.logo1} />
                  <img
                    className={styles.cameraIcon}
                    loading="lazy"
                    alt=""
                    src="/camera.svg"
                  />
                </div>
              </div>
              <div className={styles.editButtonWrapper}>
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
            <div className={styles.profileInfo}>
              <div className={styles.frameParent}>
                <div className={styles.firstNameInputParent}>
                  <div className={styles.firstNameInput}>
                    <div className={styles.firstNameWrapper}>
                      <div className={styles.firstName}>First Name</div>
                      <div className={styles.profilePictureParent}>
                        <div className={styles.profilePicture}>
                          <div className={styles.profilePictureChild} />
                          <div className={styles.firstName1}>{firstName}</div>
                        </div>
                        <input
                          className={styles.phoneNumber}
                          placeholder="Phone Number*"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className={styles.lastNameParent}>
                      <div className={styles.lastName}>Last Name</div>
                      <div className={styles.lastNameInput}>
                        <div className={styles.phoneNumberRow}>
                          <div className={styles.phoneNumberRowChild} />
                          <input
                            className={styles.lastName1}
                            value={lastName}
                            placeholder="Last Name"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <input
                      className={styles.phoneNo}
                      value={phoneNumber}
                      placeholder="Phone no."
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.mailParent}>
                  <div className={styles.mail}>Mail</div>
                  <div className={styles.emailInput}>
                    <div className={styles.emailInputChild} />
                    <input
                      className={styles.mail1}
                      value={email}
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