import React, { useState } from "react";
import axios from "axios";
import Navbar from "./NavBar";
import "../css/NavBar.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      alert("Login successful!");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>

      <Navbar />
      
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
