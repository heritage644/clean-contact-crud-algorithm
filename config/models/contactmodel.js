const mongoose = require("mongoose")
const contactSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true, "please add the contact name"]
    },
    email: {
        type : String,
        required : [true, "please add an email"],
        unique : true
    },
    contact: {
        type : String,
        required : [true, "please add a contact"]
    },
    address: {
        type : String,
        required : [true, "please add an address"]
    }
},
  {
    timestamps : true
  }
);
module.exports = mongoose.model("Contact", contactSchema);