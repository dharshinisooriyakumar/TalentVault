import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="container">
      <div className="card">

        <img
          src="/image/image.png"
          alt="Logo"
          className="logo"
        />

        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <button>
          Send Reset Link
          <Link to="/reset-success">
  Send Reset Link
</Link>
        </button>

      </div>
    </div>
  );
}

export default ResetPassword;
