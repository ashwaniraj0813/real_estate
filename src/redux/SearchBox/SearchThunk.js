export const searchSuggestionsThunk = async (url, searchTerm, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:5000/api/allproperty`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const properties = await response.json();
    // Filter properties to only include those with "buy" as the purpose
    const buyProperties = properties.filter(
      (property) => property.purpose === "buy"
    );
    return buyProperties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    // Optionally, you can return an empty array or a default value in case of an error
    return [];
  }
};

export const getFilteredPropertiesThunk = async (url, filters, ThunkAPI) => {
  // const sampleProperties = [
  //   {
  //     address: "123 Maple Street",
  //     city: "Springfield",
  //     state: "Illinois",
  //     price: 2500000,
  //     propertyArea: 1800, // in square feet
  //     propertyName: "Maple Villa",
  //     imageProperty:
  //       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     propertyId: "12345",
  //     contactNo: "+1 555-1234",
  //     email: "owner@example.com",
  //     propertyOptions: "rent",
  //     propertyType: "apartment",
  //   },
  // {
  //   address: "456 Oak Avenue",
  //   city: "Metropolis",
  //   state: "New York",
  //   price: 3500000,
  //   propertyArea: 2200,
  //   propertyName: "Oak Residences",
  //   imageProperty:
  //     "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   propertyId: "67890",
  //   contactNo: "+1 555-5678",
  //   email: "owner2@example.com",
  //   propertyOptions: "sale",
  //   propertyType: "house",
  // },

  // Add more sample properties if needed
  // ];

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
  try {
    const response = await fetch(`http://localhost:5000/api/allproperty`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const properties = await response.json();

    // First filter properties with "buy" as the purpose
    const buyProperties = properties.filter(
      (property) => property.purpose.toLowerCase() === "buy"
    );

    const filteredProperties = buyProperties.filter((property) => {
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
  } catch (error) {
    console.error("Error fetching properties:", error);
    // Optionally, you can return an empty array or a default value in case of an error
    return [];
  }
};
