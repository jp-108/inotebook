import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {

    const navigate = useNavigate("")
    const [createUser, setCreateUser] = useState({
        userName:"",
        email:"",
        password:""
    })



    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:5400/route/signup", {
            method:"Post",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({name:createUser.userName, email:createUser.email, password:createUser.password})
        })
        let json = await response.json();
        if(json.success){
            localStorage.setItem('token', json.authToken)
            navigate("/home");
        }else{

        }
       
    }

    const handleOnchange = (e) =>{
        setCreateUser({...createUser,[e.target.name]:e.target.value})
    }


  return (
    <div>
      <div>
        <form className="container" onSubmit={handleOnSubmit}>
            <h2 className="my-3">Sign Up:</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="userName"
              value={createUser.userName}
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={createUser.email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleOnchange}
              required
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
              value={createUser.password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleOnchange}
              minLength = {4}
              required
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
          <button className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
