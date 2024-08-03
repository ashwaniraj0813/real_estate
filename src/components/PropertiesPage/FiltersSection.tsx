import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  handleWithPhotos,
  handleAmenities,
  handleConstructionStatus,
  handleArea,
  handleBudgetRange,
  handleNoOfBedrooms,
  handlePropertyType,
  handleReraApproved,
  handleVerifiedProperties,
  handlePostedBy,
  handleFurnitureType,
  handlePurchaseType,
} from "../../redux/SearchBox/SearchSlice";

const noOfBedroomsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const propertyTypeList = ["Flat", "Villa", "Land"];
const amenitiesList = ["Gym", "Swimming Pool", "Garden", "Play Area"];
const constructionStatusList = [
  "Under Construction",
  "Ready to Move",
  "New Launch",
];
const postedByList = ["Owner", "Agent", "Builder"];
const furnitureTypeList = ["Furnished", "Semi-Furnished", "Unfurnished"];
const purchaseTypeList = ["New", "Resale"];

const FiltersSection = () => {
  const {
    noOfBedrooms,
    propertyType,
    withPhotos,
    expanded,
    amenities,
    constructionStatus,
    budgetRange,
    area,
    reraApproved,
    verifiedProperties,
    postedBy,
    furnitureType,
    purchaseType,
  } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const handleSliderChange = (name, newValue) => {
    if (name === "budgetRange") {
      dispatch(handleBudgetRange(newValue));
    } else if (name === "area") {
      dispatch(handleArea(newValue));
    }
  };
//abc
  return (
    <Paper variant="outlined" sx={{ padding: "24px 20px", borderRadius: 2 }}>
      <Box>
        <Accordion
          expanded={expanded.includes("panel1") ? true : false}
          onChange={() => dispatch(handleChange("panel1"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              No. of Bedrooms
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {noOfBedroomsList.map((room, idx) => (
              <Chip
                key={idx}
                label={`${room} BHK`}
                disableRipple
                variant={"outlined"}
                icon={noOfBedrooms.includes(room) ? <DoneIcon /> : <AddIcon />}
                onClick={() => dispatch(handleNoOfBedrooms(room))}
                sx={{
                  color: noOfBedrooms.includes(room) ? "#000" : "#42526E",
                  backgroundColor: noOfBedrooms.includes(room)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: noOfBedrooms.includes(room)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: noOfBedrooms.includes(room) ? 600 : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: noOfBedrooms.includes(room) ? "#0078db" : "#42526E",
                  },
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel2") ? true : false}
          onChange={() => dispatch(handleChange("panel2"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Type of Property
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {propertyTypeList.map((type, idx) => (
              <Chip
                key={idx}
                label={type}
                disableRipple
                variant={"outlined"}
                icon={propertyType.includes(type) ? <DoneIcon /> : <AddIcon />}
                onClick={() => dispatch(handlePropertyType(type))}
                sx={{
                  color: propertyType.includes(type) ? "#000" : "#42526E",
                  backgroundColor: propertyType.includes(type)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: propertyType.includes(type)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: propertyType.includes(type) ? 600 : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: propertyType.includes(type) ? "#0078db" : "#42526E",
                  },
                  mb: 1,
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel3") ? true : false}
          onChange={() => dispatch(handleChange("panel3"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Budget Range
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={budgetRange}
              onChange={(e, newValue) =>
                handleSliderChange("budgetRange", newValue)
              }
              valueLabelDisplay="auto"
              min={0}
              max={20000000}
              step={1000}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel4") ? true : false}
          onChange={() => dispatch(handleChange("panel4"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Area
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={area}
              onChange={(e, newValue) => handleSliderChange("area", newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={4000}
              step={10}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel5") ? true : false}
          onChange={() => dispatch(handleChange("panel5"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Amenities
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {amenitiesList.map((amenity, idx) => (
              <Chip
                key={idx}
                label={amenity}
                disableRipple
                variant={"outlined"}
                icon={amenities.includes(amenity) ? <DoneIcon /> : <AddIcon />}
                onClick={() => dispatch(handleAmenities(amenity))}
                sx={{
                  color: amenities.includes(amenity) ? "#000" : "#42526E",
                  backgroundColor: amenities.includes(amenity)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: amenities.includes(amenity)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: amenities.includes(amenity) ? 600 : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: amenities.includes(amenity) ? "#0078db" : "#42526E",
                  },
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel6") ? true : false}
          onChange={() => dispatch(handleChange("panel6"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Construction Status
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {constructionStatusList.map((status, idx) => (
              <Chip
                key={idx}
                label={status}
                disableRipple
                variant={"outlined"}
                icon={
                  constructionStatus.includes(status) ? (
                    <DoneIcon />
                  ) : (
                    <AddIcon />
                  )
                }
                onClick={() => dispatch(handleConstructionStatus(status))}
                sx={{
                  color: constructionStatus.includes(status)
                    ? "#000"
                    : "#42526E",
                  backgroundColor: constructionStatus.includes(status)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: constructionStatus.includes(status)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: constructionStatus.includes(status) ? 600 : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: constructionStatus.includes(status)
                      ? "#0078db"
                      : "#42526E",
                  },
                  mb: 1,
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel7")}
          onChange={() => dispatch(handleChange("panel7"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Posted By
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {postedByList.map((postedByItem, idx) => (
              <Chip
                key={idx}
                label={postedByItem}
                disableRipple
                variant={"outlined"}
                icon={
                  postedBy.includes(postedByItem) ? <DoneIcon /> : <AddIcon />
                }
                onClick={() => dispatch(handlePostedBy(postedByItem))}
                sx={{
                  color: postedBy.includes(postedByItem) ? "#000" : "#42526E",
                  backgroundColor: postedBy.includes(postedByItem)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: postedBy.includes(postedByItem)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: postedBy.includes(postedByItem) ? 600 : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: postedBy.includes(postedByItem)
                      ? "#0078db"
                      : "#42526E",
                  },
                  mb: 1,
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel8")}
          onChange={() => dispatch(handleChange("panel8"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Furniture Type
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {furnitureTypeList.map((furnitureTypeItem, idx) => (
              <Chip
                key={idx}
                label={furnitureTypeItem}
                disableRipple
                variant={"outlined"}
                icon={
                  furnitureType.includes(furnitureTypeItem) ? (
                    <DoneIcon />
                  ) : (
                    <AddIcon />
                  )
                }
                onClick={() => dispatch(handleFurnitureType(furnitureTypeItem))}
                sx={{
                  color: furnitureType.includes(furnitureTypeItem)
                    ? "#000"
                    : "#42526E",
                  backgroundColor: furnitureType.includes(furnitureTypeItem)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: furnitureType.includes(furnitureTypeItem)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: furnitureType.includes(furnitureTypeItem)
                    ? 600
                    : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: furnitureType.includes(furnitureTypeItem)
                      ? "#0078db"
                      : "#42526E",
                  },
                  mb: 1,
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes("panel9")}
          onChange={() => dispatch(handleChange("panel9"))}
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            >
              Purchase Type
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {purchaseTypeList.map((purchaseTypeItem, idx) => (
              <Chip
                key={idx}
                label={purchaseTypeItem}
                disableRipple
                variant={"outlined"}
                icon={
                  purchaseType.includes(purchaseTypeItem) ? (
                    <DoneIcon />
                  ) : (
                    <AddIcon />
                  )
                }
                onClick={() => dispatch(handlePurchaseType(purchaseTypeItem))}
                sx={{
                  color: purchaseType.includes(purchaseTypeItem)
                    ? "#000"
                    : "#42526E",
                  backgroundColor: purchaseType.includes(purchaseTypeItem)
                    ? "#f0f9ff"
                    : "#fff",
                  borderColor: purchaseType.includes(purchaseTypeItem)
                    ? "#a3daff"
                    : "#42526E",
                  fontWeight: purchaseType.includes(purchaseTypeItem)
                    ? 600
                    : 400,
                  "& .MuiChip-icon": {
                    fontFamily: "Open Sans",
                    fontSize: "14px",
                    color: purchaseType.includes(purchaseTypeItem)
                      ? "#0078db"
                      : "#42526E",
                  },
                  mb: 1,
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <FormControl component="fieldset" sx={{ mt: 2, width: "100%" }}>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              control={
                <Switch
                  checked={withPhotos}
                  onChange={() => dispatch(handleWithPhotos())}
                  name="withPhotos"
                  color="primary"
                />
              }
              label="With Photos"
              labelPlacement="end"
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={reraApproved}
                  onChange={() => dispatch(handleReraApproved())}
                  name="reraApproved"
                  color="primary"
                />
              }
              label="RERA Approved"
              labelPlacement="end"
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={verifiedProperties}
                  onChange={() => dispatch(handleVerifiedProperties())}
                  name="verifiedProperties"
                  color="primary"
                />
              }
              label="Verified Properties"
              labelPlacement="end"
              sx={{
                color: "#091E42",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                fontFamily: "Open Sans",
              }}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default FiltersSection;
