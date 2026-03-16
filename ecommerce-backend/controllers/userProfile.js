const User = require("../models/user");

exports.getUserProfile = async (req,res)=>{

 try{

   const user = await User.findById(req.user.id).select("-password");

   res.json(user);

 }catch(error){

   res.status(500).json({message:error.message});

 }

};


exports.updateUserProfile = async (req,res)=>{

 try{

   const user = await User.findByIdAndUpdate(
     req.user.id,
     req.body,
     {new:true}
   ).select("-password");

   res.json(user);

 }catch(error){

   res.status(500).json({message:error.message});

 }

};


exports.deleteUserProfile = async (req,res)=>{

 try{

   await User.findByIdAndDelete(req.user.id);

   res.json({message:"User deleted successfully"});

 }catch(error){

   res.status(500).json({message:error.message});

 }

};