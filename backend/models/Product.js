const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        tittle: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        price: {type: Number, required: true},
        category: {type: String, required: true},
        type: {type: String, required: true},
        brand: {type: String, required: true},
        inStock: {type: Boolean, default: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model("Product", ProductSchema);
