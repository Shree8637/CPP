import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css"; // Import the CSS file
import NavBar from "./NavBar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to save user history
  const saveUserHistory = async (action) => {
    try {
      // Send username and action to your backend
      await axios.post("http://localhost:5000/history", { username, action });
    } catch (error) {
      console.error("Error saving history:", error);
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token); // Store JWT token

      // Save login action to user history right after a successful login
      await saveUserHistory("User logged in");
    } catch (error) {
      alert(error.response?.data?.error || "Login error");
    }
  };

  return (

    <>
    <NavBar />
    <div className="ring">
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
        </form>
        <div className="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
