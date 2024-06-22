import { FunctionComponent } from "react";
import ImageInput from "./ImageInput";
import FrameComponent from "./FrameComponent2";
import styles from "./ListingForm.module.css";

export type ListingFormType = {
  className?: string;
};

const ListingForm: FunctionComponent<ListingFormType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.listingForm, className].join(" ")}>
      <div className={styles.header}>
        <h1 className={styles.rentYourProperty}>Rent your property</h1>
      </div>
      <div className={styles.imageUpload}>
        <ImageInput />
        <div className={styles.propertyDetails}>
          <div className={styles.bathFurnish}>
            <div className={styles.propertyName}>
              <div className={styles.nameLabel}>
                <div className={styles.propertyName1}>Property name*</div>
              </div>
              <div className={styles.nameValue}>
                <div className={styles.nameValueChild} />
                <input
                  className={styles.propertyName2}
                  placeholder="property name"
                  type="text"
                />
              </div>
              <div className={styles.locationInput}>
                <div className={styles.location}>Location*</div>
                <div className={styles.locationValue}>
                  <img
                    className={styles.locationValueChild}
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
            <div className={styles.typeStatusBedrooms}>
              <div className={styles.typeStatus}>
                <div className={styles.typeStatusInputs}>
                  <div className={styles.frameParent}>
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
                  <div className={styles.frameGroup}>
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
                  <div className={styles.frameContainer}>
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
                  <div className={styles.priceInput}>
                    <div className={styles.price}>Price*</div>
                  </div>
                </div>
                <div className={styles.bathroomFurnishing}>
                  <div className={styles.bathroomFurnishingInputs}>
                    <FrameComponent
                      bathroom="Bathroom*"
                      bathroomPlaceholder="Bathroom"
                    />
                    <FrameComponent
                      bathroom="Furnishing*"
                      bathroomPlaceholder="Furnishing"
                      propBorderRadius="unset"
                      propPadding="var(--padding-5xs) var(--padding-5xs) var(--padding-xs)"
                      propBorderRadius1="unset"
                      propWidth="82px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.typeStatusBedroomsInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-6.svg"
                  />
                  <input
                    className={styles.price1}
                    placeholder="Price"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.descriptionInput}>
                <div className={styles.descriptionLabel}>
                  <div className={styles.description}>Description</div>
                </div>
                <textarea
                  className={styles.descriptionValue}
                  placeholder="Description"
                  rows={4}
                  cols={34}
                />
              </div>
            </div>
            <div className={styles.amenitiesInput}>
              <div className={styles.amenitiesLabel}>
                <div className={styles.amenities}>Amenities*</div>
              </div>
              <div className={styles.amenitiesValue}>
                <img
                  className={styles.amenitiesValueChild}
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
            <div className={styles.contactInfo}>
              <div className={styles.phoneMailInputs}>
                <div className={styles.phoneInput}>
                  <div className={styles.additionalPhone}>
                    Additional Phone*
                  </div>
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
              <div className={styles.phoneMailInputs1}>
                <div className={styles.additionalMail}>Additional mail*</div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleDiv} />
                  <input
                    className={styles.additionalMail1}
                    placeholder="Additional mail"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingForm;
