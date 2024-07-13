const axios = require("axios");
require('dotenv').config();

const openWeatherMap = {
  BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
  SECRET_KEY: "7f97b8fff913a36080f39bf1f7ec433c",
};

const weatherData = async (address, callback) => {
  const url =
    openWeatherMap.BASE_URL +
    encodeURIComponent(address) +
    "&APPID=" +
    openWeatherMap.SECRET_KEY;
  console.log(url);
  try {
    const response = await axios.get(url);
    callback(false, response.data);
  } catch (error) {
    callback(true, "Unable to fetch data, Please try again. " + error.message);
  }
};

module.exports = weatherData;
