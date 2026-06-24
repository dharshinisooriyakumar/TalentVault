import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="card">
       <div className="title-section">
    <img
      src="/image/image.png"
      alt="Logo"
      className="logo"
      />
     </div>
        <p className="subtitle">
          Resume Screening System
        </p>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />
     


        <button>Login</button>

       <div className="links">
  <Link to="/reset-password">
    Forgot Password?
  </Link>

  <Link to="/signup">
    Create New Account
  </Link>
</div>
      </div>
    </div>
  );
}

export default Login;