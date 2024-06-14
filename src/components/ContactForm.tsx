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
