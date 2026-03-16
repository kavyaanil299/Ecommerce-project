const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  products:[{
     productId:String,
     quantity:Number
  }],

  total:Number,
  status:{
    type:String,
    default:"Pending"
  }

});

module.exports = mongoose.model("Order",orderSchema);