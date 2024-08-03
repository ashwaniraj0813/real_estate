import React, { useState, useEffect } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";




const PropertiesListCard = ({ property }) => {
  const imageProperty="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  
 
  const [bhk, setbhk] = useState();
  const {
    address,
    city,
    price,
    area,
    title,
    propertyOptions,
    propertyType,
  } = property;
 


  useEffect(() => {
    if (area < 750) {
      setbhk(1);
    } else if (area >= 750 && area < 1500) {
      setbhk(2);
    } else if (area >= 1500 && area < 2500) {
      setbhk(3);
    } else if (area >= 2500 && area < 4000) {
      setbhk(4);
    } else if (area >= 4000 && area < 5400) {
      setbhk(5);
    } else if (area >= 5400 && area < 7000) {
      setbhk(6);
    } else if (area >= 7000) {
      setbhk(7);
    }
  }, [area]);

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          mt: 3,
          mb: 5,
          borderRadius: 2,
          boxShadow: "0 3px 8px 0 rgba(0,106,194,.2)",
          position: "relative",
        }}
      >
        <img
          src={
            imageProperty === null
              ? "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              : imageProperty
          }
          alt="propertyTemp"
          style={{
            borderRadius: 8,
            width: "358px",
            height: "386px",
            objectFit: "cover",
          }}
        />
        <Paper
          variant="outlined"
          sx={{
            position: "absolute",
            right: 0,
            borderRadius: "8px 0px 0px 8px",
            width: "556px",
            padding: "30px 24px",
            top: 0,
            bottom: 0,
            margin: "auto",
            height: "356px",
            border: "none",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "20px",
                cursor: "pointer",
              }}
            >
              {bhk} BHK Serviced {propertyType} for {propertyOptions} in{" "}
              {address}, {city}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 700,
                mt: 1,
                color: "#091E42",
                cursor: "pointer",
              }}
            >
              {title}
            </Typography>
            <Box sx={{ mt: 1, display: "flex", gap: 8, cursor: "pointer" }}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    ₹
                    {price >= 1000000
                      ? (price / 1000000).toFixed(1) + "L"
                      : price >= 1000
                      ? (price / 1000).toFixed(1) + "K"
                      : price.toString()}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#42526e",
                    }}
                  >
                    /month
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  Desposit 2 month(s) rent
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    {area}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 400,
                      color: "#42526e",
                    }}
                  >
                    sq.ft.
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  ({(area * 0.092903).toFixed(1)} sq.m.) Super built-up Area
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "20px",
                      lineHeight: "28px",
                      fontWeight: 600,
                      color: "#091E42",
                    }}
                  >
                    {bhk} BHK
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 400,
                    color: "#8993a4",
                  }}
                >
                  {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk} Baths
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: "Open Sans",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                mt: 4,
                color: "#091E42",
                mr: 4,
              }}
            >
              Amazing {bhk} bedroom{" "}
              {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk} bathroom{" "}
              {propertyType} in {title} located in {address}, {city}, .
              Utilities include Cable, High Speed Fiber Internet, Electricity,
              Water Tank and Complete Power Backup and Gas also have{" "}
              {bhk > 3 ? (bhk > 5 ? bhk - 2 : bhk - 1) : bhk} Balcony, {bhk}{" "}
              Wardrobe, {bhk + 1} Fan, in a pet-friendly society. All Rooms are
              spacious and properly ventilated. Construction Quality is also
              High End with High Quality Fittings.
            </Typography>
            <Divider sx={{ mt: 2, background: "rgba(0,0,0,0.15)" }} />
            <Box sx={{ mt: 0.5, display: "flex", justifyContent: "flex-end" }}>
              <Button
                disableRipple
                sx={{
                  padding: "8px 16px",
                  textTransform: "none",
                  fontFamily: "Open Sans",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "#0078db",
                  mr: 1,
                  ":hover": {
                    background:"#006ac2",
                  },
                }}
              >
                View Phone Number
              </Button>
              <Button
                disableRipple
                variant="contained"
                sx={{
                  padding: "8px 16px",
                  textTransform: "none",
                  fontFamily: "Open Sans",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "#0078db",
                  ":hover": {
                    background: "#006ac2",
                  },
                }}
              >
                Contact Owner
              </Button>
            </Box>
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

export default PropertiesListCard;
