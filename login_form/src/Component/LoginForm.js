import React, { useState } from "react";
import "../ComponentStyles/loginform.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation for demo purposes
    if (username === "user" && password === "Admin") {
      setError("");
      onLogin();
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="bg">

    <form  className="bg" onSubmit={handleSubmit}>
      <h2>Login to your Account</h2>
     
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit" className="btn-submit">Sign In</button>
      <a href="/" className="forgot-password">Forgot Password</a>
    </form>
    </div>
    
  );
};

export default LoginForm;
