const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema (
  {
    manufacturer: {type: String, required:true, unique:true},
    flavor: {type: String, required:true},
    categories: {type: Array},
    weight: {type: String},
    price: {type: Number, required:true},
    
  
  },
  { timestamps: true } 

);

module.exports = mongoose.model("Product", ProductSchema);