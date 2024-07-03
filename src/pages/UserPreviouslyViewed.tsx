<<<<<<< HEAD
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav2";
import Sidebar from "../components/Sidebar1";
=======
import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar11";
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
import FrameComponent1 from "../components/FrameComponent11";
import styles from "./UserPreviouslyViewed.module.css";

const UserPreviouslyViewed: FunctionComponent = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    navigate("/property-listings-page");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.userPreviouslyViewed0}>
      <Nav
        onLOGOTextClick={onLOGOTextClick}
        onHomeText1Click={onLOGOTextClick}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onHomeIconClick}
      />
      <main className={styles.sidebarParent}>
        <Sidebar />
        <div className={styles.emptyStateIllustration}>
=======
  return (
    <div className={styles.userPreviouslyViewed0}>
      <Navbar/>
      <main className={styles.sidebarParent}>
        <Sidebar />
        <div className={styles.frameWrapper}>
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
          <FrameComponent1 />
        </div>
      </main>
    </div>
  );
};

export default UserPreviouslyViewed;
