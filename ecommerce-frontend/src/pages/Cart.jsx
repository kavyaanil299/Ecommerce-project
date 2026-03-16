import { useSelector } from "react-redux"
import API from "../api/axiosInstance"

function Cart(){

const cartItems = useSelector(state => state.cart.cartItems) || []

const handlePlaceOrder = async () => {

  try{

    const orderData = {

      products: cartItems.map(item => ({
        productId: item._id,
        quantity: 1
      })),

      total: cartItems.reduce((sum,item)=> sum + item.price,0)

    }

    await API.post("/orders", orderData)

    alert("Order placed successfully")

  }catch(err){
    console.log(err.response?.data)
    alert(err.response?.data?.message||"Order failed")
  }

}

return(

<div className="container mt-4">

<h2>Your Cart</h2>

{cartItems.length === 0 ? (
  <p>Cart is empty</p>
) : (

cartItems.map(item => (

<div key={item._id} className="card p-3 mb-2">

<h5>{item.name}</h5>
<p>${item.price}</p>

</div>

))

)}

<button
className="btn btn-success mt-3"
onClick={handlePlaceOrder}
>
Place Order
</button>

</div>

)

}

export default Cart