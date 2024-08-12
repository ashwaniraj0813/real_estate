import React, { useState } from "react";
import styles from "./AppointmentForm.module.css";

const AppointmentForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const apiUrl = "http://localhost:5000/api/appointments";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, phone }),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      } else {
        throw new Error("Failed to book appointment.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>BOOK APPOINTMENT</h2>
      <div className={styles.appointmentContainer}>
        <form className={styles.aptform} onSubmit={handleSubmit}>
          <div className={styles.fullname}>
            <input
              className={styles.fname}
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className={styles.lname}
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <input
            className={styles.email}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.phno}
            placeholder="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button className={styles.bookappointment} type="submit">
            Get Your Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
