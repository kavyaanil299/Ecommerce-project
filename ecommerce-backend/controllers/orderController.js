const Order = require("../models/order")

const createOrder = async (req,res)=>{
  try{

    const {products,total} = req.body

    const order = await Order.create({
      user:req.user.id,
      products,
      total
    })

    res.json(order)

  }catch(error){
    res.status(500).json({message:error.message})
  }
}

const getOrders = async (req,res)=>{
  try{

    if(req.user.role === "admin"){
      const orders = await Order.find()
      return res.json(orders)
    }

    const orders = await Order.find({ user: req.user.id })
    res.json(orders)

  }catch(error){
    res.status(500).json({message:error.message})
  }
}

module.exports = {createOrder,getOrders}