const mongoose=require("mongoose")

const registerschema=mongoose.Schema({
    username:String,
    email:String,
    password:String
})

 const registermodule=mongoose.model("register",registerschema)
 module.exports={registermodule}