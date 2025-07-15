import React, { useEffect } from "react";

function Login() {
  return (
    <form className="login">
      <label htmlFor="username">email</label>
      <input type="email" id="username"></input>
      <label htmlFor="password">password</label>
      <input type="password" id="password"></input>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
