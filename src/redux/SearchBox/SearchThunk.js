export const searchSuggestionsThunk = async (url, searchTerm, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:5000/api/allproperty`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const properties = await response.json();
    // Filter properties to only include those with "buy" as the purpose
    const buyProperties = properties.filter(
      (property) => property.purpose === "sell"
    );
    return buyProperties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    // Optionally, you can return an empty array or a default value in case of an error
    return [];
  }
};

export const getFilteredPropertiesThunk = async (url, filters, ThunkAPI) => {
  const {
    city = "",
    propertyType = [],
    minArea = 0,
    maxArea = Infinity,
    minPrice = 0,
    maxPrice = Infinity,
  } = filters;
  console.log("filtrs");
  console.log(filters);
  console.log("url");
  console.log(filters.url);
  try {
    const response = await fetch(filters.url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const properties = await response.json();

    const filteredProperties = properties.filter((property) => {
      const isCityMatch = !city || property.city === city;
      const isPropertyTypeMatch =
        propertyType.length === 0 ||
        propertyType.includes(property.propertyType);
      const isAreaMatch = property.area >= minArea && property.area <= maxArea;
      const isPriceMatch =
        property.price >= minPrice && property.price <= maxPrice;

      return isCityMatch && isPropertyTypeMatch && isAreaMatch && isPriceMatch;
    });

    return filteredProperties;
    // return buyProperties;
    // return pr;
  } catch (error) {
    console.error("Error fetching properties:", error);
    // Optionally, you can return an empty array or a default value in case of an error
    return [];
  }
};

// export const getFilteredPropertiesThunk = async (
//   url,
//   filters,
//   purpose,
//   ThunkAPI
// ) => {
//   const {
//     city = "",
//     propertyType = [],
//     minArea = 0,
//     maxArea = Infinity,
//     minPrice = 0,
//     maxPrice = Infinity,
//   } = filters;

//   console.log("filters");
//   console.log(filters);
//   console.log("purpose");
//   console.log(purpose);

//   try {
//     const response = await fetch(
//       `http://localhost:5000/api/allproperty?purpose=${purpose}`
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const properties = await response.json();

//     const filteredProperties = properties.filter((property) => {
//       const isCityMatch = !city || property.city === city;
//       const isPropertyTypeMatch =
//         propertyType.length === 0 ||
//         propertyType.includes(property.propertyType);
//       const isAreaMatch = property.area >= minArea && property.area <= maxArea;
//       const isPriceMatch =
//         property.price >= minPrice && property.price <= maxPrice;

//       return isCityMatch && isPropertyTypeMatch && isAreaMatch && isPriceMatch;
//     });

//     return filteredProperties;
//   } catch (error) {
//     console.error("Error fetching properties:", error);
//     return [];
//   }
// };
