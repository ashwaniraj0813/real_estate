import { FunctionComponent } from "react";
import Nav from "../components/Nav5";
import Sidebar from "../components/Sidebar11";
import FrameComponent1 from "../components/FrameComponent11";
import styles from "./UserPreviouslyViewed.module.css";

const UserPreviouslyViewed: FunctionComponent = () => {
  return (
    <div className={styles.userPreviouslyViewed0}>
      <Nav />
      <main className={styles.sidebarParent}>
        <Sidebar />
        <div className={styles.frameWrapper}>
          <FrameComponent1 />
        </div>
      </main>
    </div>
  );
};

export default UserPreviouslyViewed;
