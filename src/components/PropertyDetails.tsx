import { FunctionComponent } from "react";
import styles from "./PropertyDetails.module.css";

export type PropertyDetailsType = {
  className?: string;
};

const PropertyDetails: FunctionComponent<PropertyDetailsType> = ({
  className = "",
}) => {
  return (
    <>
      <section className={styles.PropertyDetails}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.name}>Property Name</div>
            <div className={styles.location}>City</div>
          </div>
          <div className={styles.ratings}>
            <div className={styles.stars}>X X X X X</div>
            <div className={styles.reviews}>xyz Reviews</div>
          </div>
        </div>
        <div className={styles.details}>
          <img className={styles.propimage} src="/web14-1@2x.png"></img>
          <table className={styles.data}>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Type</td>
              <td className={styles.info}>Data</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Status</td>
              <td className={styles.info}>Data</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Purpose</td>
              <td className={styles.info}>Data</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Area</td>
              <td className={styles.info}>Data</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>BHK</td>
              <td className={styles.info}>Data</td>
            </tr>
            <tr className={styles.datarow}>
              <td className={styles.basis}>Price</td>
              <td className={styles.info}>Data</td>
            </tr>
          </table>
        </div>
      </section>

      
      <section className={styles.Gallery}>
          <div className={styles.heading}>Gallery</div>
          <div className={styles.images}>
              <img className={styles.image} src="/web18-3@2x.png"></img>
              <img className={styles.image} src="/web18-3@2x.png"></img>
              <img className={styles.image} src="/web18-3@2x.png"></img>
              <img className={styles.image} src="/web18-3@2x.png"></img>
              <img className={styles.image} src="/web18-3@2x.png"></img>
              <img className={styles.image} src="/web18-3@2x.png"></img>
          </div>
      </section>


      <section className={styles.Description}>
          <div className={styles.heading}>Description</div>
          <div className={styles.describe}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odit aliquid amet repellendus nostrum accusantium, laborum doloremque laudantium debitis accusamus natus autem quae, quaerat quisquam asperiores voluptatum fugit ea non voluptas officiis excepturi suscipit molestias reiciendis! Laborum exercitationem aliquam dolor eligendi odit quasi ex rem! Iure ipsam ipsa dolores. Unde, molestias deleniti quidem natus molestiae nulla error ad enim accusamus assumenda quos voluptatibus laborum. Totam modi atque unde possimus ea, iste deserunt saepe laborum aperiam libero, doloremque eveniet veritatis molestias fugit quam expedita, consequatur voluptate. Magnam accusamus exercitationem, mollitia placeat harum consequatur, nostrum laudantium omnis assumenda ratione quam eos amet.
          </div>
      </section>


      <section className={styles.FacilitiesAmenities}>
        <div className={styles.heading}>Facilities and Amenities</div>
        <table className={styles.list}>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
          </tr>
          <tr className={styles.datarowfa}>
            <td className={styles.itemimg}>
              <img className={styles.img} src="/image-61@2x.png" alt="Image" />
            </td>
            <td className={styles.facilityamenity}>Lorem, ipsum dolor.</td>
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
              Address Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?
          </div>
          <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6175264627154!2d81.3139860785757!3d21.247010130068425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d6791e5f399%3A0xfb39e72b5f4501f5!2sIndian%20Institute%20of%20Technology%20Bhilai!5e0!3m2!1sen!2sin!4v1719549093746!5m2!1sen!2sin" >    
          </iframe>
      </section>
    </>
  );
};

export default PropertyDetails;
