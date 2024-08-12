import React, { FunctionComponent, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./NavSearch.module.css";

export type NavSearchProps = {};

const NavSearch: FunctionComponent<NavSearchProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterListVisible, setIsFilterListVisible] = useState(false);

  const handlesearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(
      `/SearchPropertiesNavbar?query=${encodeURIComponent(searchQuery)}`
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const toggleFilterListVisibility = () => {
    setIsFilterListVisible(!isFilterListVisible);
  };

  return (
    <form className={styles.searchBar} onSubmit={handlesearch}>
      <div className={styles.filter}>
        <div
          className={styles.dropdownfilter}
          onClick={toggleFilterListVisibility}
        >
          All Residential{" "}
          <span
            className={`${styles.rotate} ${
              isFilterListVisible ? styles.rotated : ""
            }`}
          >
            ▼
          </span>
        </div>
        <div
          className={`${styles.filterlist} ${
            isFilterListVisible ? styles.visible : ""
          }`}
        >
          <div className={`${styles.column}`}>
            <input
              type="checkbox"
              id="flat"
              name="flat"
              value="flat"
              defaultChecked={true}
              className={`${styles.filterElement}`}
            />
            <label htmlFor="flat">Flat/Apartment</label> <br />
            <input
              type="checkbox"
              id="independent"
              name="independent"
              value="independent"
              defaultChecked={true}
              className={`${styles.filterElement}`}
            />
            <label htmlFor="independent">Independent/Builder Floor</label>{" "}
            <br />
            <input
              type="checkbox"
              id="residentialLand"
              name="residentialLand"
              value="residentialLand"
              defaultChecked={true}
              className={`${styles.filterElement}`}
            />
            <label htmlFor="residentialLand">Residential Land</label>
            <br />
          </div>
          <div>
            <input
              type="checkbox"
              id="studioApartment"
              name="studioApartment"
              value="studioApartment"
              defaultChecked={true}
              className={`${styles.filterElement}`}
            />
            <label htmlFor="studioApartment">Studio Apartment</label> <br />
            <input
              type="checkbox"
              id="farmHouse"
              name="farmHouse"
              value="farmHouse"
              defaultChecked={true}
              className={`${styles.filterElement}`}
            />
            <label htmlFor="farmHouse">Farm House</label>
            <br />
            <input
              type="checkbox"
              id="servicedApartments"
              name="servicedApartments"
              value="servicedApartments"
              defaultChecked={true}
              className={`${styles.filterElement}`}
            />
            <label htmlFor="servicedApartments">Serviced Apartments</label>
            <br />
          </div>
        </div>
      </div>
      <img
        className={styles.searchicon}
        src="/icbaselinesearch1.svg"
        alt="search icon"
      />
      <input
        className={styles.searchinput}
        placeholder="Enter City / Type / No of Bhk needed.."
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default NavSearch;
