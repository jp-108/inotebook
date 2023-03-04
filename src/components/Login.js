import React, { useState } from "react";
import { useNavigate} from "react-router-dom"
function Login() {
  let navigate = useNavigate("")

  const [credential, setCredential]=useState({email:"", password:""})

  const handleOnSubmit =async (e)=>{
    e.preventDefault();
    let response = await fetch("http://localhost:5400/route/login",{
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    
    },
    body : JSON.stringify({ email: credential.email, password: credential.password})

  })
   let json = await response.json();
   console.log(json)
   if(json.success){
    localStorage.setItem('token',json.authToken)
    navigate("/home")
   }
   else{
    alert("Enter details correctly")
   }
  }

  const onChange = (e)=>{
    setCredential({...credential, [e.target.name]:e.target.value})
  }
  
  return (
    <div>
      <form className="container" onSubmit={handleOnSubmit}>
        <div className="mb-3">
        <h2 className="my-3">Login:</h2>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={credential.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credential.password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button  className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
