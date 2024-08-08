import { FunctionComponent } from "react";
import styles from "./PropertyDetails.module.css";

export type PropertyDetailsType = {
  className?: string;
};

const PropertyDetails: FunctionComponent<PropertyDetailsType> = ({ property }) => {
  return (
    <>  
      <section className={styles.PropertyDetails}>
        <div className={styles.breadcrumb}>Home &gt; {property.city} &gt; {property.title}</div>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.name}>{property.title}</div>
            <div className={styles.location}>{property.city}</div>
          </div>
          <div className={styles.ratings}>
            <div className={styles.stars}><img src="/stars.svg"></img></div>
            <div className={styles.reviews}>4.0 (951 Reviews)</div>
          </div>
        </div>
        <div className={styles.details}>
          <img className={styles.propimage} src="/web14-1@2x.png"></img>
          <table className={styles.data}>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Type</td>
              <td className={styles.info}>{property.type}</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Status</td>
              <td className={styles.info}>{property.status}</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Purpose</td>
              <td className={styles.info}>{property.purpose}</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Area</td>
              <td className={styles.info}>{property.area}</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>BHK</td>
              <td className={styles.info}>{property.Bhk}</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Price</td>
              <td className={styles.info}>${property.price}</td>
            </tr>
          </table>
        </div>
      </section>

      
      <section className={styles.Gallery}>
          <div className={styles.heading}>Gallery</div>
          <div className={styles.images}>
              <img className={styles.image} src="/web16-2@2x.png"></img>
              <img className={styles.image} src="/web18-3@2x.png"></img>
              <img className={styles.image} src="/web21-1@2x.png"></img>
              <img className={styles.image} src="/web19-1@2x.png"></img>
              <img className={styles.image} src="/web17-1@2x.png"></img>
              <img className={styles.image} src="/web20-1@2x.png"></img>
          </div>
      </section>


      <section className={styles.Description}>
          <div className={styles.heading}>Description</div>
          <div className={styles.describe}>
              {property.description} <br/>
              {/* Welcome to our luxurious two-bedroom apartment, ideally situated in downtown's vibrant core. Boasting modern amenities, breathtaking city views facing east, and proximity to key landmarks such as Central Park and renowned dining spots. Perfect for discerning urbanites, offering convenience, culture, and a coveted lifestyle at your doorstep. */}
          </div>
      </section>


      <section className={styles.FacilitiesAmenities}>
        <div className={styles.heading}>Facilities and Amenities</div>
        <table className={styles.list}>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-5@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Elevator</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Library</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-8@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Laundry Room</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-11@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>24/7 CCTV Surveilance</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-7@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Reception</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-8@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-9@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Wifi Connectivity</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-10@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Basketball Court</td>
          </tr>
        </table>
      </section>


      <section className={styles.Location}>
          <div className={styles.heading}>Location</div>
          <div className={styles.address}>
              <img
                  className={styles.mapicon}
                  src="/image-13@2x.png"
              />
              {/* 1 Portal W North Acton, London, England W3 6BX */}
              <div className={styles.location}>{property.city }{property.location}</div>
          </div>
          <img className={styles.map} src="/location-on-map@2x.png"></img>
          {/* <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6175264627154!2d81.3139860785757!3d21.247010130068425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d6791e5f399%3A0xfb39e72b5f4501f5!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1719549093746!5m2!1sen!2sin" >    
          </iframe> */}
      </section>
    </>
  );
};

export default PropertyDetails;
