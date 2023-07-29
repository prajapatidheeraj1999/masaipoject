const mongoose=require("mongoose")

const licious_product_shema=mongoose.Schema({
        image: String,
        title: String,
        discription: String,
        wait: Number,
        pieces: String,
        servers: String,
        current_price: Number,
        original_price: Number,
        off: Number,
        deliver_day: String,
        time: String,
        name: String,
        category: String
})

const licious_product_model=mongoose.model("licious_product",licious_product_shema)

module.exports={licious_product_model}

