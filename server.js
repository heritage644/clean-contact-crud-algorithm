const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbconnection");
const app =  express();
const env = require("dotenv").config()
const port = process.env.PORT || 5000
app.use(express.json())
connectDB();                                                                                                                                                                    
app.use(
    "/api/contact",
    require("./routes/contactroutes")
)
app.use(
    "/api/users",
    require("./routes/usersroutes")
)
app.use(errorHandler)
app.listen(port, () => {
console.log(`server running on ${port}`)
})