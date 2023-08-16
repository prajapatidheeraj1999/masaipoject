
const express=require("express")
const { licious_product_model } = require("../../Model/delicious_model/prodect_monde")
const {ObjectId}=require("mongodb")
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
licious_route.get("/detail",async(req,res)=>{
    console.log("geting requset")
     let {id}=req.query
     let objectid=new ObjectId(id)
     let query={_id:objectid}
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:query}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/chicken",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:{name:"chicken",...query}}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/fish",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:{name:"fish",...query}}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/mutton",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:{name:"mutton",...query}}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/ready_to_cook",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:{name:"Ready to Cook",...query}}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/prawns",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:{name:"Prawns",...query}}])
            res.send(data)
            
        } catch (error) {
            
            res.send({"mas":"data not found"})
        }

})
licious_route.get("/eggs",async(req,res)=>{
    console.log("geting requset")
     let query=req.query
    console.log(query)

        try {
            let data=await licious_product_model.aggregate([{$match:{name:"Eggs",...query}}])
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