const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../config/models/userModel")
const jwt = require("jsonwebtoken")
const env = require("dotenv").config()
//@desc register user
//@routes POST /api/users/register
//@access public
const registerContact= asyncHandler(async (req, res)=>{
    const {userName, password, email} = req.body
    if (!userName || !password || !email) {
        res.status(400)
        throw new Error("all fields are required")
    }
    const userAvailable = await User.findOne({email})
    if (userAvailable) {
        res.status(400)
        throw new Error("user already exists")
    }
//hash password
const hashedPassword = await bcrypt.hash(password, 10)
console.log(hashedPassword)

    const user = await User.create({
        userName,
        hashedPassword,
        email
    })
    if (user ){
        res.status(201).json({
            _id : user.id,
            userName : user.userName,
            email : user.email

        })
    }else {
        res.status(400)
        throw new Error("invalid user data")
    }
res.send("user created")
res.json(user);
});

//@desc login user
//@routes POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res)=>{
    const {email, password} = req.body
  if (!email || !password) {
    res.status(400)
    throw new Error("all fields are required")
  }
  const user = await User.findOne({email})
  if (user && (await bcrypt.compare(password, user.password)))  {
    const accessToken = jwt.sign({
        user : {
            userName : user.userName,
            email : user.email,
            id: user.id
        }
    }, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "1m"}
) 
 res.status(200).json({accessToken})
  } else {
    res.status(401)
    throw new Error("email or password invalid")
  }});
 
//@desc current user
//@routes GET /api/users
//@access private

const currentUser = asyncHandler(async (req, res)=>{
res.json(req.user);
});


module.exports = {
    registerContact,
    loginUser,
    currentUser
};