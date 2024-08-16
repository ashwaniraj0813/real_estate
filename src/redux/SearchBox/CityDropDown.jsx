import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { handleSearchCity, updateFilters } from './SearchSlice';

const CityDropdown = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.search.city);
  const cities = ['Bhopal', 'Hyderabad','Patna', 'Pune','Chennai','Bhilai', 'Kolkata', 'Dholakpur','Mumbai','None']; // Add your city list here

  const handleChange = (event) => {
    const city = event.target.value;
    dispatch(handleSearchCity(city)); // Updates the Redux state with the selected city

    // Dispatch updateFilters to send the complete filter object to the backend
    dispatch(updateFilters({ city }));
  };
  

return (
    <FormControl fullWidth>
      <InputLabel>City</InputLabel>
      <Select
        value={selectedCity}
        onChange={handleChange}
        label="City"
      >
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CityDropdown;
