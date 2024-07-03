<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav1 from "../components/Nav1";
=======
import { FunctionComponent } from "react";
import Nav from "../components/Nav";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import FormContainer from "../components/FormContainer";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.register}>
      <Nav1
        onLOGOTextClick={onLOGOTextClick}
        onHomeLinkContainerClick={onLOGOTextClick}
      />
=======
  return (
    <div className={styles.register}>
      <Nav/>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
      <section className={styles.content}>
        <FormContainer />
      </section>
    </div>
  );
};

export default Register;
