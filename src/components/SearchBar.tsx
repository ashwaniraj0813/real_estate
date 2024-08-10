import React from "react";
import style from "./searchbar.module.css";
import { GoSearch } from "react-icons/go";
import {
  Box,
  Flex,
  Grid,
  Image,
  Select,
  Text,
  Button,
  Input,
  Circle,
} from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  const [selectedOpt, setSelectedOpt] = React.useState("Buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [city, selectcity] = useState("");
  const navigate = useNavigate();

  const handlesearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = `city=${encodeURIComponent(city)}&query=${encodeURIComponent(
      searchQuery
    )}`;
    navigate(`/property-listings-page?${query}`);
    encodeURIComponent("");
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    selectcity(selectedCity);
    setSearchQuery("");
  };

  return (
    <Box>
      <Box className={style.homepageContainer} padding={0}>
        <Grid className={style.buyRent}>
          <Box
            onClick={() => setSelectedOpt("Buy")}
            style={
              selectedOpt === "Buy"
                ? { borderBottom: "3px solid #fd3752", color: "#fd3752" }
                : { borderBottom: "0px solid" }
            }
          >
            <Link to="/buy">Buy</Link>
          </Box>
          <Box
            onClick={() => setSelectedOpt("Rent")}
            style={
              selectedOpt === "Rent"
                ? { borderBottom: "3px solid #fd3752", color: "#fd3752" }
                : { borderBottom: "0px solid" }
            }
          >
            <Link to="/properties/rent">Rent</Link>
          </Box>
        </Grid>
        <form onSubmit={handlesearch} style={{ padding: 0 }}>
          <Flex
            className={style.searchBox}
            padding={0}
            flexDirection={["column", "column", "row"]}
          >
            <Box width={["100%", "100%", "auto"]} mb={[4, 4, 0]}>
              <Select
                placeholder="Select a city"
                size="lg"
                width={["100%", "100%", "180px"]}
                focusBorderColor="purple"
                onChange={handleCityChange}
              >
                {/* Options... */}
              </Select>
            </Box>
            <Box className={style.searchInput} flex="1" mb={[4, 4, 0]}>
              <Input
                placeholder={`Search properties in ${city || "City"}`}
                onChange={handleSearchChange}
                value={searchQuery}
                width="100%"
              />
            </Box>
            <Box width={["100%", "100%", "auto"]}>
              <Button
                type="submit"
                leftIcon={<GoSearch />}
                bgColor="#fd3752"
                variant="solid"
                color="white"
                className={style.searchButton}
                width={["100%", "100%", "180px"]}
              >
                Search
              </Button>
            </Box>
          </Flex>
        </form>
      </Box>
    </Box>
  );
}

export default Homepage;
