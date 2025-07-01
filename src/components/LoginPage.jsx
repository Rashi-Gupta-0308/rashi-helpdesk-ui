import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Helpdesk Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="input" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="input" />
        <button onClick={handleLogin} className="btn">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
