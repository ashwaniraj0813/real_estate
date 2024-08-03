import React, { useRef } from 'react';
import styles from './PropertyTypeCarousel.module.css';

interface PropertyTypeCardProps {
  title: string;
  description: string;
  imageSrc: string; 
}

const PropertyTypeCard: React.FC<PropertyTypeCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const PropertyTypeCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const propertyTypes = [
    { title: 'Residential Land', description: '2,200+ Properties', imageSrc: '/resiplot.png' },
    { title: 'Independent House/ Villa', description: '1,400+ Properties', imageSrc: '/villa.png' },
    { title: 'Independent/Builder Floor', description: '210+ Properties', imageSrc: '/builder.jpg ' },
    { title: 'Plots', description: '800+ Properties', imageSrc: '/istockphoto.png' }, 
    { title: 'Farm Houses', description: '300+ Properties', imageSrc: 'fh.png' },
  ];

  return (
    <div className={styles.carousel}>
      <h2 className={styles.carouselTitle}>Apartments, Villas and More</h2>
      <div className={styles.carouselControls}>
        <button className={styles.scrollButton} onClick={() => scroll(-300)}>←</button>
        <div className={styles.cardsContainer} ref={carouselRef}>
          {propertyTypes.map((property, index) => (
            <PropertyTypeCard
              key={index}
              title={property.title}
              description={property.description}
              imageSrc={property.imageSrc}  // Corrected prop name
            />
          ))}
        </div>
        <button className={styles.scrollButton} onClick={() => scroll(300)}>→</button>
      </div>
    </div>
  );
};

export default PropertyTypeCarousel;
