const mongoose=require("mongoose")
require("dotenv").config()

const connectdb=mongoose.connect(process.env.mongodbURL)

module.exports={connectdb}