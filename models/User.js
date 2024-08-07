const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the schema
const UserSchema = new Schema({
    Name : {
        type: String,
        required: true //this field is mandatory
    },
    Email : {
        type: String,
        required: true,
        unique: true
    }, 
    Location : {
        type : String,
        required: true
    }, 
    Date : {
        type : Date,
        required: true
    },
    Time : {
        type : String,
        required: true
    },
    WeatherData : {
        type : Object, //can store various weather-related details
        required: true
    }

})

//create a model
const User = mongoose.model("User", UserSchema);

//export user model for use in other parts
module.exports= User;