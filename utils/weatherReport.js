const axios = require('axios');
require('dotenv').config();

const generateWeatherText = async (weatherData) => {
  const response = await axios.post(
    'https://api.openai.com/v1/engines/davinci-codex/completions',
    {
      prompt: `Generate a weather report for: ${JSON.stringify(weatherData)}`,
      max_tokens: 100,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
  return response.data.choices[0].text;
};

module.exports = generateWeatherText;
