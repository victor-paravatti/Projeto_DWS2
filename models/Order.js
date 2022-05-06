const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema (
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
    amount: {type:Number, require:true},
    andress: {type:Object, require: true},
    status: {type:String, default: "peding"},
  },
  { timestamps: true } 

);

module.exports = mongoose("Order", OrderSchema);   