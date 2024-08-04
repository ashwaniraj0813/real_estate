import React, { useState } from "react";
import styles from "./ReviewForm.module.css";

const ReviewForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Submit logic to be implemented here
  };

  return (
    <div className={styles.reviewFormContainer}>
      <h2 className={styles.heading}>Leave a Review</h2>
      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.submitButton}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;