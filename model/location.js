const mongoose = require("mongoose");

const locSchema = new mongoose.Schema({
    longitude : {type : String, default : "0"},
    latitude : {type : String, default : "0"}
});

const userLocationSchema = new mongoose.Schema
({
    userid : {type : String},
    name : {type : String},
    location : [locSchema]
});
const Location = new mongoose.model("Location", userLocationSchema);
module.exports = Location;