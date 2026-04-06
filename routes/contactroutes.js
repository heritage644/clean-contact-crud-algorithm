const express = require("express")
const router = express.Router()
const
 {
    getContact,
    updateContact,
    deleteUser,
    getContactById,
    createContact
} =  require("../controllers/contactController")

router.route( "/").get(getContact).post(createContact)

  
   router.route( "/:id").put(updateContact).get(getContactById).delete(deleteUser)
     
module.exports = router;