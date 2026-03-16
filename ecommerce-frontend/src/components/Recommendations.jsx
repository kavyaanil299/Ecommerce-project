import {useEffect,useState} from "react"
import API from "../api/axiosInstance"
import ProductCard from "./ProductCard"

function Recommendations(){

const [products,setProducts] = useState([])

useEffect(()=>{

API.get("/analytics/recommendations")
.then(res=>setProducts(res.data.products))

},[])

return(

<div className="container mt-5">

<h4>Recommended Products</h4>

<div className="row">

{products.map(p=>(
<ProductCard key={p._id} product={p}/>
))}

</div>

</div>

)

}

export default Recommendations