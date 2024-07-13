const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name : {
        type: String,
        required: true
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
        type : Object,
        required: true
    }

})

const User = mongoose.model("User", UserSchema);

module.exports= User;