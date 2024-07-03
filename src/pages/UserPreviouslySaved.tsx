import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import FrameComponent from "../components/FrameComponent4";
import styles from "./UserPreviouslySaved.module.css";

const UserPreviouslySaved: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContactedTextClick = useCallback(() => {
    navigate("/user-previously-contacted0");
  }, [navigate]);

  const onPastSearchesTextClick = useCallback(() => {
    navigate("/user-past-searches0");
  }, [navigate]);

  return (
    <div className={styles.userPreviouslySaved0}>
      <Nav/>
      <main className={styles.sidebarParent}>
        <Sidebar currentPage="user-previously-saved0"
          sidebarMarginLeft="unset"
          profileSettingsColor="#000"
          profileSettingsFontWeight="unset"
          myPropertiesColor="#784dc6"
          myPropertiesFontWeight="bold"
        />
        <FrameComponent />
      </main>
    </div>
  );
};

export default UserPreviouslySaved;
