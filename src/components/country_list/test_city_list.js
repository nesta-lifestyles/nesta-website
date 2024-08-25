import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import axios from 'axios';

const CitySearch = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    
    if (place.address_components) {
      const addressComponents = place.address_components;
      
      const city = addressComponents.find(component => component.types.includes('locality'));
      const state = addressComponents.find(component => component.types.includes('administrative_area_level_1'));
      const country = addressComponents.find(component => component.types.includes('country'));
      
      setCity(city ? city.long_name : '');
      setState(state ? state.long_name : '');
      setCountry(country ? country.long_name : '');
    }
  };

  return (
    <div>
      <Autocomplete
        onLoad={(autocomplete) => setAutocomplete(autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder="Enter city name"
          className="city-input"
        />
      </Autocomplete>

      <div>
        <label>City: </label>
        <input type="text" value={city} readOnly />
      </div>
      <div>
        <label>State: </label>
        <input type="text" value={state} readOnly />
      </div>
      <div>
        <label>Country: </label>
        <input type="text" value={country} readOnly />
      </div>
    </div>
  );
};

export default CitySearch;