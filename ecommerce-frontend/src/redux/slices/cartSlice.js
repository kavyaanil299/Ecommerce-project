import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({

 name:"cart",

 initialState:{
  cartItems:[]
 },

 reducers:{

 addToCart:(state,action)=>{

  const existing = state.cartItems.find(
   item => item._id === action.payload._id
  )

  if(!existing){
   state.cartItems.push(action.payload)
  }

 },

 removeFromCart:(state,action)=>{
  state.cartItems =
  state.cartItems.filter(item=>item._id !== action.payload)
 }

 }

})

export const {addToCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer