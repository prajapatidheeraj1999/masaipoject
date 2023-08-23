const express=require("express")
const { registermodule } = require("../../Model/chat_model/chatregister")


const registerroute=express.Router()

registerroute.post("/register",async(req,res)=>{
    let data=req.body
    console.log(data)
    try{
        let adduser=new registermodule(data)
        let maindata=await adduser.save()
        res.status(200).send("user register succefull")

    }catch(error)
    {
        res.status(500).send("somthing is wrong")

    }
})
module.exports={registerroute}