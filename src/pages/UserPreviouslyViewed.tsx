import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./UserPreviouslyViewed.module.css";

const UserPreviouslyViewed: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBuyTextClick = useCallback(() => {
    // Please sync "Property Listings Page" to the project
  }, []);

  const onHomeIconClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.userPreviouslyViewed0}>
      <Nav
        onLOGOTextClick={onLOGOTextClick}
        onHomeText1Click={onHomeText1Click}
        onBuyTextClick={onBuyTextClick}
        onHomeIconClick={onHomeIconClick}
      />
      <main className={styles.sidebarParent}>
        <Sidebar />
        <div className={styles.emptyStateIllustration}>
          <FrameComponent1 />
        </div>
      </main>
    </div>
  );
};

export default UserPreviouslyViewed;
