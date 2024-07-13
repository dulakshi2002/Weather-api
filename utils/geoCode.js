const axios = require('axios');
require('dotenv').config();

const getCityFromCoordinates = async (lat, lon) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.GOOGLE_API_KEY}`
  );
  const city = response.data.results[0].address_components.find(
    (component) => component.types.includes('locality')
  ).long_name;
  return city;
};

module.exports = getCityFromCoordinates;
