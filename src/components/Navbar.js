import React from "react";
import {Link, useLocation} from "react-router-dom";

function Navbar() {
  let location = useLocation()

  const handleOnclick = () =>{
    localStorage.removeItem("token");
} 
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {!localStorage.getItem("token") ? <>
            <Link className="btn mx-2 btn-dark" type="button" to="/login">
              Login
              </Link>
            <Link className="btn btn-outline-dark" type="button" to="/signup">
              Signup
            </Link></> :   <Link className="btn mx-2 btn-dark" type="button" onClick={handleOnclick} to="/login">
              Log out
              </Link>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
