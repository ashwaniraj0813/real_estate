import { FunctionComponent, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./UserProperties.module.css";
import LottieAnimation from "../components/LottieAnimation";
import Navbar from "../components/Navbar";

const UserProperties: FunctionComponent = () => {
  return (
    <div className={styles.userProperties0}>
      <Navbar/>
      <main className={styles.sidebarContainer}>
        <Sidebar currentPage="user-properties0"
          sidebarMarginLeft="unset"
          profileSettingsColor="#000"
          profileSettingsFontWeight="unset"
          myPropertiesColor="#784dc6"
          myPropertiesFontWeight="bold"
        />
        <div className={styles.emptyStateIllustration}>
          <div className={styles.emptyState}>
            <div className={styles.illustrationContainer}>
              <LottieAnimation animationLink="https://lottie.host/fc9fb0d0-1766-4e25-8483-ba9f9fa545f6/rNwcjg5a6Q.json" style={{ width: 500, height: 400 }} />
            </div>
            <div className={styles.emptyStateMessage}>
              <div className={styles.youHaventBought}>
                You haven’t bought or sold any property yet!
              </div>
            </div>
            <div className={styles.allTheProperties}>
              All the properties and projects that you have bought or sold will
              start appearing here. Search or explore cities now.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProperties;
