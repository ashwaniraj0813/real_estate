import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import PropertiesListCard from "./PropertiesListCard";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProperties } from "../../redux/SearchBox/SearchSlice";

const PropertiesListSection = () => {
  const {
    budgetRange,
    propertyType,
    area,
    city,
    properties,
    searchOption,
    isPropertyLoading,
  } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // Extract complex expressions
  const minPrice = budgetRange[0];
  const maxPrice = budgetRange[1];
  const minArea = area[0];
  const maxArea = area[1];


  useEffect(() => {
    const filters = {
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      City: city,
      PropertyType: propertyType,
    };
    dispatch(getFilteredProperties(filters));
  }, [minPrice, maxPrice, minArea, maxArea, city, propertyType, dispatch]);

  console.log(properties);
  console.log(propertyType);

  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: 600,
          color: "#091E42",
          fontFamily: "Open Sans",
        }}
      >
        {properties.length} results | Property for {searchOption} in{" "}
        {city.address === undefined ? "India" : city.address}
      </Typography>

      {isPropertyLoading ? (
        <CircularProgress />
      ) : (
        properties.map((property) => (
          <React.Fragment key={property.propertyId}>
            <PropertiesListCard property={property} />
          </React.Fragment>
        ))
      )}
    </Box>
  );
};

export default PropertiesListSection;
