<<<<<<< HEAD
import { FunctionComponent } from "react";
import styles from "./SimilarProperties.module.css";

export type SimilarPropertiesType = {
  className?: string;
};

const SimilarProperties: FunctionComponent<SimilarPropertiesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.similarProperties, className].join(" ")}>
      <div className={styles.mostPopularPropertyCard}>
        <img
          className={styles.web31Icon}
          loading="lazy"
          alt=""
          src="/web3-1@2x.png"
        />
        <div className={styles.chapterIslingtonLondonContainer}>
          <p className={styles.chapterIslingtonLondon}>
            Chapter Islington, London
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.from390week}>From £390/week</p>
        </div>
      </div>
      <div className={styles.mostPopularPropertyCard1}>
        <img
          className={styles.web11Icon}
          loading="lazy"
          alt=""
          src="/web1-1@2x.png"
        />
        <div className={styles.coppermakerSquareLondonContainer}>
          <p className={styles.coppermakerSquareLondon}>
            Coppermaker Square, London
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.from3723month}>From £3,723/month</p>
        </div>
      </div>
      <div className={styles.mostPopularPropertyCard2}>
        <img
          className={styles.web41Icon}
          loading="lazy"
          alt=""
          src="/web4-1@2x.png"
        />
        <div className={styles.theLyraLondonContainer}>
          <p className={styles.theLyraLondon}>The Lyra, London</p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.from390week1}>From £390/week</p>
        </div>
      </div>
      <div className={styles.mostPopularPropertyCard3}>
        <img
          className={styles.web21Icon}
          loading="lazy"
          alt=""
          src="/web2-1@2x.png"
        />
        <div className={styles.ovoArenaBuildingContainer}>
          <p className={styles.ovoArenaBuilding}>OVO Arena Building, London</p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.from2195month}>From £2,195/month</p>
        </div>
      </div>
      <b className={styles.similarProperties1}>Similar Properties</b>
    </section>
  );
};

export default SimilarProperties;
=======
import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import styles from "./SimilarProperties.module.css";

const SimilarProperties: FunctionComponent = () => {
    const [properties, setProperties] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/property", {
                    method: "GET",
                    headers: {
                        "Content-Type": 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch properties");
                }

                const result = await response.json();
                setProperties(result);
            } 
            catch (error) {
                console.log("Error came when fetching property cards" ,error);
            }
        };

    fetchProperties();
    }, [properties]);

    const onRentTextClick = useCallback(() => {
        navigate("/rent");
    }, [navigate]);

    const onSellTextClick = useCallback(() => {
        navigate("/sell");
    }, [navigate]);

    const onPropertyCardContainerClick = useCallback(() => {
        navigate("/property-details-page");
    }, [navigate]);

    return (
        <section className={styles.SimilarProperties}>
            <div className={styles.heading}>Similar Properties</div>
            <div className={styles.similarlistings}>
                {properties.map(property => (
                    <PropertyCard
                        key={property._id}
                        title={property.title}
                        city={property.city}
                        price={property.price}
                        area={property.area}
                    />
                ))}
            </div>
        </section>
    );
};

export default SimilarProperties;
>>>>>>> efc6cd41fbfbb22488a4e52a2f908ee350cbbbbc
