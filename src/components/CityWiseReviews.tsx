import React from 'react';
import styles from './CityWiseReviews.module.css';

interface Locality {
  name: string;
  rate: string;
  rentalYield: string;
  priceTrend: string;
}

const localities: Locality[] = [
  { name: 'Gajuwaka', rate: '₹4,250/ sq.ft', rentalYield: '3%', priceTrend: '14.9% YOY' },
  { name: 'Madhurawada', rate: '₹4,800/ sq.ft', rentalYield: '3%', priceTrend: '7.9% YOY' },
  { name: 'Atchutapuram', rate: '₹2,800/ sq.ft', rentalYield: '4%', priceTrend: '7.7% YOY' },
  { name: 'Sujatha Nagar', rate: '₹3,800/ sq.ft', rentalYield: 'NA', priceTrend: '5.6% YOY' },
  { name: 'Yendada', rate: '₹6,300/ sq.ft', rentalYield: '2%', priceTrend: '3.3% YOY' },
];

const CityWiseReviews: React.FC = () => {
  return (
    <>
        <div className={styles.container}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <h2>Top Gainers</h2>
                <p>across Visakhapatnam with highest appreciation</p>
            </div>
        <div className={styles.table}>
            <div style={{display: "flex", border: "1px grey solid", borderRadius: "0.3em", padding: "0.4em", backgroundColor: "#e1e1e1"}}>
                <div className={styles.localityHeader}>Locality</div>
                <div className={styles.rateHeader}>Rate on 99acres</div>
                <div className={styles.rentalYieldHeader}>Rental Yield</div>
                <div className={styles.priceTrendHeader}>Price Trends</div>
            </div>
            </div>
            {localities.map((locality, index) => (
            <div key={index} className={styles.row}>
                <div className={styles.locality}>
                <img src="/image.png" alt="location" className={styles.icon} />
                <div>
                    <h3>{locality.name}</h3>
                    <p>Visakhapatnam</p>
                </div>
                </div>
                <div className={styles.rate}>{locality.rate}</div>
                <div className={styles.rentalYield}>{locality.rentalYield}</div>
                <div className={styles.priceTrend}>{locality.priceTrend}</div>
            </div>
            ))}
        </div>
        <button className={styles.viewAllButton}>View all most appreciated localities of Visakhapatnam</button>
    </>
  );
};

export default CityWiseReviews;