import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <div class="container">
      <form onSubmit={handleSubmit} className="login">
        <div class="login-input">
          <label htmlFor="username">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" id="username"></input>
        </div>
        <div class="login-input">
          <label htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} type="password" id="password"></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
