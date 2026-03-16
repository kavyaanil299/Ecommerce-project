import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import API from "../api/axiosInstance"
import {useDispatch} from "react-redux"
import {addToCart} from "../redux/slices/cartSlice"

function ProductDetail(){

const {id} = useParams()
const [product,setProduct] = useState()

const dispatch = useDispatch()

useEffect(()=>{

API.get(`/products/${id}`)
.then(res=>setProduct(res.data))

},[])

if(!product) return <h3>Loading...</h3>

return(

<div className="container mt-4">

<div className="row">

<div className="col-md-6">

<img
src={product.image}
className="img-fluid"
/>

</div>

<div className="col-md-6">

<h3>{product.name}</h3>

<h4>${product.price}</h4>

<p>{product.description}</p>

<button
className="btn btn-success"
onClick={()=>dispatch(addToCart(product))}
>

Add To Cart

</button>

</div>

</div>

</div>

)

}

export default ProductDetail