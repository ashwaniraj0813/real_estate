<<<<<<< HEAD
import { FunctionComponent } from "react";
import styles from "./ContactForm.module.css";

export type ContactFormType = {
  className?: string;
};

const ContactForm: FunctionComponent<ContactFormType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactForm, className].join(" ")}>
      <div className={styles.contactDetails}>
        <div className={styles.brokergmailcom}>broker@gmail.com</div>
        <div className={styles.email}>Email</div>
        <div className={styles.phone}>Phone</div>
        <div className={styles.brokerEmailLabel}>+33 1234 5678</div>
      </div>
      <textarea
        className={styles.contactForm1}
        placeholder="Write your message ..."
        rows={9}
        cols={28}
      />
      <div className={styles.phoneNumber}>
        <div className={styles.phoneNumberChild} />
        <div className={styles.phoneNumber1}>Phone Number</div>
      </div>
      <div className={styles.email1}>
        <div className={styles.emailChild} />
        <div className={styles.emailAddress}>Email Address</div>
      </div>
      <button className={styles.submitBtn}>
        <div className={styles.submitBtnChild} />
        <div className={styles.submit}>Submit</div>
      </button>
      <div className={styles.contact}>
        <b className={styles.contactForm2}>Contact Form</b>
      </div>
    </section>
  );
};

export default ContactForm;
=======
import React, { useState, FunctionComponent } from "react";
import styles from "./ContactForm.module.css";

export type ContactFormType = {
    className?: string;
};

const ContactForm: FunctionComponent<ContactFormType> = ({ className = ""}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };
    
    return (
        <section className={styles.ContactForm}>
            <div className={styles.heading}>Contact Form</div>
            <div className={styles.contact}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                    />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                    />

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                    />

                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message here..."
                    ></textarea>

                    <button className={styles.btn} type="submit">Submit</button>
                </form>
                <table className={styles.broker}>
                    <tr className={styles.datarow}>
                        <td className={styles.basis}>Email</td>
                        <td className={styles.data}>broker@gmail.com</td>
                    </tr>
                    <tr className={styles.datarow}>
                        <td className={styles.basis}>Phone</td>
                        <td className={styles.data}>+33 1234 5678</td>
                    </tr>
                </table>
            </div>

        </section>
    );
};

export default ContactForm;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
