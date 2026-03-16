import {useDispatch} from "react-redux"
import {addToCart} from "../redux/slices/cartSlice"
import {Link} from "react-router-dom"

function ProductCard({product}){

const dispatch = useDispatch()

return(

<div className="col-lg-3 col-md-4 col-sm-6 mb-4">

<div className="card h-100 shadow">

<Link to={`/product/${product._id}`}>

<img
src={product.image}
alt={product.name}
className="card-img-top"
style={{height:"200px",objectFit:"cover"}}
/>

</Link>

<div className="card-body">

<h5>{product.name}</h5>

<p>${product.price}</p>

<button
className="btn btn-primary w-100"
onClick={()=>dispatch(addToCart(product))}
>

Add To Cart

</button>

</div>

</div>

</div>

)

}

export default ProductCard