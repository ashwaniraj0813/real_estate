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

function Homepage() {
    const [selectedOpt, setSelectedOpt] = React.useState("Buy");
    return (
        <Box>
            <Box className={style.homepageContainer}>
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
                        <Link to="/rent">Rent</Link>
                    </Box>
                    <Box
                        onClick={() => setSelectedOpt("Commercial")}
                        style={
                            selectedOpt === "Commercial"
                                ? { borderBottom: "3px solid #fd3752", color: "#fd3752" }
                                : { borderBottom: "0px solid" }
                        }
                    >
                        <Link to="/commercial">Commercial</Link>
                    </Box>
                </Grid>
                <Flex className={style.searchBox}>
                    <Box>
                        <Select
                            placeholder="Select a city"
                            size="lg"
                            w={"180px"}
                            focusBorderColor="red"
                        >
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Pune">Pune</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Noida">Noida</option>
                            <option value="Greater Noida">Greater Noida</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                            <option value="Faridabad">Faridabad</option>
                        </Select>
                    </Box>
                    <Box className={style.searchInput}>
                        <Input placeholder="Search upto 3 localities or landmarks" />
                    </Box>
                    <Box>
                        <Button
                            leftIcon={<GoSearch />}
                            bgColor="#fd3752"
                            variant="solid"
                            color="white"
                            className={style.searchButton}
                        >
                            Search
                        </Button>
                    </Box>
                </Flex>
                <Flex className={style.filterBox}>
                    <Routes>
                        {/* <Route path="/buy" element={<BuyOption />} />
                        <Route path="/rent" element={<RentOption />} />
                        <Route path="/commercial" element={<CommercialOption />} /> */}
                    </Routes>
                </Flex>
            </Box>
            <Flex
                m="20px auto"
                w="100%"
                justifyContent="center"
                alignItems="center"
                gap={3}
            >
                <Text w="60px" h="1px" bgColor="#ccc"></Text>
                <Text>"Discover Homes"</Text>
                <Text w="60px" h="1px" bgColor="#ccc"></Text>
            </Flex>

        </Box>
    );
}

export default Homepage;
