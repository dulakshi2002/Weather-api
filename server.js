const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");//module to load environment variables from a .env file

const app = express(); //initialize express application
require("dotenv").config(); 

//port configuration
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//mongoDB connection URL
const URL = process.env.MONGODB_URL;

//connect to monogoDB using mongoose
mongoose.connect(URL, 
)

//Connection Success process
const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection Success!");
})

//import routes
const userRouter = require("./routes/users.js");

http://localhost:8070/user

app.get("/weather", (req, res) =>{
    res.send("Weather");
})

app.use("/user", userRouter);

//start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port no: ${PORT}`)
})

