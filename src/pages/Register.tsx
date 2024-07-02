import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import FormContainer from "../components/FormContainer";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
  return (
    <div className={styles.register}>
      <Nav/>
      <section className={styles.content}>
        <FormContainer />
      </section>
    </div>
  );
};

export default Register;
