const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const validateToken = asyncHndler(async (req,res,next)=> {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.envv.ACCESS_TOKEN_SECRET, (err, decode)=> {
            if(err){
                res.status(401)
                throw new Error ("user not authorized")
            }
            req.user = decode.user;
            next()
        });
        if(!token) {
            res.status(401)
            throw new Error(" user is not verifoed ")
        }
    }
})