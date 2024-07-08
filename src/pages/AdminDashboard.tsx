import React, { FunctionComponent, useEffect, useState } from "react";
import Nav from "../components/Nav";
import FirstNameField from "../components/FirstNameField";
import styles from "./AdminDashboard.module.css";

interface Appointment {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  PhoneNumber: number;
}

const AdminDashboard: FunctionComponent = () => {

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/appointments");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAppointments(data.appointments);
      } 
      catch (err) {
        setError(err.message);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className={styles.adminDashboard}>
      <Nav />
      <section className={styles.content}>
        <div className={styles.profile}>
          {loading ? (
            <p>Loading appointments...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            appointments.map((appointment) => (
              <div key={appointment._id} className={styles.profileImage}>
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
                      firstNamePlaceholder={appointment.firstName}
                    />
                    <FirstNameField
                      firstName="Phone No."
                      firstNamePlaceholder={appointment.PhoneNumber.toString()}
                      propMinWidth="106px"
                    />
                  </div>
                </div>
                <div className={styles.lastName}>
                  <FirstNameField
                    firstName="Last Name"
                    firstNamePlaceholder={appointment.lastName}
                    propMinWidth="110px"
                  />
                  <FirstNameField
                    firstName="Mail"
                    firstNamePlaceholder={appointment.email}
                    propMinWidth="43px"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
