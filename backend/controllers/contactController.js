import { Contact } from "../models/contactUsModel.js";


//contact

export const contactUs  = async (req,res)=>{
    try {
        const {name,email,phone,message} = req.body;
        const contactUser = new Contact({
            name,
            email,
            phone,
            message
        })
       await contactUser.save()
        res.status(201).json({message:"contact created successfully",
            contactUser:{
            _id:contactUser._id,
            name:contactUser.name,
            email:contactUser.email,
            phone:contactUser.phone,
            message:contactUser.message
        }});
    } catch (err) {
        console.log(err.message)
        res.status(500).json("error")
    }
}

