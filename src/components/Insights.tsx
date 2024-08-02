import React from 'react';
import styles from './Insights.module.css';

const CardLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src="../insightslogo.jpeg" alt="Logo" className={styles.logo} />
        <h1>Insights and Tools</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.card}>
          <a href="https://www.moneycontrol.com/real-estate-property/">
            <img src="./news.jpeg" alt="Image 2" />
            <div className={styles.content}>
              <h3>Read latest News</h3>
              <p>About real estate</p>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://www.rprealtyplus.com/">
            <img src="./checkarticles.png" alt="Image 3" />
            <div className={styles.content}>
              <h3>Check Articles</h3>
              <p>On trendy topics and policy updates</p>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://emicalculator.net/">
            <img src="./emicalculator.png" alt="Image 1" />
            <div className={styles.content}>
              <h3>EMI Calculator</h3>
              <p>Calculate your home loan EMI</p>
            </div>
          </a>
        </div>
        
        <div className={styles.card}>
          <a href="https://www.calculator.net/area-calculator.html">
            <img src="./areacalculator.png" alt="Image 4" />
            <div className={styles.content}>
              <h3>Area Calculator</h3>
              <p>Convert one area to other area easily</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;