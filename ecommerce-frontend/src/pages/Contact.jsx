function Contact(){

return(

<div className="container mt-5">

<h3>Contact Us</h3>

<form>

<input
className="form-control mb-2"
placeholder="Name"
/>

<input
className="form-control mb-2"
placeholder="Email"
/>

<textarea
className="form-control mb-2"
placeholder="Message"
/>

<button className="btn btn-primary">
Send
</button>

</form>

</div>

)

}

export default Contact