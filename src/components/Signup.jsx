import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="card">

        <h2>Create Account</h2>

        <p className="subtitle">
          Register for TalentVault
        </p>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button>
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Signup;