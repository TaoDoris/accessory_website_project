import React from "react";
import LoginForm from "./LoginForm";
import SignUpZone from "./SignUpZone";


const Login = () => {
  return (
    <div className="container mt-5 pt-4">

      <div className="row">
        <div className="col-8">
          <LoginForm />
        </div>
        <div className="col-4">
          <SignUpZone />
        </div>
      </div>

    </div>
  );
};

export default Login;
