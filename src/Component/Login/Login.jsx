import React, { useState } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CloseButton } from "react-bootstrap";
function Login({setIsSignInOpen}) {
  const [sinup, signupupdater] = useState(false);
  const sinuphandler = () => {
    signupupdater(true);
  };
  const loginHandler = () => {
    signupupdater(false);
  };
  const closehandler=()=>{
    setIsSignInOpen(false)
  }
  return (
    <div className="logincontainer">
      <div className="logindivcontainer">
        <div className="closebutton" onClick={closehandler}>
          <CloseButton  />
        </div>
        {sinup ? <h1>Sign Up</h1> : <h1>Login</h1>}

        <form className="forminput">
          <input type="text" placeholder="YourName" />
          {sinup && <input type="text" placeholder="YourName" />}
          <input type="password" placeholder="password" />
          {sinup ? (
            <button className="button">Create account</button>
          ) : (
            <button className="button">Login</button>
          )}
        </form>
        <div className="checkboc-container">
          <input type="checkbox" />
          <p className="p">
            By checking .i agree to the term & privact policy.
          </p>
        </div>
        <div className="last-login-div">
          {sinup ? (
            <p p className="p">
              already have an account ?
            </p>
          ) : (
            <p className="p">createa new account ?</p>
          )}
          {sinup ? (
            <button onClick={loginHandler}>Log in here</button>
          ) : (
            <button onClick={sinuphandler}>Click here</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
