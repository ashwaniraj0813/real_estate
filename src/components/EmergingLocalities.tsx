import React from "react";
import styles from "./EmergingLocalities.module.css";

const EmergingLocalities: React.FC = () => {
    return (
        <div className={styles.container}>
            <p>Emerging Localities</p>
            <p>Localities with recent development in this city</p>
            <div className={styles.localityCards}>
                
            </div>
        </div>
    );
}

export default EmergingLocalities;