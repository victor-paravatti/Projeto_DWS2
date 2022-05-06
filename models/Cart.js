const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema (
  {
    userId: {type: String, required:true, unique:true},
    products: [
        {
            productId:{
                type:Number,
                default:1, 
            },
        },
    ],
  
  },
  { timestamps: true } 

);

module.exports = mongoose("Cart", CartSchema);