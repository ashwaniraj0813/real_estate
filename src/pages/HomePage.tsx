import { FunctionComponent } from "react";
import HomePage1 from "../components/HomePage1";
import Desktop from "../components/Desktop";
import Footer1 from "../components/Footer1";
import HappyTradeParent from "../components/HappyTradeParent";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.header}>
        <HomePage1 />
        <Desktop />
      </section>
      <footer className={styles.homePageChild} />
      <Footer1 />
      <HappyTradeParent />
      <Footer />
    </div>
  );
};

export default HomePage;
