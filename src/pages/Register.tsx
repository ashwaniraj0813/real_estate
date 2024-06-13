import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav1 from "../components/Nav1";
import FormContainer from "../components/FormContainer";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.register}>
      <Nav1
        onLOGOTextClick={onLOGOTextClick}
        onHomeLinkContainerClick={onHomeLinkContainerClick}
      />
      <section className={styles.content}>
        <FormContainer />
      </section>
    </div>
  );
};

export default Register;
