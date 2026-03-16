import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

function Navbar(){

const cart = useSelector(state=>state.cart.cartItems)

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/">Ecommerce</Link>

<button className="navbar-toggler"
data-bs-toggle="collapse"
data-bs-target="#menu">

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse" id="menu">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<Link className="nav-link" to="/">Home</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/cart">
Cart ({cart.length})
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/orders">Orders</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/contact">Contact</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>

</ul>

</div>

</div>

</nav>

)

}

export default Navbar