import React, { FunctionComponent, useState, useEffect, ChangeEvent, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./UserProfile.module.css";
import EditableInput from "./EditableInput";

const UserProfile: FunctionComponent = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputValues, setInputValues] = useState({
    role: "Buyer", // Default value set to "Buyer"
    name: "Full Name",
    phoneNumber1: "Phone Number 1",
    phoneNumber2: "Phone Number 2",
    phoneNumber3: "Phone Number 3",
    mail: "Mail",
    state: "State",
    city: "City",
    address: "Address",
    landlineNumber: "Landline Number",
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedInputValues = localStorage.getItem("userProfile");
    if (savedInputValues) {
      setInputValues(JSON.parse(savedInputValues));
    }

    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(inputValues));
  }, [inputValues]);

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("profileImage", selectedImage);
    }
  }, [selectedImage]);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    setInputValues({
      ...inputValues,
      [field]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.userProfile}>
      <Navbar />
      <section className={styles.sidebarParent}>
        <Sidebar currentPage="profile-settings" />
        <div className={styles.lastNameRow} style={{ marginTop: "4vh" }}>
          <div className={styles.userContainer}>
            <div style={{ display: "flex", flexDirection: "row", gap: "12vw" }}>
              <div className={styles.header}>
                <div className={styles.profileImage}>
                  <div
                    className={styles.logo}
                    style={{
                      backgroundImage: selectedImage ? `url(${selectedImage})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: selectedImage ? 'transparent' : 'linear-gradient(to right, #42a5f5, #7e57c2)',
                    }}
                  />
                  <button className={styles.cameraButton} onClick={handleButtonClick}>
                    <img
                      loading="lazy"
                      alt=""
                      src="/camera.svg"
                    />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className={styles.editProfile}>
                {!isEditable && (
                  <button className={styles.editButton} onClick={handleEditClick}>
                    <div className={styles.editButtonChild} />
                    <a className={styles.edit}>Edit</a>
                    <img
                      className={styles.materialSymbolseditIcon}
                      alt=""
                      src="/materialsymbolsedit.svg"
                    />
                  </button>
                )}
              </div>
            </div>
            <div className={styles.detailContainer}>
              <div className={styles.editableContainer}>
                <div className={styles.detailColumn}>
                  <div className={styles.indDetail}>
                    You are
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.role}
                      onChange={(e) => handleInputChange(e, "role")}
                      type="select" // Specify the input type as select for the role field
                    />
                  </div>
                  <div className={styles.indDetail}>
                    Name
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.name}
                      onChange={(e) => handleInputChange(e, "name")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    Phone Number 1
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.phoneNumber1}
                      onChange={(e) => handleInputChange(e, "phoneNumber1")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    Phone Number 2
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.phoneNumber2}
                      onChange={(e) => handleInputChange(e, "phoneNumber2")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    Phone Number 3
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.phoneNumber3}
                      onChange={(e) => handleInputChange(e, "phoneNumber3")}
                    />
                  </div>
                </div>
                <div className={styles.detailColumn}>
                  <div className={styles.indDetail}>
                    Mail
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.mail}
                      onChange={(e) => handleInputChange(e, "mail")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    State
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.state}
                      onChange={(e) => handleInputChange(e, "state")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    City
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.city}
                      onChange={(e) => handleInputChange(e, "city")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    Address
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.address}
                      onChange={(e) => handleInputChange(e, "address")}
                    />
                  </div>
                  <div className={styles.indDetail}>
                    Landline Number
                    <EditableInput
                      isEditable={isEditable}
                      value={inputValues.landlineNumber}
                      onChange={(e) => handleInputChange(e, "landlineNumber")}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.other}>
                <div className={styles.subscribeContainer}>
                  Subscribe for updates from Real Estate.
                  <div className={styles.checkContainer}>
                    <input
                      type="checkbox"
                      id="subscribe"
                      className={styles.checkbox}
                    />
                    Other Promotional Mailers
                  </div>
                </div>
                <div className={styles.TC}>
                  By clicking below you agree to the{" "}
                  <span className={styles.TCtext}>
                    Terms and Conditions
                  </span>
                </div>
                <button
                  className={`${styles.saveProfile} ${isEditable ? 'active' : ''}`}
                  disabled={!isEditable}
                  onClick={handleSaveClick}
                >
                  Save Profile
                </button>
                <div className={styles.deleteContainer}>
                  To delete your account{" "}
                  <span className={styles.TCtext}>
                    click here
                  </span>
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
