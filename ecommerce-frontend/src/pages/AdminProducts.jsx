import {useEffect,useState} from "react"
import API from "../api/axiosInstance"

function AdminProducts(){

const [products,setProducts] = useState([])

const [name,setName] = useState("")
const [price,setPrice] = useState("")

const loadProducts = async()=>{

const res = await API.get("/products")

setProducts(res.data)

}

useEffect(()=>{
loadProducts()
},[])

const addProduct = async()=>{

await API.post("/products",{name,price})

loadProducts()

}

const deleteProduct = async(id)=>{

await API.delete(`/products/${id}`)

loadProducts()

}

return(

<div className="container mt-4">

<h3>Admin Products</h3>

<div className="row mb-3">

<div className="col">
<input
className="form-control"
placeholder="Product Name"
onChange={(e)=>setName(e.target.value)}
/>
</div>

<div className="col">
<input
className="form-control"
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>
</div>

<div className="col">
<button
className="btn btn-primary"
onClick={addProduct}
>
Add
</button>
</div>

</div>

<table className="table">

<thead>
<tr>
<th>Name</th>
<th>Price</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{products.map(p=>(
<tr key={p._id}>

<td>{p.name}</td>

<td>{p.price}</td>

<td>

<button
className="btn btn-danger"
onClick={()=>deleteProduct(p._id)}
>

Delete

</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default AdminProducts