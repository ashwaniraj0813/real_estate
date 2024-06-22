import { FunctionComponent } from "react";
import styles from "./TypeStatusOptions.module.css";

export type TypeStatusOptionsType = {
  className?: string;
};

const TypeStatusOptions: FunctionComponent<TypeStatusOptionsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.typeStatusOptions, className].join(" ")}>
      <div className={styles.propertyDetailsContent}>
        <div className={styles.propertyNameWrapper}>
          <div className={styles.propertyName}>Property name*</div>
        </div>
        <div className={styles.propertyNameInput}>
          <div className={styles.propertyNameInputChild} />
          <input
            className={styles.propertyName1}
            placeholder="property name"
            type="text"
          />
        </div>
        <div className={styles.locationParent}>
          <div className={styles.location}>Location*</div>
          <div className={styles.locationInput}>
            <img
              className={styles.locationInputChild}
              alt=""
              src="/rectangle-6.svg"
            />
            <input
              className={styles.location1}
              placeholder="location"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.propertyOptionsContentParent}>
        <div className={styles.propertyOptionsContent}>
          <div className={styles.primaryOptions}>
            <div className={styles.primaryOptionButtons}>
              <div className={styles.typeWrapper}>
                <div className={styles.type}>Type*</div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <input
                  className={styles.type1}
                  placeholder="Type"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.primaryOptionButtons1}>
              <div className={styles.statusWrapper}>
                <div className={styles.status}>Status*</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <input
                  className={styles.status1}
                  placeholder="Status"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.primaryOptionButtons2}>
              <div className={styles.bedroomsWrapper}>
                <div className={styles.bedrooms}>Bedrooms*</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <input
                  className={styles.bedrooms1}
                  placeholder="Bedrooms"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>Price*</div>
            </div>
          </div>
          <div className={styles.secondaryOptions}>
            <div className={styles.secondaryOptionButtons}>
              <div className={styles.listingContent}>
                <div className={styles.area}>Area*</div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleDiv} />
                  <input
                    className={styles.area1}
                    placeholder="Area"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.listingHeader}>
                <div className={styles.furnishing}>Furnishing*</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <input
                    className={styles.furnishing1}
                    placeholder="Furnishing"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.bathroomsParent}>
                <div className={styles.bathrooms}>Bathrooms*</div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild2} />
                  <input
                    className={styles.bathroom}
                    placeholder="Bathroom"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceInputLabelParent}>
          <div className={styles.priceInputLabel}>
            <img
              className={styles.priceInputLabelChild}
              alt=""
              src="/rectangle-6.svg"
            />
            <input className={styles.price1} placeholder="Price" type="text" />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.descriptionWrapper}>
              <div className={styles.description}>Description</div>
            </div>
            <textarea
              className={styles.descriptionInput}
              placeholder="Description"
              rows={4}
              cols={34}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.amenitiesWrapper}>
          <div className={styles.amenities}>Amenities*</div>
        </div>
        <div className={styles.amenitiesInput}>
          <img
            className={styles.amenitiesInputChild}
            alt=""
            src="/rectangle-6.svg"
          />
          <input
            className={styles.amenities1}
            placeholder="Amenities"
            type="text"
          />
        </div>
      </div>
      <div className={styles.contactInputsParent}>
        <div className={styles.contactInputs}>
          <div className={styles.phoneInput}>
            <div className={styles.additionalPhone}>Additional Phone*</div>
          </div>
          <div className={styles.mailInput}>
            <div className={styles.mailInputChild} />
            <input
              className={styles.additionalPhone1}
              placeholder="Additional Phone"
              type="text"
            />
          </div>
        </div>
        <div className={styles.contactInputs1}>
          <div className={styles.additionalMail}>Additional mail*</div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild3} />
            <input
              className={styles.additionalMail1}
              placeholder="Additional mail"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeStatusOptions;
