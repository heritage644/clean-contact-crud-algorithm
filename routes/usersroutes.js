const express = require("express");
const { registerContact, loginUser, currentUser } = require("../controllers/userController");
const router = express.Router()
const validateToken = require("../middleware/validateTokenHandler")
router.post("/register" , registerContact);

router.post("/login" ,loginUser);
router.get("/current" , validateToken,  currentUser );
module.exports = router;