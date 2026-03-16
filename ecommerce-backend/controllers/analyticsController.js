const Product = require("../models/product")

exports.getRecommendations = async (req,res)=>{

 try{

  const category = req.query.category

  let products

  if(category){
   products = await Product.find({category}).limit(4)
  }else{
   products = await Product.find().limit(4)
  }

  res.json({
   message:"Recommended Products",
   products
  })

 }catch(error){

  res.status(500).json({message:error.message})

 }

}