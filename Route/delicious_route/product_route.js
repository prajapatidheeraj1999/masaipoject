
const express=require("express")
const { licious_product_model } = require("../../Model/delicious_model/prodect_monde")

const licious_route=express.Router()

licious_route.get("/",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:query}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/search",async(req,res)=>{
    console.log("geting requset")
     let {texts}=req.body
    console.log(texts)

        try {

            let data=await licious_product_model.aggregate([{$match:{$or:[{name:{$regex:texts}},{title:{$regex:texts}},{discription:{$regex:texts}}]}}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})

licious_route.post("/add",async(req,res)=>{

    try{
         let data=await new licious_product_model(req.body)
         await data.save()
         res.send({"mas":"product is added"})

    }catch(error)
    {
        res.send({"mas":"somthing is wrond product not added"})


    }
    
})

module.exports={licious_route}