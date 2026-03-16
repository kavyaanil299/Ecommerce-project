import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"

import ProtectedRoute from "./components/ProtectedRoute"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/cart" element={<Cart/>}/>

<Route
path="/orders"
element={
<ProtectedRoute>
<Orders/>
</ProtectedRoute>
}
/>

<Route path="/contact" element={<Contact/>}/>
<Route path="/product/:id" element={<ProductDetail/>}/>

</Routes>

<Footer/>

</BrowserRouter>

)

}

export default App