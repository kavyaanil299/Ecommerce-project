import {useDispatch} from "react-redux"
import {removeFromCart} from "../redux/slices/cartSlice"

function CartItem({item}){

const dispatch = useDispatch()

return(

<div className="card mb-3 p-3">

<div className="d-flex justify-content-between">

<div>
<h5>{item.name}</h5>
<p>${item.price}</p>
</div>

<button
className="btn btn-danger"
onClick={()=>dispatch(removeFromCart(item._id))}
>
Remove
</button>

</div>

</div>

)

}

export default CartItem