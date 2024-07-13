const router = require("express").Router();
let User = require("../models/User");
const weatherData = require("../utils/weather");

// Create -> POST Method
router.route("/add").post((req, res) => {
    const { Name, Email, Location, Date, Time } = req.body;
  
    // Fetch weather data for the given location
    weatherData(Location, (error, weatherResponse) => {
        if (error) {
            return res.status(400).json("Error: Unable to fetch weather data. " + weatherResponse);
        }
      
        // Extract weather data
        const Weather = weatherResponse;
      
        // Create a new user object with the weather data
        const newUser = new User({
            Name,
            Email,
            Location,
            Date,
            Time,
            WeatherData: Weather
        });
      
        // Save the new user object to the database
        newUser
            .save()
            .then(() => {
                res.json("User Saved");
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json("Error: " + err);
            });
    });
});

// Read -> GET Method
router.route("/").get((req, res) => {
    User.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("Error: " + err);
    });
});

// Update user's location
router.post('/update-location', async (req, res) => {
    const { email, newLocation } = req.body;
    try {
      const weather = await weatherData(newLocation);
      const user = await User.findOneAndUpdate(
        { email },
        { location: newLocation, weatherData: weather },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
});

// Retrieve weather data for a given day
router.get('/weather/:email', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.params.email });
      res.json(user.weatherData);
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
