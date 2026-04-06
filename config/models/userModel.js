const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    userName: {
        type : String,
        required : [true, "please add the user name"],
        unique : true
    },
    password: {
        type : String,
        required : [true, "please add the password"]
    },
    email: {
        type : String,
        required : [true, "please add an email"],
        unique : [true, "email already exists"]
    },
},
  {
    timestamps : true
  }
);
module.exports = mongoose.model("users", userSchema);