<<<<<<< HEAD
import { FunctionComponent } from "react";
import styles from "./TestimonialTwoContent.module.css";
=======
import { FunctionComponent, useEffect, useState } from "react";
import styles from "./TestimonialTwoContent.module.css";
import axios from "axios";
import { createLogicalAnd } from "typescript";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc

export type TestimonialTwoContentType = {
  className?: string;
};

<<<<<<< HEAD
const TestimonialTwoContent: FunctionComponent<TestimonialTwoContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.cardContent, className].join(" ")}>
      <div className={styles.wonderfulServiceParent}>
        <div className={styles.wonderfulService}>Wonderful service!</div>
        <div className={styles.reviewDescription}>
          <i className={styles.loremIpsumHas}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries
          </i>
        </div>
      </div>
      <div className={styles.cardContentChild} />
      <div className={styles.reviewAuthor}>
        <div className={styles.thejidmeinsDentist}>-Thejidmeins, dentist</div>
      </div>
=======
export type Testimonial = {
  author: string;
  content: string;
  title: string;
  createdAt: string;
};

const TestimonialTwoContent: FunctionComponent<TestimonialTwoContentType> = ({
  className = "",
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/testimonials");
      setTestimonials(res.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className={styles.cardList}>
      {testimonials.map((testimonial: Testimonial, index: number) => (
        <div key={index} className={[styles.cardContent, className].join(" ")}>
          <div className={styles.wonderfulServiceParent}>
            <div className={styles.wonderfulService}>{testimonial.title}</div>
            <div className={styles.reviewDescription}>
              <i className={styles.loremIpsumHas}>{testimonial.content}</i>
            </div>
          </div>
          <div className={styles.cardContentChild} />
          <div className={styles.reviewAuthor}>
            <div className={styles.thejidmeinsDentist}>
              -{testimonial.author}
            </div>
          </div>
        </div>
      ))}
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
    </div>
  );
};

<<<<<<< HEAD
export default TestimonialTwoContent;
=======
export default TestimonialTwoContent;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
