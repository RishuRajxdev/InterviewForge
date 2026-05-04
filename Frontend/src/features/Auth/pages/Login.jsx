import React from "react";
import "../auth.form.scss";
const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter the email address"
            />
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <button className="button primary-button">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
