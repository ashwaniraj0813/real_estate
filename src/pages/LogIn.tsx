import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav1 from "../components/Nav1";
import LoginForm from "../components/LoginForm";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = () => {
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
      <LoginForm />
    </div>
  );
};

export default LogIn;
