import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav2";
import Sidebar from "../components/Sidebar1";
import FrameComponent1 from "../components/FrameComponent11";
import styles from "./UserPreviouslyViewed.module.css";

const UserPreviouslyViewed: FunctionComponent = () => {
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
          <FrameComponent1 />
        </div>
      </main>
    </div>
  );
};

export default UserPreviouslyViewed;
