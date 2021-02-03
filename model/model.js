const mongoose = require("mongoose");

const userschema = new mongoose.Schema
({
    name : {type : String},
    email : {type : String, unique: true},
    mobileno : {type : String},
    password : {type : String},
    otp : {type : String, default:"none"}, 
    role : {type: String, default: "deliveryboy"},
    isverified: {type: String, default : "0"},
    isavailable: {type: String, default: "0"},      // when user login make it 1 and when user logout make it 0
});


const User = new mongoose.model("User", userschema);

// export
module.exports = User;