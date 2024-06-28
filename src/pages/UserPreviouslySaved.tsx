import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav4";
import Sidebar from "../components/Sidebar1";
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
      <Nav />
      <main className={styles.sidebarParent}>
        <Sidebar
          propColor="#784dc6"
          propFontWeight="bold"
          propColor1="#000"
          propFontWeight1="unset"
          sidebarMinWidth="289px"
          sidebarLinksAlignSelf="stretch"
          pastSearchesFlex="1"
          pastSearchesColor="#000"
          pastSearchesFontWeight="unset"
          onContactedTextClick={onContactedTextClick}
          onPastSearchesTextClick={onPastSearchesTextClick}
        />
        <FrameComponent />
      </main>
    </div>
  );
};

export default UserPreviouslySaved;
