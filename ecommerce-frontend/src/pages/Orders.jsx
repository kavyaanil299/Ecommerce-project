import {useEffect,useState} from "react"
import API from "../api/axiosInstance"

function Orders(){

const [orders,setOrders] = useState([])

useEffect(()=>{

 const fetchOrders = async()=>{

  try{

   const res = await API.get("/orders")

   setOrders(res.data)

  }catch(error){

   console.log(error)

  }

 }

 fetchOrders()

},[])

return(

<div className="container mt-4">

<h2>Your Orders</h2>

{orders.length === 0 ? (

<p>No orders yet</p>

) : (

orders.map((order)=>(
<div key={order._id} className="card p-3 mb-2">
Order ID: {order._id}
</div>
))

)}

</div>

)

}

export default Orders