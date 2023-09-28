const asyncHandler = require("express-async-handler")


//@desc Get all Contacts
//@reoute GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get All Contacts" });
} );

//@desc Get Contact
//@reoute GET /api/contact
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get Contact for ${req.params.id}` })
});

//@desc Create Contact
//@reoute POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is : " + JSON.stringify(req.body));
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
    res.status(201).json({ message: "Create Contact" });
} );

//@desc Update Contacts
//@reoute PUT /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Contact for ${req.params.id}` })
});

//@desc Delete Contact
//@reoute DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` })
});

module.exports = {getAllContacts,createContact,getContact,updateContact,deleteContact};
