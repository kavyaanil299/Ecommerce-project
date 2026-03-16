import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginSuccess } from "../redux/slices/authSlice"
import API from "../api/axiosInstance"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const dispatch = useDispatch()
const navigate = useNavigate()

const handleLogin = async()=>{

try{

const res = await API.post("/auth/login",{email,password})

const {token,user} = res.data

// save token
localStorage.setItem("token",token)

// send correct payload to redux
dispatch(loginSuccess({
  user:user,
  token:token
}))

alert("Login success")

navigate("/")

}

catch(error){
 console.log(error.response?.data)
 alert(error.response?.data?.message || "Login failed")
}

}

return(

<div className="container mt-5" style={{maxWidth:"400px"}}>

<h3 className="mb-3">Login</h3>

<input
className="form-control mb-2"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn btn-primary w-100" onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login