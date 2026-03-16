import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import API from "../api/axiosInstance"
import ProductCard from "../components/ProductCard"
import {setProducts} from "../redux/slices/productSlice"
import Recommendations from "../components/Recommendations"


function Home(){

const dispatch = useDispatch()
const products = useSelector(state=>state.products.products)

const [search,setSearch] = useState("")
const [category,setCategory] = useState("")

const loadProducts = async()=>{

const res = await API.get(
`/products?search=${search}&category=${category}`
)

dispatch(setProducts(res.data))

}

useEffect(()=>{
loadProducts()
},[])

return(

<div className="container mt-4">

<div className="row mb-3">

<div className="col-md-6">

<input
className="form-control"
placeholder="Search product..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<div className="col-md-4">

<select
className="form-control"
onChange={(e)=>setCategory(e.target.value)}
>

<option value="">All Categories</option>
<option value="electronics">Electronics</option>
<option value="clothing">Clothing</option>
<option value="books">Books</option>

</select>

</div>

<div className="col-md-2">

<button
className="btn btn-primary w-100"
onClick={loadProducts}
>

Search

</button>

</div>

</div>

<div className="row">

{products.map(p=>(
<ProductCard key={p._id} product={p}/>
))}

</div>
<Recommendations/>
</div>

)

}

export default Home