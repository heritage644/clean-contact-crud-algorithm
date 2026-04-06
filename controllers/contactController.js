const asyncHandler = require("express-async-handler")
const Contact = require("../config/models/contactmodel")
//@desc Get all contacts 
//@routes GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
        const contacts = await Contact.find()
        const {name, email, contact, address} = req.body
        if (!name || !email || !contact || !address) {
            throw new Error("this user does not exist");
        }else {
            res.send(`this is the contact credentials ${name} ${email} ${contact} ${address}`)
        }
         res.status(200).json(contacts)
})
//@desc create contact
//@routes POST /api/contact
//@access public
const createContact = asyncHandler(async (req, res) => {
   
    const {name, email, contact, address} = req.body
    if (!name || !email || !contact || !address) {
        res.status(400)
        throw new Error("all fields are required")
    } 
       const contacts = await Contact.create({
        name,
        email,
        contact,
        address
       })
    
         res.status(201).json(contacts)
    

})

//@desc Get contact by id
//@routes GET /api/contact/:id
//@acess public
const getContactById = asyncHandler( async (req, res) => {
    const singleContact = await Contact.findById(req.params.id)
    if (!singleContact) {
        res.status(404)
        throw new Error("contact not found")
    }
         res.status(200).json(singleContact)
})
//@desc Update contact
//@routes /api/contact/:id
//@acess public

const updateContact = asyncHandler(async (req, res) => {
     const updateSingleContact = await Contact.findById(req.params.id)
    if (!updateSingleContact) {
        res.status(404)
        throw new Error("contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
         res.status(200).json(updatedContact)
}
)
//@desc delete contact
//@routes /api/contact/:id
//@acess public
const deleteUser =asyncHandler (async (req, res) => {
      const deleteContact = await Contact.findById(req.params.id)
    if (!deleteContact) {
        res.status(404)
        throw new Error("contact not found")
    }
    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
        
         res.status(200).json(deletedContact)
         res.send("contact deleted")
})
module.exports = {
    getContact,
    createContact,
    getContactById,
    updateContact,
    deleteUser

}