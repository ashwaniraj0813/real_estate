<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav1 from "../components/Nav1";
=======
import { FunctionComponent } from "react";
import Nav from "../components/Nav";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import LoginForm from "../components/LoginForm";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <Nav1
        onLOGOTextClick={onLOGOTextClick}
        onHomeLinkContainerClick={onLOGOTextClick}
      />
=======
  return (
    <div className={styles.logIn}>
      <Nav/>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
      <LoginForm />
    </div>
  );
};

export default LogIn;
