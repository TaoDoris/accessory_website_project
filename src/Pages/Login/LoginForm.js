import React from "react";
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="row">
      <div className="col-6">
        <form className="d-flex flex-column">
          <h2 className="mb-5">Log In</h2>

          <label htmlFor="">Email</label>
          <input className="mb-3" type="email" name="email" required />

          <label htmlFor="">Password</label>
          <input className="mb-5" type="password" name="password" required />

          <button className="mb-3 border-0" type="submit">
            Log In
          </button>
          <a
            href="#"
            className="align-self-center text-decoration-none fw-light"
          >
            forget password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
