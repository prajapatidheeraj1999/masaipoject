const express =require("express")
const { connectdb } = require("./db")
const { licious_route } = require("./Route/delicious_route/product_route")
const cors = require('cors')
const { registerroute } = require("./Route/chat_route/chat_register_route")

require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())

app.use("/licious",licious_route)
app.use("/chat",registerroute)


app.listen(process.env.PORT,async()=>{

    try{
        await connectdb
        console.log("connection is stbalesh")
    }catch(error)
    {
        console.log("something is wrong connection is not stablesh")
    }

})